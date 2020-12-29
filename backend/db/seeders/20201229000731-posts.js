'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        shopId: 8,
        continentId: 8,
        title: "Winter Buddies",
        body: "You've heard of Elf on the Shelf, but have you",
        awsUrl: "../../public/images/cottagedam1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 8,
        continentId: 12,
        title: "Shiny Pretty Vintage!",
        body: "Assorted handmade necklaces",
        awsUrl: "../../public/images/yesterway1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 8,
        continentId: 9,
        title: "Doorways to Morocco",
        body: "One of a kind 4ftx4ft outdoor garden gates.",
        awsUrl: "../../public/images/alchemis1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 9,
        continentId: 8,
        title: "Sexy Kitchsy People Holding Casseroles",
        body: "If these are NSFW then you should get a new job!",
        awsUrl: "../../public/images/cottagedam2.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 9,
        continentId: 10,
        title: "Bake it Off",
        body: "The original Swedish cinnamon bun. Definitley not what you're used to!",
        awsUrl: "../../public/images/liminaland1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 9,
        continentId: 10,
        title: "Sadly Just Dessert",
        body: "This cake, that cake, all the cake I make.",
        awsUrl: "../../public/images/liminaland1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 10,
        continentId: 11,
        title: "Magically Delicious",
        body: "Smoothie kits for people who like to instagram thier smoothies.",
        awsUrl: "../../public/images/bubblebopia1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 10,
        continentId: 14,
        title: "Sunshine Rocks",
        body: "An assortment of crystals including emerald, aura quartz, and citrine",
        awsUrl: "../../public/images/honeydoe1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 10,
        continentId: 13,
        title: "Flippin' Birds aren't Real",
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