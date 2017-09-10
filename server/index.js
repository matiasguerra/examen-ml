'use strict';

const expressApp = require('express')();
const compress = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const config = require('./config/env/');
const basePath = '/';

if (config.env === 'local' || config.env === 'development') {
    expressApp.use(morgan('dev'));
}

// parse body params and attach them to req.body
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({extended: true}));

expressApp.use(cookieParser());
expressApp.use(compress());

expressApp.use(`${basePath}health`, require('express-healthcheck')());

expressApp.use(`${basePath}api`, require('./api'));
expressApp.use(basePath, require('./app'));

expressApp.listen(config.port, () => {
    console.log(`server started on port ${config.port} (${config.env})`);
});
