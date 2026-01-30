const countries = require('../countries.json');

const findByCca3 = (cca3) => {
  if (!cca3) return null;
  return countries.find(c => c.cca3?.toUpperCase() === cca3.toUpperCase());
};

const getAllCountries = (cca3) => {
  if (cca3) return findByCca3(cca3) || null;
  return countries;
};

const getFullCountries = (cca3) => {
  const data = getAllCountries(cca3);

  if (!cca3) {
    return data.map(c => ({
      name: c.name,
      cca2: c.cca2,
      cca3: c.cca3,
      currency: c.currencies,
      language: c.languages,
      flag: c.flag,
      capital: c.capital,
      population: c.population,
      continent: c.continents,
    }));
  }

  if (!data) return null;

  return {
    name: data.name,
    cca2: data.cca2,
    cca3: data.cca3,
    currency: data.currencies,
    language: data.languages,
    flag: data.flag,
    capital: data.capital,
    population: data.population,
    continent: data.continents,
  };
};

const getShortCountries = (cca3) => {
  const data = getAllCountries(cca3);

  if (!cca3) {
    return data.map(c => ({
      name: c.name,
      cca2: c.cca2,
      cca3: c.cca3,
      flag: c.flag,
    }));
  }

  if (!data) return null;

  return {
    name: data.name,
    cca2: data.cca2,
    cca3: data.cca3,
    flag: data.flag,
  };
};

const updateCountryPopulation = (cca3, newPopulation) => {
  const country = countries.find(c => c.cca3?.toUpperCase() === cca3.toUpperCase());
  if (!country) return null;
  country.population = newPopulation;
  return country;
};

module.exports = {
  getAllCountries,
  getFullCountries,
  getShortCountries,
  updateCountryPopulation,   
};
