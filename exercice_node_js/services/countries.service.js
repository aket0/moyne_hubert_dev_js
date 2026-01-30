const countries = require('../countries.json');

const getAllCountries = () => {
    return countries;
};

const getFullCountries = () => {
    return countries.map(country => ({
        'name': country.name,
        'cca2': country.cca2,
        'cca3': country.cca3,
        'curency': country.currencies,
        'language': country.languages,
        'flag': country.flag,
        'capital': country.capital,
        'population': country.population,
        'continent': country.continents,
    }));
}

const getShortCountries = () => {
    return countries.map(country => ({
        'name': country.name,
        'cca2': country.cca2,
        'cca3': country.cca3,
        'flag': country.flag,
    }));
}

module.exports = {
    getAllCountries,
    getFullCountries,
    getShortCountries
};