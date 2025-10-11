# 🧪 Test Endpoints

## Check if the app is running:

1. **Health Check:**
   ```
   https://nordic-medtek-production.up.railway.app/api/health
   ```
   Should return: `{"status":"OK","timestamp":"...","version":"1.0.0"}`

2. **Admin Reset Endpoint:**
   ```
   https://nordic-medtek-production.up.railway.app/api/temp-reset-admin
   ```
   Should return admin user creation response

## If endpoints don't work:

The app might be:
- Still deploying
- Failed to deploy
- Crashed due to the proxy issue

## Next Steps:

1. Check Railway Dashboard for current deployment status
2. Look at Build Logs for any build errors
3. Check Deploy Logs for runtime errors
4. Try the health endpoint first
