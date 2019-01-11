var express = require('express');
var Promise = require('promise');
var bodyParser = require("body-parser");
var logger = require('toto-apimon-events');

var apiName = 'training-archive';

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  next();
});
app.use(bodyParser.json());

/***************
 * APIS
 ***************/
app.get('/', function(req, res) {res.send({api: apiName, status: 'running'});});

/***********
 * START
 **********/
app.listen(8080, function() {
  console.log('Training Archive Microservice up and running');
});
