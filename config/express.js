var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');
var path = require('path');

module.exports = function() {
    var app = express();

    require('../app/routes/index.routes')(app);

    app.set('views', './app/views');
    app.set('view engine', 'pug');

    if (process.env.NODE_ENV == 'dev') {
        app.use(morgan('dev'));
    } else {
        app.use(compression());
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.use('/jquery', express.static('node_modules/jquery/dist/'))
    app.use('/bootstrap', express.static('node_modules/bootstrap/dist/'))
    app.use('/public', express.static('public'))

    return app;
};