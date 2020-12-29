'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductGuides', [
      {
        shopId: 8,
        mainText: "You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.Your item needs to have the receipt or proof of purchase.",
        shippingPolicy: "You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 9,
        mainText: "You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.Your item needs to have the receipt or proof of purchase.",
        shippingPolicy: "You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 10,
        mainText: "You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.Your item needs to have the receipt or proof of purchase.",
        shippingPolicy: "You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('ProductGuides', {
      shopId: { [Op.in]: [2, 3, 4] }
    }, {});
  }
};
