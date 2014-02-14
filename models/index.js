'use strict';

module.exports = function(mongoose, server) {
  if(!server) throw new Error('Server not yet initialized...');

  server.models = server.models || {};

  server.models.products = require('./products')(mongoose);

  return server;
};
