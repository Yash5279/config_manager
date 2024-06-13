/**
 * Database initialization script.
 * This script reads the setup SQL file and executes its contents to set up the database schema.
 */

const fs = require('fs');
const path = require('path');
const pool = require('../src/db');

// Read the setup SQL file
const setupSql = fs.readFileSync(path.join(__dirname, '../setup.sql')).toString();

// Execute the setup SQL script
pool.query(setupSql)
  .then(() => {
    console.log('Database initialized successfully');
    pool.end();
  })
  .catch((err) => {
    console.error('Error initializing database:', err);
    pool.end();
  });
