const logger = require('../config/logger');
const {
    getAllCountries,
    getFullCountries,
    getShortCountries  
} = require('../services/countries.service');

const getAll = (req, res) => {
    logger.info('GET /');
    const countries = getAllCountries();
    res.status(200).json(countries);
}

const getFull = (req, res) => {
    logger.info('GET /full');
    const countries = getFullCountries();
    res.status(200).json(countries);
}

const getShort = (req, res) => {
    logger.info('GET /short');
    const countries = getShortCountries();
    res.status(200).json(countries);
}

module.exports = {
    getAll,
    getFull,
    getShort
};