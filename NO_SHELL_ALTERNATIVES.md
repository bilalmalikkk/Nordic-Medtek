# 🔧 No Railway Shell? Here Are 3 Alternatives

## 🚨 The Problem

Railway Shell is not visible in your Settings panel. This happens because:
- Railway changed their interface
- Shell access might be restricted for your plan
- Or it's located elsewhere

## ✅ Solution: 3 Alternative Methods

---

## 🚀 Method 1: Use Railway CLI (Recommended)

### Step 1: Install Railway CLI

**Windows (PowerShell as Administrator):**
```powershell
# Install Railway CLI
npm install -g @railway/cli

# Or using winget
winget install Railway.Railway
```

**Alternative - Download Binary:**
1. Go to: https://github.com/railwayapp/cli/releases
2. Download `railway-windows-x64.exe`
3. Rename to `railway.exe`
4. Add to your PATH

### Step 2: Login and Connect

```bash
# Login to Railway
railway login

# Link to your project (it will show a list)
railway link

# Select your nordic-medtek project
```

### Step 3: Reset Admin User

```bash
# Run the reset script
railway run node reset-admin.js
```

**If the script isn't uploaded yet, run this command:**
```bash
# Reset admin directly via CLI
railway run node -e "
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = path.join(__dirname, 'src/cms/database/cms.db');
const db = new sqlite3.Database(dbPath);
const passwordHash = bcrypt.hashSync('admin123', 10);
db.run('INSERT OR REPLACE INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)', ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'], function(err) {
  if (err) console.error('Error:', err);
  else console.log('✅ Admin user created! Username: admin, Password: admin123');
  db.close();
});
"
```

---

## 🚀 Method 2: Deploy Reset Script

### Step 1: Upload Reset Script to Git

The `reset-admin.js` file I created is in your local folder. Let's commit and push it:

```bash
# In your nordic-medtek folder
git add reset-admin.js
git commit -m "Add admin reset script"
git push
```

### Step 2: Access via API Endpoint

After the script is deployed, we can create a temporary API endpoint to reset the admin user.

**Add this to your server temporarily:**

In `src/cms/server.js`, add this route before the error handling:

```javascript
// Temporary admin reset endpoint (REMOVE AFTER USE!)
app.post('/api/reset-admin', async (req, res) => {
  try {
    const bcrypt = require('bcryptjs');
    const sqlite3 = require('sqlite3');
    const path = require('path');
    
    const dbPath = path.join(__dirname, 'database/cms.db');
    const db = new sqlite3.Database(dbPath);
    
    const passwordHash = bcrypt.hashSync('admin123', 10);
    
    db.run(
      "INSERT OR REPLACE INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)",
      ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'],
      function(err) {
        if (err) {
          res.status(500).json({ error: 'Failed to reset admin', details: err.message });
        } else {
          res.json({ 
            success: true, 
            message: 'Admin user reset successfully',
            credentials: { username: 'admin', password: 'admin123' }
          });
        }
        db.close();
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Reset failed', details: error.message });
  }
});
```

### Step 3: Call the Reset Endpoint

After deploying the above change:

```bash
# Call the reset endpoint
curl -X POST https://[your-railway-url].railway.app/api/reset-admin
```

**Or use a browser:**
1. Go to: `https://[your-railway-url].railway.app/api/reset-admin`
2. Use POST method (you can use Postman or browser dev tools)

### Step 4: Remove the Reset Endpoint

**IMPORTANT:** After using it, remove the `/api/reset-admin` route from your server.js file for security!

---

## 🚀 Method 3: Manual Database Access

### Option A: Use Railway Variables to Access Database

1. **Go to Railway Settings → Variables**
2. **Add these environment variables:**
   ```
   DATABASE_PATH=/app/src/cms/database/cms.db
   RESET_ADMIN=true
   ```

3. **Modify your server.js to auto-reset admin if RESET_ADMIN=true:**

Add this to `src/cms/server.js` in the `startServer()` function:

```javascript
// Auto-reset admin if needed (REMOVE AFTER USE!)
if (process.env.RESET_ADMIN === 'true') {
  const bcrypt = require('bcryptjs');
  const sqlite3 = require('sqlite3');
  const path = require('path');
  
  const dbPath = path.join(__dirname, 'database/cms.db');
  const db = new sqlite3.Database(dbPath);
  
  const passwordHash = bcrypt.hashSync('admin123', 10);
  
  db.run(
    "INSERT OR REPLACE INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)",
    ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'],
    function(err) {
      if (err) {
        console.error('Failed to reset admin:', err);
      } else {
        console.log('✅ Admin user auto-reset completed!');
        console.log('   Username: admin');
        console.log('   Password: admin123');
      }
      db.close();
    }
  );
  
  // Remove the variable after use
  delete process.env.RESET_ADMIN;
}
```

4. **Deploy and restart the service**
5. **Check Railway logs** - you should see the reset message
6. **Remove the RESET_ADMIN variable** from Railway settings
7. **Remove the auto-reset code** from server.js

---

## 🎯 Recommended Approach

**I recommend Method 1 (Railway CLI)** because:
- ✅ Most reliable
- ✅ Direct access to your service
- ✅ No temporary code changes needed
- ✅ Can run any command

### Quick Railway CLI Setup:

```bash
# 1. Install CLI
npm install -g @railway/cli

# 2. Login
railway login

# 3. Link project
railway link

# 4. Reset admin
railway run node -e "
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = path.join(__dirname, 'src/cms/database/cms.db');
const db = new sqlite3.Database(dbPath);
const passwordHash = bcrypt.hashSync('admin123', 10);
db.run('INSERT OR REPLACE INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)', ['admin', 'admin@nordicmedtek.com', passwordHash, 'admin'], function(err) {
  if (err) console.error('Error:', err);
  else console.log('✅ Admin user created! Username: admin, Password: admin123');
  db.close();
});
"
```

---

## 🆘 If All Methods Fail

### Last Resort: Recreate Database

If none of the above work, we can:

1. **Delete the current database** (via Railway Variables)
2. **Let the server recreate it** with default admin user
3. **Import products from CSV**

**Steps:**
1. Railway Settings → Variables
2. Add: `RECREATE_DATABASE=true`
3. Deploy (server will recreate database with default admin)
4. Login with: `admin` / `admin123`
5. Import products from CSV
6. Remove the variable

---

## 📞 Quick Help

**Railway CLI Download:** https://github.com/railwayapp/cli/releases
**Railway Dashboard:** https://railway.app

**Default Admin Credentials:**
- Username: `admin`
- Password: `admin123`

**CSV File:** `src/assets/Product+Collection.csv`

---

## ✨ Summary

**Problem:** No Railway Shell access
**Solution:** Use Railway CLI (Method 1) - most reliable
**Alternative:** Deploy reset endpoint (Method 2)
**Fallback:** Auto-reset via environment variable (Method 3)

**Which method would you like to try first?** 🚀
