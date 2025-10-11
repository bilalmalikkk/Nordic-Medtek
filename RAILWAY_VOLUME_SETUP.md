# 🚀 Quick Guide: Railway Volume Setup

## ⚠️ CRITICAL: Do This BEFORE Deploying!

Your database changes are reverting because the database file was in Git. We've fixed that, but **you MUST configure Railway persistent storage** before deploying.

---

## 📋 Step-by-Step Instructions

### Option 1: Railway Dashboard (Recommended)

1. **Go to Railway:**
   - Visit: https://railway.app
   - Open your project

2. **Click on your service**

3. **Go to "Settings" tab**

4. **Scroll down to "Volumes" section**

5. **Click "+ New Volume"**

6. **Enter mount path:**
   ```
   /app/src/cms/database
   ```

7. **Click "Add" or "Create Volume"**

8. **✅ Done! Now you can deploy**

---

### Option 2: Railway CLI

If you have Railway CLI installed:

```bash
# Login to Railway
railway login

# Link to your project
railway link

# Create volume
railway volume create

# When prompted, enter mount path:
# /app/src/cms/database
```

---

## 🚀 After Volume is Configured

Now you can safely deploy:

```bash
# Make sure you're in the nordic-medtek directory
cd "E:\Mikal\Nordic Medical Technologies\nordic-medtek"

# Check what changed
git status

# Commit the database fix
git add .
git commit -m "Fix: Remove database from git and configure persistence"

# Push to deploy
git push origin main
```

---

## ✅ Verify It Worked

After deployment:

1. **Edit a product** in production admin panel
2. **Push any code change** to trigger redeployment
3. **Check product** → Your edit should still be there! ✅

---

## ❓ Why Do I Need This?

**Before:**
- Database was in git → Old data overwrote production on each deploy

**After:**
- Database NOT in git ✅
- Railway volume stores database ✅  
- Database persists between deployments ✅

---

## 🆘 Need Help?

**Check Railway Logs:**
- Railway Dashboard → Your Service → Deployments → Logs
- Look for: "Database initialized successfully"

**Still having issues?**
- See `DATABASE_PERSISTENCE_FIX.md` for detailed troubleshooting

---

**TL;DR:**
1. Create Railway volume: `/app/src/cms/database`
2. Deploy the code
3. Your changes will now persist!

