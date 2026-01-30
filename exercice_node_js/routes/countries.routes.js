const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countries.controller');

router.get('/', countriesController.getAll);
router.get('/full', countriesController.getFull);
router.get('/short', countriesController.getShort);

router.get('/:cca3', countriesController.getAll);
router.get('/full/:cca3', countriesController.getFull);
router.get('/short/:cca3', countriesController.getShort);

router.post('/update-population/:cca3', countriesController.updatePopulation);

module.exports = router;
