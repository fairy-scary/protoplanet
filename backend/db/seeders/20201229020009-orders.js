'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        orderNumber: "1111-111111-1111",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderNumber: "2111-111111-1111",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderNumber: "3111-111111-1111",
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Orders', {
      userId: { [Op.in]: [9] }
    }, {});
  }
};