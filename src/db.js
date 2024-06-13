/**
 * Database connection setup using pg and dotenv.
 * This module exports the database connection pool.
 */

const { Pool } = require('pg');
require('dotenv').config();

// Create a new pool instance with the connection string from the environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
