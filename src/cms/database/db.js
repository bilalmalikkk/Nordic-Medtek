import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database path
const DB_PATH = process.env.NODE_ENV === 'production' 
    ? path.join('/app/src/cms/database', 'cms.db')
    : path.join(__dirname, 'cms.db');

// Create database connection
const { Database } = sqlite3.verbose();
const db = new Database(DB_PATH);

// Database helper functions
export const queryOne = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.get(query, params, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
};

export const query = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

export const run = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.run(query, params, function(err) {
            if (err) reject(err);
            else resolve({ id: this.lastID, changes: this.changes });
        });
    });
};

export const insert = (table, data) => {
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
};

export const update = (table, id, data) => {
    return new Promise((resolve, reject) => {
        const keys = Object.keys(data);
        
        if (keys.length === 0) {
            resolve({ changes: 0 });
            return;
        }
        
        const values = Object.values(data);
        const setClause = keys.map(key => `${key} = ?`).join(', ');
        
        const query = `UPDATE ${table} SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
        
        db.run(query, [...values, id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve({ changes: this.changes });
            }
        });
    });
};

export { db };
