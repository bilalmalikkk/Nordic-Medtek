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
    origin: [
        'http://localhost:5173',
        'https://localhost:5173',
        'http://localhost:3000',
        'https://localhost:3000',
        process.env.FRONTEND_URL
    ].filter(Boolean),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    preflightContinue: false,
    optionsSuccessStatus: 204
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
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        volume: 'mounted'
    });
});

// TEMPORARY DATABASE CHECK ENDPOINT - REMOVE AFTER USE!
app.get('/api/temp-check-db', async (req, res) => {
  try {
    console.log('🔍 TEMPORARY DATABASE CHECK ENDPOINT CALLED');
    
    const sqlite3 = await import('sqlite3');
    const path = await import('path');
    const fs = await import('fs');
    
    const dbPath = '/app/data/cms.db';
    console.log('📁 Database path:', dbPath);
    console.log('📁 Database exists:', fs.default.existsSync(dbPath));
    
    const { Database } = sqlite3.default.verbose();
    const db = new Database(dbPath);
    
    // Check users table
    db.all('SELECT * FROM users', (err, rows) => {
      if (err) {
        console.error('❌ Error querying users:', err);
        res.status(500).json({ 
          error: 'Database query failed', 
          details: err.message 
        });
      } else {
        console.log('📊 Users found:', rows.length);
        rows.forEach((user, index) => {
          console.log(`👤 User ${index + 1}:`, user.username, user.email);
        });
        
        res.json({ 
          success: true,
          message: 'Database check completed',
          userCount: rows.length,
          users: rows.map(u => ({ 
            id: u.id, 
            username: u.username, 
            email: u.email, 
            role: u.role,
            is_active: u.is_active 
          }))
        });
      }
      
      db.close();
    });
  } catch (error) {
    console.error('❌ Database check error:', error);
    res.status(500).json({ 
      error: 'Check failed', 
      details: error.message 
    });
  }
});

// TEMPORARY CLEANUP ENDPOINT - REMOVE AFTER USE!
app.get('/api/temp-cleanup-users', async (req, res) => {
  try {
    console.log('🧹 TEMPORARY CLEANUP ENDPOINT CALLED');
    
    const sqlite3 = await import('sqlite3');
    const bcrypt = await import('bcryptjs');
    
    const dbPath = '/app/data/cms.db';
    const { Database } = sqlite3.default.verbose();
    const db = new Database(dbPath);
    
    // First, show all users
    db.all('SELECT * FROM users', (err, allUsers) => {
      if (err) {
        console.error('❌ Error getting all users:', err);
        res.status(500).json({ error: 'Database error', details: err.message });
      } else {
        console.log('📊 All users before cleanup:', allUsers.length);
        allUsers.forEach((user, index) => {
          console.log(`👤 User ${index + 1}:`, {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            is_active: user.is_active,
            hash: user.password_hash.substring(0, 20) + '...'
          });
        });
        
        // Delete ALL existing admin users
        db.run('DELETE FROM users WHERE username = ?', ['admin'], function(err) {
          if (err) {
            console.error('❌ Error deleting admin users:', err);
            res.status(500).json({ error: 'Delete error', details: err.message });
          } else {
            console.log(`🗑️ Deleted ${this.changes} admin user(s)`);
            
            // Create ONE clean admin user with correct password
            const passwordHash = bcrypt.default.hashSync('admin123', 10);
            
            db.run(
              'INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)',
              ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'],
              function(err) {
                if (err) {
                  console.error('❌ Error creating clean admin:', err);
                  res.status(500).json({ error: 'Create error', details: err.message });
                } else {
                  console.log('✅ Clean admin user created with ID:', this.lastID);
                  
                  // Verify the new user
                  db.get('SELECT * FROM users WHERE username = ?', ['admin'], (err, newUser) => {
                    if (err) {
                      console.error('❌ Verification error:', err);
                    } else if (newUser) {
                      console.log('✅ Verification successful:', {
                        id: newUser.id,
                        username: newUser.username,
                        email: newUser.email,
                        hash: newUser.password_hash.substring(0, 20) + '...'
                      });
                    }
                    
                    db.close();
                    
                    res.json({
                      success: true,
                      message: 'Cleanup completed - only one admin user exists now',
                      deleted: this.changes,
                      newAdminId: this.lastID,
                      credentials: {
                        username: 'admin',
                        password: 'admin123',
                        email: 'admin@nordicmedtek.com'
                      }
                    });
                  });
                }
              }
            );
          }
        });
      }
    });
  } catch (error) {
    console.error('❌ Cleanup error:', error);
    res.status(500).json({ 
      error: 'Cleanup failed', 
      details: error.message 
    });
  }
});

// TEMPORARY LOGIN SIMULATION ENDPOINT - REMOVE AFTER USE!
app.get('/api/temp-simulate-login', async (req, res) => {
  try {
    console.log('🔐 TEMPORARY LOGIN SIMULATION ENDPOINT CALLED');
    
    const { queryOne } = await import('./database/init.js');
    const bcrypt = await import('bcryptjs');
    
    const username = 'admin';
    const password = 'admin123';
    
    console.log('🔍 Simulating login for username:', username);
    
    // Use the exact same query as the login endpoint
    const user = await queryOne(
      'SELECT * FROM users WHERE (username = ? OR email = ?) AND is_active = 1',
      [username, username]
    );
    
    console.log('🔍 User found:', user ? 'YES' : 'NO');
    if (user) {
      console.log('🔍 User details:', {
        id: user.id,
        username: user.username,
        email: user.email,
        is_active: user.is_active,
        role: user.role
      });
    }
    
    if (!user) {
      console.log('❌ No user found - this would cause "Invalid credentials"');
      return res.json({
        success: false,
        message: 'User not found - this is why login fails',
        step: 'user_lookup',
        username: username
      });
    }
    
    // Test password using the exact same method as login endpoint
    const isValidPassword = await bcrypt.default.compare(password, user.password_hash);
    console.log('🔐 Password comparison result:', isValidPassword);
    
    if (!isValidPassword) {
      console.log('❌ Password mismatch - this would cause "Invalid credentials"');
      return res.json({
        success: false,
        message: 'Password mismatch - this is why login fails',
        step: 'password_check',
        username: username,
        storedHash: user.password_hash
      });
    }
    
    console.log('✅ Login simulation successful!');
    res.json({
      success: true,
      message: 'Login simulation successful - login should work',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        is_active: user.is_active
      },
      passwordMatch: isValidPassword
    });
    
  } catch (error) {
    console.error('❌ Login simulation error:', error);
    res.status(500).json({ 
      error: 'Login simulation failed', 
      details: error.message 
    });
  }
});

// TEMPORARY PASSWORD TEST ENDPOINT - REMOVE AFTER USE!
app.get('/api/temp-test-password', async (req, res) => {
  try {
    console.log('🔐 TEMPORARY PASSWORD TEST ENDPOINT CALLED');
    
    const bcrypt = await import('bcryptjs');
    const sqlite3 = await import('sqlite3');
    
    const dbPath = '/app/data/cms.db';
    const { Database } = sqlite3.default.verbose();
    const db = new Database(dbPath);
    
    // Get the admin user's password hash
    db.get('SELECT password_hash FROM users WHERE username = ?', ['admin'], (err, user) => {
      if (err) {
        console.error('❌ Error getting user:', err);
        res.status(500).json({ error: 'Database error', details: err.message });
      } else if (!user) {
        console.log('❌ No admin user found');
        res.status(404).json({ error: 'Admin user not found' });
      } else {
        console.log('🔐 Admin user found, testing password...');
        
        // Test password
        const testPassword = 'admin123';
        const isValid = bcrypt.default.compareSync(testPassword, user.password_hash);
        
        console.log('🔐 Password test result:', isValid);
        console.log('🔐 Stored hash:', user.password_hash);
        
        // Create a new hash for comparison
        const newHash = bcrypt.default.hashSync(testPassword, 10);
        console.log('🔐 New hash would be:', newHash);
        
        res.json({
          success: true,
          message: 'Password test completed',
          passwordMatch: isValid,
          storedHash: user.password_hash,
          testPassword: testPassword
        });
      }
      
      db.close();
    });
  } catch (error) {
    console.error('❌ Password test error:', error);
    res.status(500).json({ 
      error: 'Password test failed', 
      details: error.message 
    });
  }
});

// TEMPORARY ADMIN RESET ENDPOINT - REMOVE AFTER USE!
app.get('/api/temp-reset-admin', async (req, res) => {
  try {
    console.log('🔧 TEMPORARY ADMIN RESET ENDPOINT CALLED');
    
    const bcrypt = await import('bcryptjs');
    const sqlite3 = await import('sqlite3');
    const path = await import('path');
    const fs = await import('fs');
    
    const dbPath = '/app/data/cms.db';
    console.log('📁 Database path:', dbPath);
    console.log('📁 Database exists:', fs.default.existsSync(dbPath));
    
    // Ensure directory exists
    const dbDir = path.default.dirname(dbPath);
    if (!fs.default.existsSync(dbDir)) {
      console.log('📁 Creating database directory...');
      fs.default.mkdirSync(dbDir, { recursive: true });
    }
    
            const { Database } = sqlite3.default.verbose();
            const db = new Database(dbPath);
            
            // Initialize database schema first
            console.log('🔧 Initializing database schema...');
            
            // Read and execute schema.sql
            const schemaPath = path.default.join(__dirname, 'database/schema.sql');
            console.log('📁 Schema path:', schemaPath);
            console.log('📁 Schema exists:', fs.default.existsSync(schemaPath));
            
            if (fs.default.existsSync(schemaPath)) {
              const schemaSQL = fs.default.readFileSync(schemaPath, 'utf8');
              console.log('📄 Schema SQL loaded, executing...');
              
              // Execute schema
              db.exec(schemaSQL, (err) => {
                if (err) {
                  console.error('❌ Schema execution error:', err);
                } else {
                  console.log('✅ Schema executed successfully');
                }
              });
            }
            
            // Clear existing admin users (if any)
            db.run('DELETE FROM users WHERE username = ?', ['admin']);
    
    // Create admin user
    const passwordHash = bcrypt.default.hashSync('admin123', 10);
    
    db.run(
      'INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)',
      ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'],
      function(err) {
        if (err) {
          console.error('❌ Error creating admin:', err);
          res.status(500).json({ 
            error: 'Failed to create admin user', 
            details: err.message 
          });
        } else {
          console.log('✅ Admin user created successfully!');
          console.log('   ID:', this.lastID);
          console.log('   Username: admin');
          console.log('   Password: admin123');
          
          // Verify
          db.get('SELECT * FROM users WHERE username = ?', ['admin'], (err, user) => {
            if (err) {
              console.error('❌ Verification error:', err);
            } else if (user) {
              console.log('✅ Verification successful:', user.username, user.email);
            } else {
              console.log('❌ Verification failed: user not found');
            }
            
            db.close();
            
            res.json({ 
              success: true, 
              message: 'Admin user reset successfully',
              credentials: { 
                username: 'admin', 
                password: 'admin123',
                email: 'admin@nordicmedtek.com'
              },
              userId: this.lastID
            });
          });
        }
      }
    );
  } catch (error) {
    console.error('❌ Reset endpoint error:', error);
    res.status(500).json({ 
      error: 'Reset failed', 
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
        await initializeDatabase();
        console.log('✅ CMS Database initialized successfully');
        
        // Run migrations to ensure all columns exist
        await runMigrations();
        
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
