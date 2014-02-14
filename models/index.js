'use strict';

module.exports = function(mongoose) {
  var models = models || {};

  models.products = require('./products')(mongoose);

  return models;
};
