import express from 'express';
import multer from 'multer';
import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { insert, queryOne } from '../database/init.js';

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure multer for CSV file upload
const upload = multer({
    dest: 'temp/',
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'text/csv' || file.originalname.endsWith('.csv')) {
            cb(null, true);
        } else {
            cb(new Error('Only CSV files are allowed'), false);
        }
    },
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    }
});

// Import products from CSV
router.post('/products', [
    authenticateToken,
    requireAdmin,
    upload.single('csvFile')
], async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'CSV file is required' });
        }

        const filePath = req.file.path;
        const products = [];
        const errors = [];
        let successCount = 0;

        // Parse CSV file
        await new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (row) => {
                    // Skip empty rows
                    if (!row['Product name'] && !row['Item No:']) {
                        return;
                    }

                    const productData = {
                        title: row['Title'] || row['Product name'],
                        product_name: row['Product name'],
                        item_number: row['Item No:'],
                        technical_data: row['Technical data'],
                        rich_text_description: row['Rich Text'],
                        image_url: row['Image'],
                        pdf_url: row['PDF file'],
                        sorting: parseInt(row['Sorting']) || 0,
                        manual_sort: row['Manual sort'],
                        status: row['Status'] === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT',
                        publish_date: row['Publish Date'] || null,
                        unpublish_date: row['Unpublish Date'] || null,
                        external_id: row['ID'],
                        is_featured: row['ProductPrivate'] === '/productprivate/' ? 1 : 0
                    };

                    // Generate slug
                    productData.slug = productData.title
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/-+/g, '-')
                        .trim('-');

                    products.push(productData);
                })
                .on('end', resolve)
                .on('error', reject);
        });

        // Import products to database
        for (const product of products) {
            try {
                // Check if product already exists
                const existingProduct = await queryOne(
                    'SELECT id FROM products WHERE item_number = ? OR external_id = ?',
                    [product.item_number, product.external_id]
                );

                if (existingProduct) {
                    errors.push({
                        item_number: product.item_number,
                        error: 'Product already exists',
                        action: 'skipped'
                    });
                    continue;
                }

                // Insert product
                await insert('products', product);
                successCount++;

            } catch (error) {
                errors.push({
                    item_number: product.item_number,
                    error: error.message,
                    action: 'failed'
                });
            }
        }

        // Clean up temp file
        fs.unlinkSync(filePath);

        res.json({
            message: `CSV import completed: ${successCount} products imported successfully`,
            summary: {
                total: products.length,
                successful: successCount,
                failed: errors.filter(e => e.action === 'failed').length,
                skipped: errors.filter(e => e.action === 'skipped').length
            },
            errors: errors.length > 0 ? errors : undefined
        });

    } catch (error) {
        console.error('CSV import error:', error);
        
        // Clean up temp file if it exists
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(500).json({ 
            error: 'Import failed',
            message: error.message
        });
    }
});

export default router;
