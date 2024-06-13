/**
 * Controller for configuration operations.
 * This module provides request handlers for the configuration endpoints.
 */

const configModel = require('../models/configModel');

/**
 * Handler to create a new configuration.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const createConfiguration = async (req, res) => {
  try {
    const { country_code, requirements } = req.body;
    const newConfig = await configModel.createConfiguration(country_code, JSON.stringify(requirements));
    res.status(201).json(newConfig);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create configuration' });
  }
};

/**
 * Handler to get a configuration by country code.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const getConfiguration = async (req, res) => {
  try {
    const { country_code } = req.params;
    const config = await configModel.getConfiguration(country_code);
    if (!config) {
      res.status(404).json({ error: 'Configuration not found' });
    } else {
      res.json(config);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get configuration' });
  }
};

/**
 * Handler to update an existing configuration.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const updateConfiguration = async (req, res) => {
  try {
    const { country_code, requirements } = req.body;
    const updatedConfig = await configModel.updateConfiguration(country_code, JSON.stringify(requirements));
    if (!updatedConfig) {
      res.status(404).json({ error: 'Configuration not found' });
    } else {
      res.json(updatedConfig);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update configuration' });
  }
};

/**
 * Handler to delete a configuration by country code.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const deleteConfiguration = async (req, res) => {
  try {
    const { country_code } = req.params;
    const deletedConfig = await configModel.deleteConfiguration(country_code);
    if (!deletedConfig) {
      res.status(404).json({ error: 'Configuration not found' });
    } else {
      res.json(deletedConfig);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete configuration' });
  }
};

module.exports = {
  createConfiguration,
  getConfiguration,
  updateConfiguration,
  deleteConfiguration,
};
