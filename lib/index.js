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

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server = require('../routes/index')(server);

server.listen(8080, function () {
  log.info('%s listening at %s', server.name, server.url);
});
