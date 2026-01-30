require('dotenv').config();

const express = require('express');
const logger = require('./config/logger');
const countriesRoutes = require('./routes/countries.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use((req, res, next) => {
  res.on('finish', () => {
    const msg = `${req.method} ${req.originalUrl} ${res.statusCode}`;

    if (res.statusCode >= 500) logger.error(msg);
    else if (res.statusCode >= 400) logger.warn(msg);
    else logger.info(msg);
  });
  next();
});

app.use('/', countriesRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.originalUrl} - ${err.message}`);
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
