'use strict';
module.exports = (sequelize, DataTypes) => {
  const Variant = sequelize.define('Variant', {
    option: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {});
  Variant.associate = function(models) {
    Variant.belongsTo(models.Product, { foreignKey: 'productId' });
  };
  return Variant;
};