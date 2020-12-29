'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Variants', [
      { productId: 11,
        option: "Green Flower",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { productId: 11,
        option: "Purple Geode",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Variants', {
      productId: { [Op.in]: [2] }
    }, {});
  }
};