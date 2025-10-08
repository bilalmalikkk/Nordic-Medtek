import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, 'cms.db');
const { Database } = sqlite3.verbose();

async function runMigrations() {
    return new Promise((resolve, reject) => {
        const db = new Database(DB_PATH);
        
        console.log('🔄 Running database migrations...');
        
        Promise.all([
            checkAndAddColumn(db, 'products', 'rich_text', 'TEXT'),
            checkAndAddColumn(db, 'products', 'pdf_url', 'TEXT'),
            checkAndAddColumn(db, 'products', 'datasheet_url', 'TEXT')
        ])
        .then(() => {
            console.log('✅ Database migrations completed successfully');
            db.close(() => resolve());
        })
        .catch((error) => {
            console.error('❌ Migration error:', error);
            db.close(() => reject(error));
        });
    });
}

function checkAndAddColumn(db, tableName, columnName, columnType) {
    return new Promise((resolve, reject) => {
        // Check if column exists
        db.all(`PRAGMA table_info(${tableName})`, (err, columns) => {
            if (err) {
                reject(err);
                return;
            }
            
            const columnExists = columns.some(col => col.name === columnName);
            
            if (columnExists) {
                console.log(`  ✓ Column '${columnName}' already exists in ${tableName}`);
                resolve();
                return;
            }
            
            // Add column if it doesn't exist
            const alterQuery = `ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType}`;
            console.log(`  + Adding column '${columnName}' to ${tableName}`);
            
            db.run(alterQuery, (err) => {
                if (err) {
                    console.error(`  ✗ Failed to add column '${columnName}':`, err.message);
                    reject(err);
                } else {
                    console.log(`  ✓ Column '${columnName}' added successfully`);
                    resolve();
                }
            });
        });
    });
}

// Run migrations if this file is executed directly
const isMainModule = process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/'));

if (isMainModule || process.argv[1]?.includes('migrate.js')) {
    console.log('Starting migration script...');
    runMigrations()
        .then(() => {
            console.log('✨ Migration script completed successfully');
            process.exit(0);
        })
        .catch((error) => {
            console.error('❌ Migration script failed:', error);
            process.exit(1);
        });
}

export default runMigrations;

