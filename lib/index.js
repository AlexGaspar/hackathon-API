'use strict';

var log = require('./log')
  , restify = require('restify')
  , config = require('config')
  , mongoose = require('mongoose')
  ;

process.on('uncaughtException', function (error) {
  log.fatal({
    stack: error.stack
  }, 'Uncaught exception, exiting...');
  process.exit(1);
});

// Create Mongo Connection
mongoose.connect(config.mongo.connection);
var db = mongoose.connection;
db.on('error', function(){ throw new Error('connection error:')});

// Create Server
var server = restify.createServer({
  name: config.server.name,
  version: '0.0.1'
});

// Bind log on Server
server.helper = {
  log: log
};

// Load Models
var server = require('../models/index')(mongoose, server);


server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Load Routes
server = require('../routes/index')(server);


// Start Server
server.listen(config.server.port, function () {
  log.info('%s listening at %s', server.name, server.url);
});
