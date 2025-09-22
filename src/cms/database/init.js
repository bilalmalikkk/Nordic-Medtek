import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, 'cms.db');
const SCHEMA_PATH = path.join(__dirname, 'schema.sql');

// Create database connection
const { Database } = sqlite3.verbose();
const db = new Database(DB_PATH);

// Initialize database with schema
async function initializeDatabase() {
    return new Promise((resolve, reject) => {
        // Check if schema file exists
        if (!fs.existsSync(SCHEMA_PATH)) {
            reject(new Error('Schema file not found'));
            return;
        }

        // Read and execute schema
        const schema = fs.readFileSync(SCHEMA_PATH, 'utf8');
        
        db.exec(schema, (err) => {
            if (err) {
                console.error('Error initializing database:', err);
                reject(err);
            } else {
                console.log('Database schema loaded successfully');
                resolve();
            }
        });
    });
}

// Database query helper functions
const dbHelpers = {
    // Get all records from a table
    getAll: (table, conditions = '') => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${table} ${conditions}`;
            db.all(query, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    },

    // Get single record by ID
    getById: (table, id) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${table} WHERE id = ?`;
            db.get(query, [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    },

    // Insert new record
    insert: (table, data) => {
        return new Promise((resolve, reject) => {
            const keys = Object.keys(data);
            const values = Object.values(data);
            const placeholders = keys.map(() => '?').join(', ');
            
            const query = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`;
            
            db.run(query, values, function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, changes: this.changes });
            });
        });
    },

    // Update record
    update: (table, id, data) => {
        return new Promise((resolve, reject) => {
            const keys = Object.keys(data);
            const values = Object.values(data);
            const setClause = keys.map(key => `${key} = ?`).join(', ');
            
            const query = `UPDATE ${table} SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
            
            db.run(query, [...values, id], function(err) {
                if (err) reject(err);
                else resolve({ changes: this.changes });
            });
        });
    },

    // Delete record
    delete: (table, id) => {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM ${table} WHERE id = ?`;
            db.run(query, [id], function(err) {
                if (err) reject(err);
                else resolve({ changes: this.changes });
            });
        });
    },

    // Execute custom query
    query: (query, params = []) => {
        return new Promise((resolve, reject) => {
            db.all(query, params, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    },

    // Execute custom query (single row)
    queryOne: (query, params = []) => {
        return new Promise((resolve, reject) => {
            db.get(query, params, (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    },

    // Execute custom query (run - for INSERT/UPDATE/DELETE)
    run: (query, params = []) => {
        return new Promise((resolve, reject) => {
            db.run(query, params, function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, changes: this.changes });
            });
        });
    }
};

// Close database connection
function closeDatabase() {
    return new Promise((resolve) => {
        db.close((err) => {
            if (err) {
                console.error('Error closing database:', err);
            } else {
                console.log('Database connection closed');
            }
            resolve();
        });
    });
}

export {
    db,
    initializeDatabase,
    closeDatabase
};

export const {
    getAll,
    getById,
    insert,
    update,
    delete: deleteRecord,
    query,
    queryOne,
    run
} = dbHelpers;

// Export delete as dbDelete for backward compatibility
export { deleteRecord as dbDelete };
