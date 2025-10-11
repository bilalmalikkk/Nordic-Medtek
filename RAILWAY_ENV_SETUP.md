# Railway Environment Variables Setup

Make sure these environment variables are set in your Railway project:

## Required Environment Variables

```
NODE_ENV=production
PORT=3001
DATABASE_PATH=/data/cms.db
JWT_SECRET=your-secure-jwt-secret-here
FRONTEND_URL=https://nordic-medtek.vercel.app
CORS_ORIGIN=https://nordic-medtek.vercel.app
MAX_FILE_SIZE=10485760
BCRYPT_ROUNDS=10
DEFAULT_ADMIN_USERNAME=admin
DEFAULT_ADMIN_EMAIL=admin@nordicmedtek.com
DEFAULT_ADMIN_PASSWORD=your-secure-password-here
```

**IMPORTANT:** The `DATABASE_PATH` should point to your Railway volume mount path.

## How to Set Variables in Railway

1. Go to your Railway project dashboard
2. Select your service (backend/API)
3. Click on "Variables" tab
4. Add each variable above
5. Deploy/Redeploy the service

## Important Notes

- Make sure `FRONTEND_URL` is set to `https://nordic-medtek.vercel.app`
- Use a strong `JWT_SECRET` in production (not the default one)
- Use a strong `DEFAULT_ADMIN_PASSWORD` in production
- After setting variables, Railway will automatically redeploy

## CORS Configuration

The server now accepts requests from:
- http://localhost:5173 (local development)
- http://localhost:3000 (local development)
- https://nordic-medtek.vercel.app (production)
- Any origin specified in FRONTEND_URL environment variable

