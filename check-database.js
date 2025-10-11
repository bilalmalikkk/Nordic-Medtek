#!/usr/bin/env node

/**
 * Simple Database Check Script
 * This script will create output that Railway CLI should definitely show
 */

console.log('🚀 STARTING DATABASE CHECK SCRIPT');
console.log('================================');

// Check if we're in the right directory
const fs = require('fs');
const path = require('path');

console.log('📁 Current working directory:', process.cwd());
console.log('📁 __dirname:', __dirname);

// Check if database directory exists
const dbDir = path.join(__dirname, 'src/cms/database');
console.log('📁 Database directory path:', dbDir);
console.log('📁 Database directory exists:', fs.existsSync(dbDir));

if (fs.existsSync(dbDir)) {
  const files = fs.readdirSync(dbDir);
  console.log('📁 Files in database directory:', files);
} else {
  console.log('❌ Database directory does not exist!');
}

// Check if database file exists
const dbPath = path.join(__dirname, 'src/cms/database/cms.db');
console.log('📁 Database file path:', dbPath);
console.log('📁 Database file exists:', fs.existsSync(dbPath));

// Try to connect to database
try {
  const sqlite3 = require('sqlite3');
  console.log('✅ SQLite3 module loaded successfully');
  
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.log('❌ Database connection error:', err.message);
    } else {
      console.log('✅ Database connection successful');
      
      // Check users table
      db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
          console.log('❌ Error querying users table:', err.message);
        } else {
          console.log('📊 Users found:', rows.length);
          if (rows.length > 0) {
            rows.forEach((user, index) => {
              console.log(`👤 User ${index + 1}:`);
              console.log(`   ID: ${user.id}`);
              console.log(`   Username: ${user.username}`);
              console.log(`   Email: ${user.email}`);
              console.log(`   Role: ${user.role}`);
              console.log(`   Active: ${user.is_active}`);
              console.log(`   Created: ${user.created_at}`);
            });
          } else {
            console.log('❌ No users found in database');
          }
        }
        
        db.close();
        console.log('🏁 SCRIPT COMPLETED');
        process.exit(0);
      });
    }
  });
} catch (error) {
  console.log('❌ Error loading SQLite3:', error.message);
  console.log('🏁 SCRIPT COMPLETED WITH ERROR');
  process.exit(1);
}
