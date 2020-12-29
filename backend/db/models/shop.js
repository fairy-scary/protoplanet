'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    userId: DataTypes.INTEGER,
    shopName: DataTypes.STRING,
    makerName: DataTypes.STRING,
    shopBio: DataTypes.TEXT
  }, {});
  Shop.associate = function(models) {
    Shop.hasMany(models.Product, { foreignKey: 'shopId'});
    Shop.hasMany(models.Post, { foreignKey: 'shopId'});
    Shop.hasMany(models.Favorite, { foreignKey: 'shopId'});
    Shop.hasOne(models.ProductGuide, { foreignKey: 'shopId'});
    Shop.hasOne(models.User, { foreignKey: 'shopId'});
    Shop.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Shop; 
};