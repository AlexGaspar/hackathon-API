'use strict';

module.exports = function(server) {
  var APIVERSION = 1;
  // Load Routes
  server = require('./products')(server, APIVERSION);

  return server;
};
