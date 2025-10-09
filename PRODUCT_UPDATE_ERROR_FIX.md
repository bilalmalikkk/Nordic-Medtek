# Product Update Error Fix

## Issue
When trying to update a product in the Admin panel, users were getting a `500 Internal Server Error` from the Railway production API:
```
PUT https://nordic-medtek-production.up.railway.app/api/products/248 500 (Internal Server Error)
```

## Root Cause
The error was caused by sending database JOIN fields (like `category_name`, `category_slug`, `category_color`, `category_icon`) in the product update request. These fields are read-only fields generated from JOIN queries and don't exist as actual columns in the `products` table, causing the database update to fail.

## Changes Made

### 1. Client-Side (Admin.jsx)
**File**: `src/pages/Admin.jsx`

- **Added Field Filtering**: Created an `allowedFields` array to explicitly define which fields can be updated
- **Removed JOIN Fields**: Prevented sending read-only JOIN fields (`category_name`, `category_slug`, etc.)
- **Better Data Cleaning**: Only include allowed fields in the update request
- **Improved Error Handling**: Enhanced error messages to show more details from the server

**Allowed Update Fields**:
- `title`, `product_name`, `item_number`, `technical_data`
- `rich_text`, `detailed_description`
- `image_url`, `pdf_url`, `datasheet_url`
- `category_id`, `sorting`, `status`, `is_featured`
- `slug`, `manual_sort`, `publish_date`, `unpublish_date`, `external_id`

### 2. Server-Side (products.js)
**File**: `src/cms/routes/products.js`

- **Server-Side Field Filtering**: Added server-side validation to filter out non-allowed fields
- **Enhanced Logging**: Added detailed console logs for debugging:
  - Logs incoming update data
  - Logs cleaned update data
  - Warns about skipped non-allowed fields
- **Better Error Messages**: Improved error responses with specific details:
  - Column not found errors show which column is missing
  - UNIQUE constraint errors are handled separately
  - Development mode shows full stack traces

**Improvements**:
```javascript
// Now filters out:
- Read-only fields (id, created_at, updated_at)
- JOIN fields (category_name, category_slug, etc.)
- Any undefined values
- Non-allowed fields
```

## Testing
After deployment to Railway:

1. **Test Product Update**:
   - Go to Admin panel
   - Edit an existing product
   - Make changes
   - Click Update
   - Should see "Product updated successfully!"

2. **Check Railway Logs**:
   - You should see detailed logs showing:
     ```
     📝 Update product request for ID: 248
     📦 Received update data: {...}
     ✅ Cleaned update data: {...}
     ✅ Product updated successfully
     ```

3. **Verify Data Integrity**:
   - Check that product data is updated correctly
   - Verify that category relationships are maintained
   - Ensure images and documents are preserved

## What to Monitor

### In Browser Console:
- Look for "Submitting product data:" log showing cleaned data
- Should NOT see category_name, category_slug in the submitted data

### In Railway Logs:
- Check for "📝 Update product request" messages
- Look for "⚠️ Skipping non-allowed field" warnings
- Verify "✅ Product updated successfully" messages

### Error Scenarios to Watch:
1. **Column Not Found**: If you see "no such column" error:
   - The database migration may not have run
   - Check Railway logs for migration status
   - May need to manually run migrations

2. **UNIQUE Constraint**: If you see "UNIQUE constraint failed":
   - Check for duplicate item numbers or slugs
   - Review the product data being submitted

3. **Authentication Errors**: If you see "ERR_CONNECTION_RESET":
   - Check that Railway service is running
   - Verify environment variables are set correctly
   - Check CORS configuration

## Deployment Status
- ✅ Code committed: `edcff6a`
- ✅ Pushed to GitHub: `main` branch
- ⏳ Railway deployment: Should auto-deploy within 2-3 minutes

## Rollback Plan
If issues persist after deployment:

1. **Quick Rollback**:
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Check Previous Commit**:
   - Previous working commit: `5aac0f8`

3. **Debug Railway**:
   - Check Railway deployment logs
   - Verify database migrations ran successfully
   - Check environment variables

## Future Improvements

1. **Database Migrations**:
   - Ensure all migrations run automatically on Railway
   - Add migration status endpoint to verify schema

2. **API Validation**:
   - Add request validation middleware
   - Use JSON schema validation for update requests

3. **Testing**:
   - Add integration tests for product updates
   - Test with different field combinations

## Notes
- The `detailed_description` field migration should run automatically on server startup
- The migration script checks for and adds missing columns
- Server logs show migration status on startup

## Contact
If you continue to experience issues after deployment, check:
1. Railway deployment logs
2. Browser console for detailed error messages
3. Network tab for API request/response details

