'use strict';

module.exports = function(server) {
  var APIVERSION = '/API/1';

  // Load Routes
  server = require('./products')(server, APIVERSION);

  return server;
};
