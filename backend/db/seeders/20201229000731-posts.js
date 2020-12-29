'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        shopId: 2,
        continentId: 1,
        title: "Holiday Gnomes",
        body: "You've heard of Elf on the Shelf, but have you",
        awsUrl: "../../public/images/cottagedam1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 2,
        continentId: 5,
        title: "Shiny Pretty!",
        body: "Assorted handmade necklaces",
        awsUrl: "../../public/images/yesterway1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 2,
        continentId: 2,
        title: "Handmade Iron Gate",
        body: "One of a kind 4ftx4ft outdoor garden gate.",
        awsUrl: "../../public/images/alchemis1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 3,
        continentId: 1,
        title: "Sexy Man Mitts",
        body: "If these are NSFW then you should get a new job!",
        awsUrl: "../../public/images/cottagedam2.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 3,
        continentId: 3,
        title: "Real Cinnamon Buns",
        body: "The original Swedish cinnamon bun. Definitley not what you're used to!",
        awsUrl: "../../public/images/liminaland1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 3,
        continentId: 3,
        title: "Cute Cakes",
        body: "They taste as good as they look!",
        awsUrl: "../../public/images/liminaland1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 4,
        continentId: 4,
        title: "Mermaid Smoothie Kit",
        body: "It's blue and magically delicious.",
        awsUrl: "../../public/images/bubblebopia1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 4,
        continentId: 7,
        title: "Bag o' Rocks",
        body: "An assortment of crystals including emerald, aura quartz, and citrine",
        awsUrl: "../../public/images/honeydoe1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 4,
        continentId: 6,
        title: "Bird-flippin' Gnomes",
        body: "Tell those slugs how you feel about them getting your stuff all slimey.",
        awsUrl: "../../public/images/voidend2.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Posts', {
      shopId: { [Op.in]: [2, 3, 4] }
    }, {});
  }
};