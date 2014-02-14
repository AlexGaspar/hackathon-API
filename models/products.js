'use strict';

module.exports = function(mongoose) {

  mongoose.model('products',
    {
        name: String
      , description: String
      , barcode: Number
      , pictures: []
      , materials: []
    }
  );

  return mongoose;
};
