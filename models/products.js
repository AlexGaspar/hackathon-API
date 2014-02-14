'use strict';

module.exports = function(mongoose) {

  return mongoose.model('products',
    {
        name: String
      , description: String
      , upc: Number
      , image: String
      , materials: [
        {
            name: String
          , percentage: Number
        }
      ]
      , expiration: Number
      , recycle_info: String
      , origin_info: String
      , footprint_info: String
      , alternatives: Array
    }
  );
};
