# Railway Deployment Checklist

## What Was Fixed

1. **CORS Configuration** - Updated `server.js` to properly handle cross-origin requests from Vercel
2. **Database Path Configuration** - Updated `init.js` and `migrate.js` to use Railway volume via `DATABASE_PATH` environment variable
3. **Directory Creation** - Added automatic creation of database directory if it doesn't exist

## Files Changed
- `src/cms/server.js` - CORS configuration
- `src/cms/database/init.js` - Database path handling
- `src/cms/database/migrate.js` - Database path handling
- `railway.toml` - Deployment configuration
- `RAILWAY_ENV_SETUP.md` - Environment variable documentation

## Railway Setup Steps

### Step 1: Configure Railway Volume
1. Go to your Railway project dashboard
2. Click on your service (the backend/API service)
3. Go to **Settings** tab
4. Scroll down to **Volumes** section
5. Click **+ New Volume**
6. Set **Mount Path** to: `/data`
7. Set **Volume Name** to: `cms-database` (or any name you prefer)
8. Click **Add**

### Step 2: Set Environment Variables
Go to the **Variables** tab and set these:

**Required:**
```
NODE_ENV=production
DATABASE_PATH=/data/cms.db
JWT_SECRET=<your-secure-jwt-secret-here>
FRONTEND_URL=https://nordic-medtek.vercel.app
DEFAULT_ADMIN_USERNAME=admin
DEFAULT_ADMIN_EMAIL=admin@nordicmedtek.com
DEFAULT_ADMIN_PASSWORD=<your-secure-password-here>
```

**Optional (with defaults):**
```
PORT=3001
BCRYPT_ROUNDS=10
MAX_FILE_SIZE=10485760
CORS_ORIGIN=https://nordic-medtek.vercel.app
```

### Step 3: Deploy the Updated Code

**Commit and push your changes:**
```bash
cd "E:\Mikal\Nordic Medical Technologies\nordic-medtek"
git add .
git commit -m "Fix CORS and Railway database volume configuration"
git push origin main
```

Railway will automatically redeploy when it detects the push.

### Step 4: Verify Deployment

1. **Check deployment logs** in Railway dashboard for any errors
2. **Test health endpoint**: Visit `https://your-railway-url.railway.app/api/health`
3. **Test volume**: Visit `https://your-railway-url.railway.app/api/test-volume`
4. **Test CORS**: Try logging into admin panel at `https://nordic-medtek.vercel.app/admin`

## How This Works

### Database File Separation
- **Code files** (`init.js`, `migrate.js`, `schema.sql`) are deployed with your app code
- **Database file** (`cms.db`) lives on the Railway volume at `/data/cms.db`
- Your `.gitignore` excludes `*.db` files, so the database never gets pushed to git
- The volume persists between deployments, so your data is safe

### Database Path Priority
The system looks for the database in this order:
1. `DATABASE_PATH` environment variable (if set)
2. `/data/cms.db` (if `NODE_ENV=production`)
3. `src/cms/database/cms.db` (local development default)

## Troubleshooting

### If you see "Cannot find module" errors:
- Verify all `.js` files are committed to git: `git ls-files src/cms/`
- Check Railway build logs for file copying errors
- Ensure the start command is: `node src/cms/server.js`

### If you see database errors:
- Verify the volume is mounted at `/data`
- Check `DATABASE_PATH=/data/cms.db` environment variable is set
- Look at logs for database path being used

### If you see CORS errors:
- Verify `FRONTEND_URL=https://nordic-medtek.vercel.app` is set
- Check Railway logs for "CORS blocked origin:" messages
- Ensure the Railway service has redeployed with the new code

## Testing Locally

To test locally with the same setup:
```bash
export DATABASE_PATH="./local-data/cms.db"
npm run cms:dev
```

This will use a local directory instead of the Railway volume.

