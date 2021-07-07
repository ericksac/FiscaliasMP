const morgan = require('morgan');
const express = require('express');
require('dotenv').config()
const errorHandler = require('errorhandler');
//const swaggerDoc = require('../swaggerDoc');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app= express();

app.set('port', 3001);
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

//Swagger
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: ['./src/routes/*.js']
}


const swaggerSpec = swaggerJSDoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );
module.exports = app;