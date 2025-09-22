#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Setting up NordicMedTek CMS Integration...\n');

// Create necessary directories
const directories = [
    'src/uploads',
    'src/uploads/images',
    'src/uploads/documents',
    'temp'
];

directories.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`📁 Created directory: ${dir}`);
    }
});

// Copy environment file if it doesn't exist
const envPath = path.join(__dirname, '.env');
const envCmsPath = path.join(__dirname, 'env.cms');

if (!fs.existsSync(envPath) && fs.existsSync(envCmsPath)) {
    fs.copyFileSync(envCmsPath, envPath);
    console.log('📄 Created .env file from CMS template');
}

console.log('\n📦 Installing CMS dependencies...');
try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully');
} catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
}

console.log('\n🎉 CMS Integration setup completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Start the full development environment: npm run dev:full');
console.log('2. Access your main website: http://localhost:5173');
console.log('3. Access CMS API: http://localhost:3001/api');
console.log('4. Import your CSV data using the CMS API');
console.log('\n🔗 The CMS is now fully integrated into your main project!');
