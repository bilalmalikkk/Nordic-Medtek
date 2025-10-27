# 🚀 NordicMedTek Frontend - Production Deployment Guide

## Overview
This guide will help you deploy the updated NordicMedTek frontend to your production server with the new datasheet functionality.

## What's Changed
- ✅ **Direct PDF Opening**: Datasheet buttons now open PDFs directly in new tabs
- ✅ **Removed Datasheet Page**: No more intermediate datasheet page with iframe issues
- ✅ **Better UX**: Cleaner, faster user experience
- ✅ **No React Errors**: Fixed all React Hooks violations

## Files to Update on Server

### 1. Frontend Files (React App)
Upload these files from `nordic-medtek/dist/` to your web server:

```
dist/
├── index.html
├── assets/
│   ├── index.DVHxwH3f.js
│   ├── index.kiwYWbFo.css
│   └── [all other asset files]
├── robots.txt
├── sitemap.xml
└── vite.svg
```

### 2. Updated Source Files
Upload these updated files to your server:

```
src/
├── pages/
│   └── Products.jsx (updated with direct PDF opening)
├── App.jsx (removed datasheet route)
└── vite.config.js (updated with cache busting)
```

## Server Update Steps

### Step 1: Backup Current Files
```bash
# SSH into your server
ssh your-username@your-server-ip

# Navigate to your web directory
cd /home/yourdomain/public_html/

# Create backup
cp -r nordic-medtek nordic-medtek-backup-$(date +%Y%m%d)
```

### Step 2: Upload New Files
Upload the new `dist/` folder contents to replace your current frontend files.

### Step 3: Update Source Files (Optional)
If you want to keep the source files updated on the server:
```bash
# Upload the updated source files
# - src/pages/Products.jsx
# - src/App.jsx
# - vite.config.js
```

### Step 4: Clear Server Cache
```bash
# Clear any server-side caching
# This depends on your server setup
# For Apache:
sudo systemctl reload apache2

# For Nginx:
sudo systemctl reload nginx

# For Node.js servers:
pm2 restart all
```

### Step 5: Test the Deployment
1. Visit your website
2. Go to the Products page
3. Click on any "View Datasheet" button
4. Verify that PDFs open directly in new tabs
5. Check browser console for any errors

## Expected Behavior

### ✅ What Should Work:
- **Products Page**: Clean product cards with "View Datasheet" buttons
- **Direct PDF Opening**: Clicking datasheet button opens PDF in new tab
- **No Errors**: No React Hooks violations or X-Frame-Options issues
- **Better Performance**: Faster loading without intermediate pages

### 🔧 Button States:
- **With Datasheet**: Green "View Datasheet" button with external link icon
- **Without Datasheet**: Gray "No Datasheet" button (disabled)

## Troubleshooting

### If PDFs Don't Open:
1. Check browser console for errors
2. Verify PDF URLs are accessible
3. Test PDF URLs directly in browser

### If Buttons Don't Work:
1. Check browser console for JavaScript errors
2. Verify all assets are loaded correctly
3. Clear browser cache (Ctrl+F5)

### If Styling is Broken:
1. Check if CSS files are loading
2. Verify file paths are correct
3. Check server MIME types

## Rollback Plan
If something goes wrong:
```bash
# Restore backup
rm -rf nordic-medtek
mv nordic-medtek-backup-$(date +%Y%m%d) nordic-medtek
```

## Post-Deployment Checklist
- [ ] Website loads correctly
- [ ] Products page displays properly
- [ ] Datasheet buttons work (open PDFs in new tabs)
- [ ] No console errors
- [ ] All images and assets load
- [ ] Mobile responsiveness works
- [ ] All navigation works

## Support
If you encounter any issues:
1. Check browser console for errors
2. Verify all files uploaded correctly
3. Test on different browsers
4. Check server error logs

The deployment should be straightforward since we've simplified the datasheet functionality to just open PDFs directly in new tabs!
