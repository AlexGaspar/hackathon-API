'use strict';

var log = require('./log')
  , express = require('express')
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
var app = express();

// Bind log on Server
app.helper = {
  log: log
};

// Load Models
var app = require('../models/index')(mongoose, app);


// Load Routes
app = require('../routes/index')(app);


// Start Server
app.listen(config.server.port);
log.info('listening at %s', config.server.port);
