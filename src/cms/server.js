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

import { initializeDatabase } from './database/init.js';
import { authenticateToken } from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || process.env.CMS_PORT || 3001;

// Security middleware
const allowedOrigins = [
    "'self'",
    "http://localhost:5173",
    "https://localhost:5173"
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

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));

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

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
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
        await initializeDatabase();
        console.log('✅ CMS Database initialized successfully');
        
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
