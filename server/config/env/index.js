'use strict';

const path = require('path');
const _ = require('lodash');

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);

const defaults = {
    root: path.normalize(`${__dirname }/../../..`)
};

_.assign(config, defaults);

module.exports = config;