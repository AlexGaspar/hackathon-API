var defaults = {
    host     : 'ds031339.mongolab.com'
  , user     : 'kbc_hackathon'
  , password : 'KBChackathon'
  , database : 'hackathon1'
  , port     : 31339
};
defaults.connection  = 'mongodb://' + defaults.user + ':' + defaults.password + '@' + defaults.host + ':' + defaults.port + '/' + defaults.database;

var test = {
    host     : 'localhost'
  , user     : 'root'
  , password : ''
  , database : 'hackathon'
  , port     : 63178
};
test.connection  = 'mongodb://' + test.user + ':' + test.password + '@' + test.host + ':' + test.port + '/' + test.database;



exports.production  = defaults;
exports.development = defaults;
exports.preview     = exports.production;
exports.test        = test;
