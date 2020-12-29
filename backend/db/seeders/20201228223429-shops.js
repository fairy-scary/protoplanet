
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shops', [
      {
        userId: 10,
        shopName: "Magic Mouse House",
        makerName: "Mr. Mouse",
        shopBio: "Welcome to Mr Mouse's Magic Mouse House!",
        awsUrl: "../../public/images/mrmouse.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 11,
        shopName: "Strangers with Candy",
        makerName: "Amy Sedaris",
        shopBio: "You probably have only seen me on The Mandalorian, but I'm also really into crafts!",
        awsUrl: "../../public/images/amy.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 12,
        shopName: "Craft Talk",
        makerName: "Leslie Hall",
        shopBio: "I make crafts that you desire. All you want to do is acquire",
        awsUrl: "../../public/images/leslie.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Shops', {
      userId: { [Op.in]: [7, 8, 9] }
    }, {});
  }
};
