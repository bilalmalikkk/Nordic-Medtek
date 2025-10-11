# 🔧 Database Persistence Fix - Railway Deployment

## 🚨 The Problem

**Your product changes were being reverted** after each code deployment because:

1. ❌ The database file `cms.db` was being **tracked in Git**
2. ❌ Every time you pushed code, the **old local database** overwrote the production database
3. ❌ All production changes were **lost** on each deployment
4. ❌ Railway was using **ephemeral storage** instead of persistent volumes

### Why This Happened:

```
You edit products on production → Changes saved to production database
         ↓
You push code from local → Old database from git gets deployed
         ↓
Railway redeploys → Production database OVERWRITTEN with old data
         ↓
Your changes LOST! 💔
```

---

## ✅ The Solution

We've fixed this in **3 steps**:

### Step 1: Stop Tracking Database in Git ✅

**What we did:**
- Added `*.db` and database files to `.gitignore`
- Removed `cms.db` from git tracking (but kept your local file)
- Prevented future database commits

**Files changed:**
- `.gitignore` - Added database exclusions
- Git index - Removed database tracking

---

### Step 2: Configure Railway Persistent Volume ⚠️ **ACTION REQUIRED**

Railway needs a **persistent volume** to keep your database between deployments.

#### Instructions:

1. **Go to Railway Dashboard:**
   - Visit [railway.app](https://railway.app)
   - Open your `nordic-medtek-production` project

2. **Add a Volume:**
   - Click on your service
   - Go to **"Settings"** tab
   - Scroll down to **"Volumes"**
   - Click **"+ New Volume"**

3. **Configure the Volume:**
   ```
   Mount Path: /app/src/cms/database
   ```
   - This path MUST match where your database is stored
   - Click **"Add"**

4. **Alternative: Using Railway CLI**
   ```bash
   railway volumes create --mount-path /app/src/cms/database
   ```

5. **Verify:**
   - After adding the volume, redeploy your service
   - Check logs for successful database initialization
   - Make a test product change
   - Redeploy again - changes should persist!

---

### Step 3: Deploy the Fix 🚀

**What you need to do:**

```bash
# 1. Check what was changed
git status

# 2. Commit the fix
git add .
git commit -m "Fix: Remove database from git tracking and configure persistence"

# 3. Push to Railway
git push origin main
```

**IMPORTANT:** Before pushing, make sure you've configured the Railway volume (Step 2)!

---

## 📋 Deployment Checklist

Follow these steps **in order**:

- [x] **Step 1:** Database removed from git tracking (.gitignore updated) ✅
- [ ] **Step 2:** Railway volume configured (`/app/src/cms/database`) ⚠️ **DO THIS FIRST**
- [ ] **Step 3:** Changes committed and pushed
- [ ] **Step 4:** Railway deployment successful
- [ ] **Step 5:** Test product edit (should persist!)
- [ ] **Step 6:** Redeploy and verify changes still there

---

## 🔍 How to Verify It's Working

### Test 1: Edit a Product
1. Go to your production admin panel
2. Edit any product
3. Save changes
4. Refresh page → Changes should be there ✅

### Test 2: Redeploy
1. Make a small code change (like a comment)
2. Push to git
3. Wait for Railway to redeploy
4. Check your product → Changes STILL there! ✅

### Test 3: Check Railway Logs
Look for these messages in Railway deployment logs:
```
✅ CMS Database initialized successfully
🔄 Running database migrations...
✅ Database migrations completed successfully
🚀 NordicMedTek CMS Server running on port 3001
```

---

## 🆘 Troubleshooting

### Problem: Changes still reverting

**Solution:**
1. ✅ **Verify volume is mounted:**
   - Railway Dashboard → Service → Settings → Volumes
   - Should show: `/app/src/cms/database`

2. ✅ **Check database file is NOT in git:**
   ```bash
   git ls-files | grep ".db"
   ```
   - Should return **nothing** (no .db files)

3. ✅ **Restart Railway service:**
   - Railway Dashboard → Service → Settings
   - Click "Restart"

### Problem: Database not found after deployment

**Cause:** Volume not configured or wrong mount path

**Solution:**
1. Double-check volume mount path: `/app/src/cms/database`
2. Make sure it's exactly this path (case-sensitive on Linux)
3. Restart the service

### Problem: "Database is locked" error

**Cause:** Multiple instances trying to access the same database

**Solution:**
1. Make sure you're only running **one instance** on Railway
2. Railway Dashboard → Service → Settings
3. Check "Replicas" is set to 1

---

## 📝 Important Notes

### ✅ DO's:

- ✅ **Always configure Railway volume BEFORE deploying**
- ✅ **Keep database files in `.gitignore`**
- ✅ **Use Railway backups** for production database
- ✅ **Test changes** on production after deployment

### ❌ DON'Ts:

- ❌ **NEVER commit database files** to git
- ❌ **Don't delete the volume** on Railway (you'll lose all data)
- ❌ **Don't change the mount path** after setup
- ❌ **Don't run multiple replicas** with SQLite

---

## 🔒 Data Safety

### Local Development:
- Your local `cms.db` is safe and untouched
- It's now ignored by git
- You can continue developing locally

### Production:
- Database persists on Railway volume
- Survives deployments and restarts
- Independent from your local database

### Backups:
Consider setting up periodic backups:

1. **Railway Backup Command:**
   ```bash
   # SSH into Railway
   railway run bash
   
   # Backup database
   cp /app/src/cms/database/cms.db /app/backups/cms-$(date +%Y%m%d).db
   ```

2. **Or download manually:**
   - Railway Dashboard → Service → Shell
   - Run: `cat /app/src/cms/database/cms.db > backup.db`
   - Download the backup

---

## 🎯 Why This Solution Works

### Before (Broken):
```
Git Repository
   └── cms.db (old data) 
          ↓
   Railway Deployment
          ↓
   Overwrites production database ❌
```

### After (Fixed):
```
Git Repository
   └── cms.db ❌ (excluded by .gitignore)

Railway Persistent Volume
   └── /app/src/cms/database/cms.db ✅
          ↓
   Survives deployments & restarts ✅
```

---

## 📚 Additional Resources

- [Railway Volumes Documentation](https://docs.railway.app/reference/volumes)
- [SQLite Best Practices](https://www.sqlite.org/bestpractice.html)
- [Git .gitignore Guide](https://git-scm.com/docs/gitignore)

---

## ✨ Summary

**Problem:** Database was in git, getting overwritten on each deployment

**Solution:**
1. ✅ Removed database from git tracking
2. ⚠️ **YOU NEED TO:** Configure Railway persistent volume
3. ⚠️ **THEN:** Deploy the changes

**Result:** Database persists between deployments, your changes are safe!

---

**Created:** October 10, 2025  
**Issue:** Database changes reverting on deployment  
**Root Cause:** Database file tracked in Git  
**Status:** ✅ Code fixed | ⚠️ Railway volume configuration required

---

## 🚀 Next Steps

1. **Right now:** Configure Railway volume (Step 2 above)
2. **Then:** Commit and push changes
3. **Finally:** Test that changes persist

**Questions?** Check the troubleshooting section above or Railway logs.

