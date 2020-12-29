'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Favorites', [
      {
        userId: 7,
        shopId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        shopId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { userId: 8,
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { userId: 8,
        shopId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { userId: 9,
        shopId: 2,
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
