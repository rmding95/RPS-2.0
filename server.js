'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var http = require('http').Server(app);
var io = require('socket.io')(http);

require('./base')(io);

app.use(express.static(__dirname + '/public/app'));

app.get('*', function(res, req) {
    res.sendFile('index.html');
});

http.listen(8080, function() {
    console.log("listening on 8080");
});

module.exports = app;