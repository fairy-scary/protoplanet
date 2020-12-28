'use strict';
module.exports = (sequelize, DataTypes) => {
  const Variant = sequelize.define('Variant', {
    option: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {});
  Variant.associate = function(models) {
    // associations can be defined here
  };
  return Variant;
};