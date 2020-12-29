'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Favorites', [
      {
        userId: 10,
        shopId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        shopId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { userId: 11,
        shopId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { userId: 11,
        shopId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { userId: 12,
        shopId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Favorites', {
      userId: { [Op.in]: [7, 8, 9] }
    }, {});
  }
};
