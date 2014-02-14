'use strict';

module.exports = function(mongoose) {

  return mongoose.model('products',
    {
        name: String
      , description: String
      , barcode: Number
      , pictures: []
      , materials: []
    }
  );
};
