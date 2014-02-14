'use strict';

module.exports = function() {

  var appEnv = process.env.NODE_ENV || 'development'
    , config = {}
    ;


  config.loglevel   = process.env.LOGLEVEL || 'info';
  config.server     = require('./server')[appEnv];
  config.mongo      = require('./mongo')[appEnv];

  return config;
}();
