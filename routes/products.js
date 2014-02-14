'use strict';
var Q = require('q');



module.exports = function(server, APIVERSION) {
  var Products = server.models.products;


  var find = function(query) {
    var deferred = Q.defer();

    Products.find(query, function(err, docs) {
      if(err) deferred.reject(err);
      else deferred.resolve(docs);
    });

    return deferred.promise;
  }


  var getAll = function(req, res, next) {
    var query = {};

    find(query).then(function(){
      res.send(docs);

      return next();
    }).fail(function() {
      res.send(500);

      return next();
    });
  };

  var getByName = function(req, res, next) {


  }


  server.get(APIVERSION + '/products', getAll);
  server.get(APIVERSION + '/products/name/:name', getByName);
  // server.get(APIVERSION + '/products/barcode/:barcode', getAByBarCode;

  return server;
};
