/**
 * Router for configuration endpoints.
 * This module maps the routes to the corresponding controller handlers.
 */

const express = require('express');
const configController = require('../controllers/configController');

const router = express.Router();

// Define the routes and map them to controller handlers
router.post('/create_configuration', configController.createConfiguration);
router.get('/get_configuration/:country_code', configController.getConfiguration);
router.post('/update_configuration', configController.updateConfiguration);
router.delete('/delete_configuration/:country_code', configController.deleteConfiguration);

module.exports = router;
