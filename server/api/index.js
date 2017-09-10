'use strict';
const express = require('express');
const api = express();
const axios = require('axios');
const chalk = require('chalk');
const config = require('../config');

if (config.env !== 'production') {
    axios.interceptors.request.use((config) => {
        console.log(chalk.green('API request to:'), chalk.cyan(config.method.toUpperCase()), chalk.blue(config.url));
        return config;
    });
}

api.use('/items', require('./items/items-routes'));

module.exports = api;
