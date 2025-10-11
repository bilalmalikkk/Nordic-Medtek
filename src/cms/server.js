import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

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

import { initializeDatabase } from './database/init.js';
import { authenticateToken } from './middleware/auth.js';
import runMigrations from './database/migrate.js';

const app = express();
const PORT = process.env.PORT || process.env.CMS_PORT || 3001;

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

app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            frameAncestors: allowedOrigins,
            frameSrc: allowedOrigins
        }
    }
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// CORS configuration with explicit preflight handling
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            'http://localhost:5173',
            'https://localhost:5173',
            'http://localhost:3000',
            'https://localhost:3000',
            'https://nordic-medtek.vercel.app'
        ];
        
        // Allow requests with no origin (mobile apps, curl, etc.)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('CORS blocked origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
        'Content-Type', 
        'Authorization', 
        'X-Requested-With',
        'Accept',
        'Origin',
        'Access-Control-Request-Method',
        'Access-Control-Request-Headers'
    ],
    exposedHeaders: ['Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Explicitly handle preflight requests
app.options('*', cors(corsOptions));

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
    console.log('🏥 Health check requested from:', req.headers.origin || req.ip);
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        environment: process.env.NODE_ENV,
        cors: 'enabled',
        volume: 'mounted'
    });
});

// Simple test endpoint for CORS
app.get('/api/test', (req, res) => {
    console.log('🧪 Test endpoint requested from:', req.headers.origin || req.ip);
    res.json({ 
        message: 'CORS test successful',
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
        console.log('🚀 Starting NordicMedTek CMS Server...');
        console.log('📍 Environment:', process.env.NODE_ENV);
        console.log('🔧 Port:', PORT);
        
        await initializeDatabase();
        console.log('✅ CMS Database initialized successfully');
        
        // Run migrations to ensure all columns exist
        console.log('🔄 Running database migrations...');
        await runMigrations();
        console.log('✅ Database migrations completed');
        
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 NordicMedTek CMS Server running on port ${PORT}`);
            console.log(`🔗 API endpoint: http://0.0.0.0:${PORT}/api`);
            console.log(`📊 Admin panel will be integrated with main app`);
            console.log(`🌐 CORS enabled for: https://nordic-medtek.vercel.app`);
        });
    } catch (error) {
        console.error('❌ Failed to start CMS server:', error);
        console.error('❌ Error details:', error.message);
        console.error('❌ Stack trace:', error.stack);
        process.exit(1);
    }
}

startServer();
