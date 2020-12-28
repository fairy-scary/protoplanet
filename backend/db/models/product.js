'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    shopId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.NUMERIC,
    slideNumber: DataTypes.INTEGER,
    vidTime: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};