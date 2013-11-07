'use strict';

var log    = require('./log');

log.info('node-boilerplate');

module.exports.hello = function () {
  return 'world!';
};
