# 🚀 Deploy to Railway - Quick Guide

## ✅ Pre-Deployment Checklist

The following changes have been made to fix the production database issue:

- ✅ Created automatic migration system (`src/cms/database/migrate.js`)
- ✅ Updated server to run migrations on startup (`src/cms/server.js`)
- ✅ Added manual migration script (`npm run cms:migrate`)
- ✅ Tested migrations locally - working perfectly!

## 📦 What Will Happen When You Deploy

1. **Railway detects changes** in your Git repository
2. **Builds your app** with the new code
3. **Starts the server** which automatically:
   - Initializes the database
   - **Runs migrations** (adds missing columns)
   - Starts the API server
4. **Your app is live** with the fixed database!

## 🎯 Deployment Steps

### Step 1: Commit and Push

```bash
git add .
git commit -m "Fix: Add automatic database migrations for production"
git push origin main
```

### Step 2: Wait for Railway to Deploy

1. Go to [Railway Dashboard](https://railway.app/)
2. Select your `nordic-medtek-production` project
3. Watch the deployment logs
4. Look for these success messages:

```
✅ CMS Database initialized successfully
🔄 Running database migrations...
  + Adding column 'rich_text' to products
  ✓ Column 'rich_text' added successfully
  ✓ Column 'pdf_url' already exists in products
  ✓ Column 'datasheet_url' already exists in products
✅ Database migrations completed successfully
🚀 NordicMedTek CMS Server running on port 3001
```

### Step 3: Test the Admin Panel

1. Go to: `https://nordic-medtek-production.up.railway.app/admin`
2. Log in with your admin credentials
3. Click **"Edit"** on any product
4. Make a change
5. Click **"💾 Update Product"**
6. ✅ **Success!** The product should update without errors

## 🐛 If Something Goes Wrong

### Check Railway Logs

In Railway Dashboard → Your Service → Deployments → View Logs

Look for error messages in the migration section.

### Common Issues & Solutions

#### Issue: "SQLITE_ERROR: no such column"

**Cause**: Migration didn't run or failed  
**Solution**:
1. Check the deployment logs for migration errors
2. Restart the service in Railway
3. If still failing, run migration manually (see below)

#### Issue: "403 Forbidden" on auth

**Cause**: Not logged in or token expired  
**Solution**:
1. Clear browser cookies for the Railway domain
2. Go to `/admin` and log in again
3. Try again

#### Issue: "404 Product Not Found"

**Cause**: Product ID doesn't exist in production database  
**Solution**:
1. The product might have been deleted
2. Or product IDs are different between local and production
3. Try editing a different product
4. Or re-import your products

### Manual Migration on Railway

If automatic migration fails, you can run it manually:

1. Open **Railway Dashboard**
2. Go to your service
3. Click **"..."** menu → **"Shell"** or **"Terminal"**
4. Run:
```bash
npm run cms:migrate
```

## 📊 What Gets Fixed

The migration adds these missing columns to the `products` table:

| Column | Type | Purpose |
|--------|------|---------|
| `rich_text` | TEXT | HTML content for product details |
| `pdf_url` | TEXT | Additional PDF resources |
| `datasheet_url` | TEXT | Product datasheet PDFs |

**Note**: Existing products will have `NULL` values for these columns until you edit them.

## 🔄 Future Deployments

Good news! The migration system is now in place. For future deployments:

1. **Just push your changes** - migrations run automatically
2. **Safe to redeploy** - migrations check if columns exist first
3. **No manual database work** needed

## 🆘 Need Help?

If you encounter any issues:

1. **Check the logs** in Railway Dashboard
2. **Look at the error message** carefully
3. **Refer to** `RAILWAY_DEPLOYMENT_FIX.md` for detailed troubleshooting
4. **Try the manual migration** if automatic fails

## ✨ Success Indicators

You'll know everything is working when:

- ✅ Railway deployment shows "Deployed" status
- ✅ Logs show "Database migrations completed successfully"
- ✅ Admin panel loads without errors
- ✅ You can edit products and see "Product updated successfully!"
- ✅ No "SQLITE_ERROR" in the browser console

---

**Ready to deploy?** Just run:

```bash
git add .
git commit -m "Fix database migrations for production"
git push
```

Then sit back and watch Railway do the magic! ✨

---

**Created**: 2025-10-08  
**Purpose**: Fix production database schema issues  
**Status**: Ready to deploy

