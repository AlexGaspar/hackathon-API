'use strict';
var Q = require('q');



module.exports = function(server, APIVERSION) {
  var Products = server.models.products;
  var log = server.helper.log;

  // if needed move this in helpers
  var find = function(query) {
    var deferred = Q.defer();

    log.info('find -- Query : ', query);

    Products.find(query, function(err, docs) {
      if(err) deferred.reject(err);
      else deferred.resolve(docs);
    });

    return deferred.promise;
  }

  /**
   * [getByQuery description]
   * @param  {[type]}   query [description]
   * @param  {[type]}   res   [description]
   * @param  {Function} next  [description]
   * @return {[type]}         [description]
   */
  var getByQuery = function(query, res, next) {
   find(query).then(function(docs){
      var response = {
        data: docs
      };

      res.send(response);
    }).fail(function(err) {
      res.send(500);
    }).fin(function () {
      return next();
    });
  };

  /**
   * [getAll description]
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  var getAll = function(req, res, next) {
    var query = {};

    getByQuery(query, res, next);
  };

  /**
   * [get description]
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  var get = function(req, res ,next) {
    var query = {}
    query[req.params.field] = req.params.value

    getByQuery(query, res, next);
  }

  server.get(APIVERSION + '/products', getAll);
  server.get(APIVERSION + '/products/:field/:value', get);

  return server;
};
