const morgan = require('morgan');
const express = require('express');
require('dotenv').config()
const errorHandler = require('errorhandler');
//const swaggerDoc = require('../swaggerDoc');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app= express();
//swaggerDoc(app);
app.set('port', 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/api', require('../routes/fiscaliaRoute'));

if('development' === app.get('env')) {
    app.use(errorHandler());
}

module.exports = app;