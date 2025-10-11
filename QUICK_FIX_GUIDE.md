# ⚡ Quick Fix: Admin Login + Restore Products

## 🚨 The Issue

Railway created a fresh database, so:
- ❌ Admin login credentials are lost/reset
- ❌ All your products are gone
- ✅ But you have the CSV file with all products!

## 🔧 Solution (5 Minutes Total)

### Step 1: Fix Admin Login (2 minutes)

1. **Go to Railway Shell:**
   - Railway Dashboard → Your Service → Settings → **"Shell"**

2. **Run the reset script:**
   ```bash
   cd /app
   node reset-admin.js
   ```

3. **You should see:**
   ```
   ✅ Admin user created successfully!
   Username: admin
   Password: admin123
   ```

### Step 2: Import Products (2 minutes)

1. **Go to Admin Panel:**
   - `https://[your-railway-url].railway.app/admin`

2. **Login with:**
   - Username: `admin`
   - Password: `admin123`

3. **Click "Import" tab**

4. **Upload CSV file:**
   - Browse to: `E:\Mikal\Nordic Medical Technologies\nordic-medtek\src\assets\Product+Collection.csv`
   - Click Upload

5. **Done!** All 24+ products restored! ✅

### Step 3: Verify Everything Works (1 minute)

1. **Check products** - Should see all your products
2. **Edit a product** - Make a small change
3. **Push a code change** (add a comment somewhere)
4. **Check again** - Your edit should persist! ✅

---

## 🆘 If Railway Shell Doesn't Work

### Alternative Method:

In Railway Shell, run these commands manually:

```bash
# Start Node.js
node

# Then paste this code:
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'src/cms/database/cms.db');
const db = new sqlite3.Database(dbPath);

const passwordHash = bcrypt.hashSync('admin123', 10);

db.run(
  "INSERT OR REPLACE INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)",
  ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'],
  function(err) {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('✅ Admin user created! Username: admin, Password: admin123');
    }
    db.close();
  }
);

.exit
```

---

## 📋 What You Need

### Files:
- ✅ `reset-admin.js` (I created this for you)
- ✅ `Product+Collection.csv` (your backup with all products)

### Access:
- ✅ Railway Shell access
- ✅ Admin panel URL
- ✅ CSV file location

---

## 🎯 Expected Results

After running the script:
```
🔧 NordicMedTek Admin Reset Script
==================================
📁 Database path: /app/src/cms/database/cms.db
✅ Database file found
✅ Connected to database
🔄 Resetting admin user...
✅ Deleted existing admin user
✅ Admin user created successfully!

📋 Login Credentials:
   Username: admin
   Password: admin123
   Email:    admin@nordicmedtek.com

🎉 Script completed! You can now login to admin panel.
```

---

## 🔗 Quick Links

**Railway Dashboard:** https://railway.app
**Admin Panel:** `https://[your-railway-url].railway.app/admin`

**Files:**
- Reset Script: `/app/reset-admin.js`
- CSV Backup: `E:\Mikal\Nordic Medical Technologies\nordic-medtek\src\assets\Product+Collection.csv`

---

## ✨ Summary

**Problem:** Fresh database = no admin access + no products
**Solution:** Reset admin + import CSV
**Time:** 5 minutes total
**Result:** Full access + all products restored

**Ready?** Go to Railway Shell and run `node reset-admin.js`! 🚀
