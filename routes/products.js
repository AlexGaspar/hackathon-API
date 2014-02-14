'use strict';

module.exports = function(server, APIVERSION) {

  var getAll = function(req, res, next) {
    res.send('GetAll');
  };


  server.get(APIVERSION + '/products', getAll);

  return server;
};
