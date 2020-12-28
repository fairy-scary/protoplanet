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
    Product.hasMany(models.Variant, { foreignKey: 'productId'});
    Product.belongsTo(models.Shop, { foreignKey: 'shopId'});
    Product.belongsTo(models.Post, { foreignKey: 'postId'});
    Product.belongsTo(models.Order, { foreignKey: 'orderId'});
  };
  return Product;
};