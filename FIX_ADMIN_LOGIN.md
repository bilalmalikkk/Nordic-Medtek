# 🔐 Fix Admin Login - Railway Fresh Database

## The Problem

Railway created a fresh database, which means:
- ✅ New admin user was created
- ❌ But login credentials might not be working
- ❌ You can't access admin panel to restore products

## ✅ Solution: Create New Admin User

We'll create a new admin user directly in Railway. Here are 3 methods:

---

## 🚀 Method 1: Railway Shell (Recommended)

### Step 1: Access Railway Shell

1. Go to: **https://railway.app**
2. Open your project
3. Click on your service
4. Go to **Settings** tab
5. Click **"Shell"** or **"Terminal"**

### Step 2: Create New Admin User

In the Railway shell, run these commands:

```bash
# Navigate to app directory
cd /app

# Start Node.js
node

# Run this code to create admin user
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'src/cms/database/cms.db');
const db = new sqlite3.Database(dbPath);

// Hash password for 'admin123'
const passwordHash = bcrypt.hashSync('admin123', 10);

// Insert new admin user
db.run(
  "INSERT OR REPLACE INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)",
  ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'],
  function(err) {
    if (err) {
      console.error('Error creating admin user:', err);
    } else {
      console.log('✅ Admin user created successfully!');
      console.log('Username: admin');
      console.log('Password: admin123');
    }
    db.close();
  }
);

# Exit Node.js
.exit
```

### Step 3: Test Login

1. Go to your admin panel: `https://[your-railway-url].railway.app/admin`
2. Use credentials:
   - **Username:** `admin`
   - **Password:** `admin123`

---

## 🚀 Method 2: Direct SQL (Alternative)

If Method 1 doesn't work, try this:

### In Railway Shell:

```bash
# Install sqlite3 if not available
npm install -g sqlite3

# Access database
sqlite3 src/cms/database/cms.db

# Delete existing admin user (if any)
DELETE FROM users WHERE username = 'admin';

# Insert new admin user with correct password hash
INSERT INTO users (username, email, password_hash, role) 
VALUES ('admin', 'admin@nordicmedtek.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

# Verify user was created
SELECT * FROM users WHERE username = 'admin';

# Exit SQLite
.quit
```

---

## 🚀 Method 3: Reset via API (If server is running)

If your server is running but you can't log in:

### Create a reset script:

```bash
# In Railway Shell
cd /app

# Create reset script
cat > reset-admin.js << 'EOF'
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'src/cms/database/cms.db');
const db = new sqlite3.Database(dbPath);

console.log('Resetting admin user...');

// Hash the password 'admin123'
const passwordHash = bcrypt.hashSync('admin123', 10);

// Delete existing admin
db.run("DELETE FROM users WHERE username = 'admin'", (err) => {
  if (err) {
    console.error('Error deleting admin:', err);
    return;
  }
  
  // Insert new admin
  db.run(
    "INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)",
    ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'],
    function(err) {
      if (err) {
        console.error('Error creating admin:', err);
      } else {
        console.log('✅ Admin user reset successfully!');
        console.log('Username: admin');
        console.log('Password: admin123');
      }
      db.close();
    }
  );
});
EOF

# Run the reset script
node reset-admin.js
```

---

## 🔍 Troubleshooting

### Problem: Railway Shell not accessible

**Solution:**
1. Make sure your service is deployed and running
2. Try refreshing the Railway dashboard
3. Check if service is in "Running" state

### Problem: Node.js not found in shell

**Solution:**
```bash
# Check what's available
which node
which nodejs

# If neither works, try:
npm --version
```

### Problem: Database file not found

**Solution:**
```bash
# Check if database exists
ls -la src/cms/database/

# If not, the volume might not be mounted
# Go to Railway Settings → Volumes
# Make sure volume is configured with path: /app/src/cms/database
```

### Problem: Still can't login after reset

**Try these credentials:**
- Username: `admin`
- Password: `admin123`
- Email: `admin@nordicmedtek.com`

**Or create a different user:**
```bash
# In the reset script, change username to something else
['newadmin', 'admin@nordicmedtek.com', passwordHash, 'admin']
```

---

## ✅ After Successful Login

Once you can log in:

1. **Go to Import tab** in admin panel
2. **Upload your CSV file:**
   ```
   E:\Mikal\Nordic Medical Technologies\nordic-medtek\src\assets\Product+Collection.csv
   ```
3. **Import all products** back
4. **Verify products are restored**

---

## 🛡️ Prevent This in Future

### Make Sure Railway Volume is Configured

1. Railway Dashboard → Service → Settings → Volumes
2. Should show: `/app/src/cms/database`
3. If not, add it now!

### Backup Admin Credentials

Save these somewhere safe:
- **Username:** `admin`
- **Password:** `admin123`
- **Email:** `admin@nordicmedtek.com`

---

## 📞 Quick Reference

**Railway Dashboard:** https://railway.app
**Admin Panel:** `https://[your-railway-url].railway.app/admin`

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

**CSV File:** `src/assets/Product+Collection.csv`

---

## 🎯 Summary

**Problem:** Fresh database = lost admin credentials
**Solution:** Reset admin user via Railway Shell
**Next Step:** Import products from CSV

**Time needed:** 5 minutes to fix login, then 2 minutes to import products

---

**Ready?** Go to Railway Shell and run Method 1! 🚀
