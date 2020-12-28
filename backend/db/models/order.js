'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderNumber: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.Product, { foreignKey: 'orderId'});
    Order.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Order;
};