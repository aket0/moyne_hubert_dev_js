require('dotenv').config();
const express = require('express');
const countries = require('./countries.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', require('./routes/countries.routes'));

app.use((req, res) => {

    res.status(404).json({ error: 'HEU BIEN NON ! 404 mon coco !' });
});

app.listen(port, () => {    
    console.log(`App listening on port ${port}`);   
});