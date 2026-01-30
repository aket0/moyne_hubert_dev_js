const logger = require('../config/logger');
const {
  getAllCountries,
  getFullCountries,
  getShortCountries,
  updateCountryPopulation,
} = require('../services/countries.service');



const getAll = (req, res) => {
  const { cca3 } = req.params;
  logger.info(`GET /countries ${cca3 || ''}`);

  const data = getAllCountries(cca3);

  if (cca3 && !data) {
    return res.status(404).json({ error: 'Country not found' });
  }

  res.status(200).json(data);
};

const getFull = (req, res) => {
  const { cca3 } = req.params;
  logger.debug(`GET /countries/full ${cca3 || ''}`);

  const data = getFullCountries(cca3);

  if (cca3 && !data) {
    return res.status(404).json({ error: 'Country not found' });
  }

  res.status(200).json(data);
};

const getShort = (req, res) => {
  const { cca3 } = req.params;
  logger.debug(`GET /countries/short ${cca3 || ''}`);

  const data = getShortCountries(cca3);

  if (cca3 && !data) {
    return res.status(404).json({ error: 'Country not found' });
  }

  res.status(200).json(data);
};

const updatePopulation = (req, res) => {
    console.log('req.params:', req.params);
  console.log('req.body:', req.body);

  const cca3 = req.params.cca3;
  const population = req.body?.population;

  if (!cca3) return res.status(400).json({ error: 'Missing cca3 parameter' });
  if (!population || isNaN(population)) return res.status(400).json({ error: 'Invalid population value' });

  const updatedCountry = updateCountryPopulation(cca3, Number(population));
  if (!updatedCountry) return res.status(404).json({ error: 'Country not found' });

  return res.status(200).json({
    message: `Population updated for ${updatedCountry.name}`,
    country: updatedCountry,
  });
};




module.exports = {
  getAll,
  getFull,
  getShort,
  updatePopulation,
};
