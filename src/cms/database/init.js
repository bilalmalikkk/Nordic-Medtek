import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = process.env.NODE_ENV === 'production' ? '/app/src/cms/database/cms.db' : path.join(__dirname, 'cms.db');
const SCHEMA_PATH = path.join(__dirname, 'schema.sql');

// Create database connection
const { Database } = sqlite3.verbose();
const db = new Database(DB_PATH);

async function ensureAdminUser() {
    try {
        const existingAdmin = await dbHelpers.queryOne('SELECT * FROM users WHERE username = ?', ['admin']);
        if (!existingAdmin) {
            console.log('Creating default admin user...');
            await db.run(
                "INSERT INTO users (username, email, password_hash, role) VALUES ('admin', 'admin@nordicmedtek.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin')"
            );
            console.log('✅ Default admin user created');
        }
    } catch (error) {
        console.error('Error ensuring admin user:', error);
    }
}

async function initializeDatabase() {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(SCHEMA_PATH)) {
            reject(new Error('Schema file not found'));
            return;
        }

        const schema = fs.readFileSync(SCHEMA_PATH, 'utf8');
        
        db.exec(schema, async (err) => {
            if (err) {
                console.error('Error initializing database:', err);
                reject(err);
            } else {
                console.log('Database schema loaded successfully');
                await ensureAdminUser();
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
            
            if (keys.length === 0) {
                console.warn('No data to update');
                resolve({ changes: 0 });
                return;
            }
            
            const values = Object.values(data);
            const setClause = keys.map(key => `${key} = ?`).join(', ');
            
            const query = `UPDATE ${table} SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
            
            console.log('About to update product with data:', data);
            console.log('Database update query:', query);
            console.log('Database update values:', [...values, id]);
            
            db.run(query, [...values, id], function(err) {
                if (err) {
                    console.error('❌ Database update error:', err);
                    console.error('   Table:', table);
                    console.error('   Query:', query);
                    console.error('   Values:', [...values, id]);
                    console.error('   Error message:', err.message);
                    reject(err);
                } else {
                    console.log(`✅ Successfully updated ${this.changes} row(s) in ${table}`);
                    resolve({ changes: this.changes });
                }
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
