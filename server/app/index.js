'use strict';

const express = require('express');
const config = require('../config');
const app = express();
const path = require('path');
const httpStatus = require('http-status');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.locals.env = config.env;

if (process.env.NODE_ENV != 'dev') {
    app.use('/dist', express.static(path.join(__dirname, '../../dist')));
}
app.use(require('./app-routes'));


app.use((err, req, res, next) => {
    let status = err.status;
    if (config.env === 'production') {
        status = httpStatus.INTERNAL_SERVER_ERROR;
    }
    res.render('error', {code: status, stack: err.stack});
});

app.use((req, res) => {
    if (res.statusCode === httpStatus.NOT_FOUND) {
        res.render('error', {code: res.statusCode});
    }
});

module.exports = app;
