'use strict';

var log = require('./log');


process.on('uncaughtException', function (error) {
  log.fatal({
    stack: error.stack
  }, 'Uncaught exception, exiting...');
  process.exit(1);
});



log.info('node-boilerplate');

module.exports.hello = function () {
  return 'world!';
};
