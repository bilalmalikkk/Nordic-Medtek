#!/usr/bin/env node

/**
 * Reset Admin User Script
 * 
 * This script resets the admin user credentials in the Railway database.
 * Run this in Railway Shell to fix login issues after database reset.
 * 
 * Usage in Railway Shell:
 * 1. cd /app
 * 2. node reset-admin.js
 */

const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3');
const path = require('path');

// Database path
const dbPath = path.join(__dirname, 'src/cms/database/cms.db');

console.log('🔧 NordicMedTek Admin Reset Script');
console.log('==================================');
console.log(`📁 Database path: ${dbPath}`);

// Check if database exists
const fs = require('fs');
if (!fs.existsSync(dbPath)) {
  console.error('❌ Database file not found!');
  console.error('   Make sure Railway volume is mounted at: /app/src/cms/database');
  process.exit(1);
}

console.log('✅ Database file found');

// Connect to database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error connecting to database:', err.message);
    process.exit(1);
  }
  console.log('✅ Connected to database');
});

console.log('🔄 Resetting admin user...');

// Hash the password 'admin123'
const passwordHash = bcrypt.hashSync('admin123', 10);

// Delete existing admin user
db.run("DELETE FROM users WHERE username = 'admin'", (err) => {
  if (err) {
    console.error('❌ Error deleting existing admin:', err.message);
    db.close();
    return;
  }
  
  console.log('✅ Deleted existing admin user');
  
  // Insert new admin user
  db.run(
    "INSERT INTO users (username, email, password_hash, role, created_at, updated_at) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)",
    ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'],
    function(err) {
      if (err) {
        console.error('❌ Error creating admin user:', err.message);
        db.close();
        return;
      }
      
      console.log('✅ Admin user created successfully!');
      console.log('');
      console.log('📋 Login Credentials:');
      console.log('   Username: admin');
      console.log('   Password: admin123');
      console.log('   Email:    admin@nordicmedtek.com');
      console.log('');
      console.log('🌐 Admin Panel URL:');
      console.log('   https://[your-railway-url].railway.app/admin');
      console.log('');
      console.log('🎯 Next Steps:');
      console.log('   1. Go to admin panel and login');
      console.log('   2. Click "Import" tab');
      console.log('   3. Upload Product+Collection.csv');
      console.log('   4. Restore all your products!');
      console.log('');
      
      // Verify the user was created
      db.get("SELECT id, username, email, role FROM users WHERE username = 'admin'", (err, row) => {
        if (err) {
          console.error('❌ Error verifying admin user:', err.message);
        } else if (row) {
          console.log('✅ Verification: Admin user exists in database');
          console.log(`   ID: ${row.id}, Username: ${row.username}, Email: ${row.email}`);
        } else {
          console.log('⚠️  Warning: Could not verify admin user was created');
        }
        
        db.close((err) => {
          if (err) {
            console.error('❌ Error closing database:', err.message);
          } else {
            console.log('✅ Database connection closed');
          }
          console.log('');
          console.log('🎉 Script completed! You can now login to admin panel.');
          process.exit(0);
        });
      });
    }
  );
});
