const express = require('express');
const router = express.Router();
const controller = require('../controllers/countries.controller');

router.get('/', controller.getAll);
router.get('/full', controller.getFull);
router.get('/short', controller.getShort);

module.exports = router;