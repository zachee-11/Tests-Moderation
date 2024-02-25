const express = require('express');
const router = express.Router();
const ModerationController = require('../controllers/ModerationController');

router.get('/predict', ModerationController.getPrediction);
router.get('/score', ModerationController.getScore);

router.post('/predict', ModerationController.postPrediction); //n'existe pas dans l'API
router.post('/score', ModerationController.postScore);         //n'existe pas dans l'API

module.exports = router;
