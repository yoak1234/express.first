var express = require('express');
var app = express();

var helloWorld = function(req, res, next) {
    res.send('Hello World');
}
var helloYok = function(req, res, next) {
    res.send('Hello Yok.');
}

app.use('/', helloWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000');

module.exports = app;