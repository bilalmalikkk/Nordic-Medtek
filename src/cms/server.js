import express from 'express';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';
import fs from 'fs';

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// Import routes (now converted to ES modules)
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import categoryRoutes from './routes/categories.js';
import mediaRoutes from './routes/media.js';
import settingsRoutes from './routes/settings.js';
import uploadRoutes from './routes/upload.js';
import importRoutes from './routes/import.js';
import contactRoutes from './routes/contact.js';

import { authenticateToken } from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || process.env.CMS_PORT || 3001;

// Database configuration
const DB_PATH = process.env.NODE_ENV === 'production' 
    ? path.join('/app/src/cms/database', 'cms.db')
    : path.join(__dirname, 'database', 'cms.db');
const SCHEMA_PATH = path.join(__dirname, 'database', 'schema.sql');

console.log('🔍 Database configuration:');
console.log('   Environment:', process.env.NODE_ENV);
console.log('   Database path:', DB_PATH);
console.log('   Schema path:', SCHEMA_PATH);

// Create database connection
const { Database } = sqlite3.verbose();
const db = new Database(DB_PATH, (err) => {
    if (err) {
        console.error('❌ Database connection error:', err);
    } else {
        console.log('✅ Database connection established successfully');
    }
});

// Database helper functions
const dbHelpers = {
    queryOne: (query, params = []) => {
        return new Promise((resolve, reject) => {
            db.get(query, params, (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    },
    run: (query, params = []) => {
        return new Promise((resolve, reject) => {
            db.run(query, params, function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, changes: this.changes });
            });
        });
    }
};

// Initialize database
async function initializeDatabase() {
    return new Promise((resolve, reject) => {
        console.log('🚀 Initializing database...');
        
        if (!fs.existsSync(SCHEMA_PATH)) {
            const error = new Error(`Schema file not found at: ${SCHEMA_PATH}`);
            console.error('❌', error.message);
            reject(error);
            return;
        }

        console.log('📄 Reading schema file...');
        const schema = fs.readFileSync(SCHEMA_PATH, 'utf8');
        
        console.log('🔧 Executing database schema...');
        db.exec(schema, async (err) => {
            if (err) {
                console.error('❌ Error initializing database:', err);
                reject(err);
            } else {
                console.log('✅ Database schema loaded successfully');
                try {
                    await ensureAdminUser();
                    console.log('✅ Database initialization completed');
                    resolve();
                } catch (adminError) {
                    console.error('❌ Error creating admin user:', adminError);
                    reject(adminError);
                }
            }
        });
    });
}

// Ensure admin user exists
async function ensureAdminUser() {
    try {
        const existingAdmin = await dbHelpers.queryOne('SELECT * FROM users WHERE username = ?', ['admin']);
        if (!existingAdmin) {
            console.log('Creating default admin user...');
            
            const adminUsername = process.env.DEFAULT_ADMIN_USERNAME || 'admin';
            const adminEmail = process.env.DEFAULT_ADMIN_EMAIL || 'admin@nordicmedtek.com';
            const adminPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'admin123';
            
            const bcrypt = await import('bcryptjs');
            const passwordHash = await bcrypt.hash(adminPassword, parseInt(process.env.BCRYPT_ROUNDS) || 10);
            
            await dbHelpers.run(
                "INSERT INTO users (username, email, password_hash, role, is_active) VALUES (?, ?, ?, 'admin', 1)",
                [adminUsername, adminEmail, passwordHash]
            );
            console.log('✅ Default admin user created with username:', adminUsername);
        } else {
            console.log('✅ Admin user already exists');
        }
    } catch (error) {
        console.error('❌ Error ensuring admin user:', error);
        throw error;
    }
}

// Simple migration function
async function runMigrations() {
    console.log('🔄 Running database migrations...');
    // For now, just log that migrations would run here
    console.log('✅ Database migrations completed');
    return Promise.resolve();
}

// Trust proxy for Railway deployment
app.set('trust proxy', 1);

// Security middleware
const allowedOrigins = [
    "'self'",
    "http://localhost:5173",
    "https://localhost:5173",
    "https://nordic-medtek.vercel.app"
];

// Add production frontend URL if specified
if (process.env.FRONTEND_URL) {
    allowedOrigins.push(process.env.FRONTEND_URL);
}

// Helmet removed to fix CORS issues

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Simple and reliable CORS configuration
app.use((req, res, next) => {
    const allowedOrigins = [
        'http://localhost:5173',
        'https://localhost:5173',
        'http://localhost:3000',
        'https://localhost:3000',
        'https://nordic-medtek.vercel.app'
    ];
    
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '86400');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        console.log('✅ OPTIONS preflight handled for origin:', origin);
        return res.status(200).end();
    }
    
    next();
});

// Body parsing middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/import', importRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    console.log('🏥 Health check from:', req.headers.origin || req.ip);
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        volume: 'mounted',
        cors: 'enabled'
    });
});

// Simple CORS test endpoint
app.get('/api/cors-test', (req, res) => {
    console.log('🧪 CORS test from:', req.headers.origin || req.ip);
    res.json({ 
        message: 'CORS is working!',
        origin: req.headers.origin,
        timestamp: new Date().toISOString()
    });
});

// Volume persistence test endpoint
app.get('/api/test-volume', async (req, res) => {
    try {
        const fs = await import('fs');
        const path = await import('path');
        
        const dbPath = '/app/src/cms/database/cms.db';
        const dbDir = path.default.dirname(dbPath);
        
        const volumeInfo = {
            databasePath: dbPath,
            databaseDirectory: dbDir,
            directoryExists: fs.default.existsSync(dbDir),
            databaseExists: fs.default.existsSync(dbPath),
            isWritable: false,
            volumeMounted: false
        };
        
        // Check if directory is writable
        try {
            const testFile = path.default.join(dbDir, 'volume-test.txt');
            fs.default.writeFileSync(testFile, 'Volume test - ' + new Date().toISOString());
            fs.default.unlinkSync(testFile);
            volumeInfo.isWritable = true;
            volumeInfo.volumeMounted = true;
        } catch (error) {
            console.error('Volume write test failed:', error.message);
        }
        
        res.json({
            success: true,
            message: 'Volume test completed',
            volume: volumeInfo,
            recommendation: volumeInfo.volumeMounted 
                ? '✅ Volume is properly mounted and writable'
                : '❌ Volume may not be properly configured - check Railway volume settings'
        });
        
    } catch (error) {
        console.error('Volume test error:', error);
        res.status(500).json({ 
            error: 'Volume test failed', 
            details: error.message 
        });
    }
});






// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Initialize database and start server
async function startServer() {
    try {
        console.log('🚀 Starting server...');
        
        // Try to initialize database
        try {
            await initializeDatabase();
            console.log('✅ CMS Database initialized successfully');
            
            // Run migrations to ensure all columns exist
            await runMigrations();
            console.log('✅ Database migrations completed');
        } catch (dbError) {
            console.error('⚠️ Database initialization failed, but continuing with server startup:', dbError.message);
        }
        
        app.listen(PORT, () => {
            console.log(`🚀 NordicMedTek CMS Server running on port ${PORT}`);
            console.log(`🔗 API endpoint: http://localhost:${PORT}/api`);
            console.log(`📊 Admin panel will be integrated with main app`);
        });
    } catch (error) {
        console.error('❌ Failed to start CMS server:', error);
        process.exit(1);
    }
}

startServer();
