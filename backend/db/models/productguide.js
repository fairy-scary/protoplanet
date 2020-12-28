'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductGuide = sequelize.define('ProductGuide', {
    shopId: DataTypes.INTEGER,
    mainText: DataTypes.TEXT,
    shippingPolicy: DataTypes.TEXT
  }, {});
  ProductGuide.associate = function(models) {
    // associations can be defined here
  };
  return ProductGuide;
};