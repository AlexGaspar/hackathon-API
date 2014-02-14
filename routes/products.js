'use strict';

module.exports = function(server, APIVERSION) {
  var Products = server.models.products;




  var getAll = function(req, res, next) {
    Products.find({}, function(err, docs) {
      if(err) res.send(500);
      else {
        res.send(docs);
      }
      return next();
    });
  };


  server.get(APIVERSION + '/products', getAll);

  return server;
};
