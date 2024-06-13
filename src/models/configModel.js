/**
 * Model for configuration operations.
 * This module provides functions to interact with the configurations table in the database.
 */

const pool = require('../db');

/**
 * Creates a new configuration in the database.
 * @param {string} countryCode - The country code.
 * @param {object} requirements - The requirements JSON object.
 * @returns {Promise<object>} - The created configuration.
 */
const createConfiguration = async (countryCode, requirements) => {
  const query = `
    INSERT INTO configurations (country_code, requirements) 
    VALUES ($1, $2) 
    RETURNING *;
  `;
  const values = [countryCode, requirements];
  const result = await pool.query(query, values);
  return result.rows[0];
};

/**
 * Retrieves a configuration by country code from the database.
 * @param {string} countryCode - The country code.
 * @returns {Promise<object>} - The retrieved configuration.
 */
const getConfiguration = async (countryCode) => {
  const query = `
    SELECT * 
    FROM configurations 
    WHERE country_code = $1;
  `;
  const values = [countryCode];
  const result = await pool.query(query, values);
  return result.rows[0];
};

/**
 * Updates an existing configuration in the database.
 * @param {string} countryCode - The country code.
 * @param {object} requirements - The updated requirements JSON object.
 * @returns {Promise<object>} - The updated configuration.
 */
const updateConfiguration = async (countryCode, requirements) => {
  const query = `
    UPDATE configurations 
    SET requirements = $1 
    WHERE country_code = $2 
    RETURNING *;
  `;
  const values = [requirements, countryCode];
  const result = await pool.query(query, values);
  return result.rows[0];
};

/**
 * Deletes a configuration by country code from the database.
 * @param {string} countryCode - The country code.
 * @returns {Promise<object>} - The deleted configuration.
 */
const deleteConfiguration = async (countryCode) => {
  const query = `
    DELETE FROM configurations 
    WHERE country_code = $1 
    RETURNING *;
  `;
  const values = [countryCode];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = {
  createConfiguration,
  getConfiguration,
  updateConfiguration,
  deleteConfiguration,
};
