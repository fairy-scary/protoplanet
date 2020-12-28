'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    userId: DataTypes.INTEGER,
    shopName: DataTypes.STRING,
    makerName: DataTypes.STRING,
    shopBio: DataTypes.TEXT
  }, {});
  Shop.associate = function(models) {
    // associations can be defined here
  };
  return Shop;
};