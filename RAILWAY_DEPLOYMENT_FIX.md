# Railway Deployment Fix - Database Migration

## 🚨 Problem

The production database on Railway is missing the `rich_text` column, causing update failures with this error:
```
SQLITE_ERROR: no such column: rich_text
```

Additionally, there were 403 authentication errors and 404 product not found errors.

## ✅ Solution

I've created an **automatic migration system** that will run every time the server starts. This ensures the database schema is always up-to-date in production.

## 🔧 What Was Done

### 1. Created Migration Script
**File**: `src/cms/database/migrate.js`

This script:
- ✅ Checks if columns exist before adding them (safe to run multiple times)
- ✅ Adds missing `rich_text` column
- ✅ Adds missing `pdf_url` column (if needed)
- ✅ Adds missing `datasheet_url` column (if needed)
- ✅ Runs automatically on server startup

### 2. Updated Server Startup
**File**: `src/cms/server.js`

The server now:
1. Initializes the database
2. **Runs migrations automatically** ✨
3. Starts the API server

### 3. Added Manual Migration Command
**File**: `package.json`

New script available:
```bash
npm run cms:migrate
```

## 🚀 Deployment Steps

### For Railway (Automatic - Recommended)

The migrations will run automatically when you deploy! Just:

1. **Commit and push your changes**:
```bash
git add .
git commit -m "Add automatic database migrations for Railway"
git push
```

2. **Railway will automatically**:
   - Detect the changes
   - Redeploy your app
   - Run migrations on startup
   - Fix the database schema

3. **Verify in Railway logs**:
Look for these messages:
```
✅ CMS Database initialized successfully
🔄 Running database migrations...
  + Adding column 'rich_text' to products
  ✓ Column 'rich_text' added successfully
✅ Database migrations completed successfully
🚀 NordicMedTek CMS Server running on port 3001
```

### For Railway (Manual - If Needed)

If you need to run migrations manually on Railway:

1. **Open Railway Dashboard**
2. **Go to your project**
3. **Open the Shell/Terminal** (in the service settings)
4. **Run**:
```bash
npm run cms:migrate
```

## 🔍 How It Works

### Migration Script Logic

```javascript
async function checkAndAddColumn(db, tableName, columnName, columnType) {
    // 1. Check if column exists
    const columns = await getTableInfo(tableName);
    
    // 2. If column exists, skip
    if (columnExists(columns, columnName)) {
        console.log(`✓ Column already exists`);
        return;
    }
    
    // 3. Add column if missing
    await db.run(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType}`);
    console.log(`✓ Column added successfully`);
}
```

### Server Startup Sequence

```javascript
async function startServer() {
    await initializeDatabase();    // 1. Create tables if needed
    await runMigrations();         // 2. Add missing columns
    app.listen(PORT);              // 3. Start server
}
```

## 🐛 Troubleshooting

### Issue: Migration fails on Railway

**Check Railway logs** for the exact error message.

Common issues:
1. **Database file is locked**: Railway might need a restart
   - Solution: Restart the service in Railway dashboard

2. **Permission errors**: Rare, but possible
   - Solution: Check Railway service permissions

3. **Syntax errors**: Check the migration script
   - Solution: Verify the SQL syntax in `migrate.js`

### Issue: Still getting "column not found" errors

1. **Check which column is missing** from the error message
2. **Add that column** to the migration script in `migrate.js`
3. **Redeploy** to Railway

### Issue: 403 Authentication Errors

The 403 errors you saw are separate from the database issue. They indicate:
- Token expired or invalid
- Need to log in again to the admin panel

**Solution**: 
1. Go to `/admin` on your production site
2. Log in with credentials
3. Try updating products again

### Issue: 404 Product Not Found

This happens when:
- Product IDs are different in production vs local
- Product was deleted

**Solution**:
1. Check the actual product ID in production database
2. Or create/import products again

## 📊 Database Schema Status

After migration, the products table will have:

**Core Fields**:
- ✅ `id`, `title`, `product_name`, `item_number`, `slug`

**Descriptions**:
- ✅ `technical_data`
- ✅ `rich_text_description`
- ✅ `rich_text` ← **FIXED**

**Media**:
- ✅ `image_url`
- ✅ `pdf_url`
- ✅ `datasheet_url`

**Organization**:
- ✅ `category_id`, `collection_id`, `sorting`, `manual_sort`

**Status**:
- ✅ `status`, `is_featured`, `publish_date`, `unpublish_date`

**Metadata**:
- ✅ `external_id`, `created_at`, `updated_at`

## 🎯 Next Steps

1. **Commit and push** your changes
2. **Wait for Railway** to redeploy
3. **Check the logs** to confirm migrations ran
4. **Test updating products** in production
5. **If issues persist**, check the troubleshooting section

## 📝 Notes

- Migrations are **idempotent** (safe to run multiple times)
- New columns default to `NULL` for existing records
- No data loss occurs during migration
- The migration runs on **every server start** (quick check, only adds if missing)

---

**Created**: 2025-10-08  
**Issue**: Missing `rich_text` column in production database  
**Solution**: Automatic migration system that runs on server startup

