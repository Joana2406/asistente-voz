// server/routes/updateSettingsRoutes.js
const express = require('express');
const router = express.Router();
const { updateUserSettings } = require('../controllers/usuarioController');

router.put('/update-settings', updateUserSettings);

module.exports = router;
