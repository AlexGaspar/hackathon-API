var defaults = {
    name       : 'YOLO BRO!'
  , host       : '0.0.0.0'
  , port       : 8080
};

var test = {
    name       : 'YOLO BRO!'
  , host       : 'localhost'
  , port       : 8080
};

exports.production  = defaults;
exports.development = defaults;
exports.preview     = exports.production;
exports.test        = test;
