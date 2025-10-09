// Simple test script to start CMS server and capture errors
import('./src/cms/server.js').catch(err => {
    console.error('❌ CMS Server failed to start:', err);
    console.error('Error details:', err.message);
    console.error('Stack trace:', err.stack);
    process.exit(1);
});

