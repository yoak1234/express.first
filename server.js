var express = require('./config/express');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var app = express();

app.listen(1234);
module.exports = app;

console.log('Server running at http://loclahost:1234');