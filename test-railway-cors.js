#!/usr/bin/env node

/**
 * Test script to verify Railway deployment and CORS configuration
 * Run this after deploying to Railway to check if the server is responding
 */

const https = require('https');

const RAILWAY_URL = 'https://nordic-medtek-production.up.railway.app';
const FRONTEND_ORIGIN = 'https://nordic-medtek.vercel.app';

async function testEndpoint(endpoint, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        const url = new URL(endpoint, RAILWAY_URL);
        
        const options = {
            hostname: url.hostname,
            port: 443,
            path: url.pathname,
            method: method,
            headers: {
                'Origin': FRONTEND_ORIGIN,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        if (data) {
            const postData = JSON.stringify(data);
            options.headers['Content-Length'] = Buffer.byteLength(postData);
        }

        console.log(`🧪 Testing ${method} ${endpoint}`);
        console.log(`   Origin: ${FRONTEND_ORIGIN}`);

        const req = https.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                console.log(`   Status: ${res.statusCode}`);
                console.log(`   CORS Headers:`);
                console.log(`     Access-Control-Allow-Origin: ${res.headers['access-control-allow-origin'] || 'NOT SET'}`);
                console.log(`     Access-Control-Allow-Methods: ${res.headers['access-control-allow-methods'] || 'NOT SET'}`);
                console.log(`     Access-Control-Allow-Headers: ${res.headers['access-control-allow-headers'] || 'NOT SET'}`);
                
                try {
                    const parsed = JSON.parse(responseData);
                    console.log(`   Response:`, parsed);
                } catch (e) {
                    console.log(`   Response:`, responseData);
                }
                
                resolve({
                    status: res.statusCode,
                    headers: res.headers,
                    data: responseData
                });
            });
        });

        req.on('error', (error) => {
            console.log(`   ❌ Error: ${error.message}`);
            reject(error);
        });

        if (data) {
            req.write(JSON.stringify(data));
        }

        req.end();
    });
}

async function runTests() {
    console.log('🚀 Testing Railway Deployment and CORS Configuration\n');
    
    try {
        // Test 1: Health check
        console.log('1️⃣ Testing health endpoint...');
        await testEndpoint('/api/health');
        console.log('');

        // Test 2: Simple CORS test
        console.log('2️⃣ Testing CORS endpoint...');
        await testEndpoint('/api/test');
        console.log('');

        // Test 3: Login endpoint (OPTIONS preflight)
        console.log('3️⃣ Testing login preflight (OPTIONS)...');
        await testEndpoint('/api/auth/login', 'OPTIONS');
        console.log('');

        // Test 4: Login endpoint (actual request)
        console.log('4️⃣ Testing login endpoint (POST)...');
        await testEndpoint('/api/auth/login', 'POST', {
            username: 'admin',
            password: 'admin123'
        });
        console.log('');

        console.log('✅ All tests completed!');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        process.exit(1);
    }
}

// Run tests if this script is executed directly
if (require.main === module) {
    runTests();
}

module.exports = { testEndpoint, runTests };
