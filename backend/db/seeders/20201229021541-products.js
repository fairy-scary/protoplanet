'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        shopId: 8 ,
        postId: 19,
        productName: "Red Gnome",
        description: "Mostly red in colors with slight variations. You get a special lil' guy!",
        price: 50.00,
        slideNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 8 ,
        postId: 20,
        productName: "Statement Necklaces",
        description: "Each is unique and handmade",
        price: 30.00,
        slideNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 8 ,
        postId: 21,
        productName: "Handmade Iron Gate",
        description: "As pictured with slight handmade variations.",
        price: 100.00,
        slideNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 9 ,
        postId: 22,
        productName: "Single Oven Mitt",
        description: "Patterns as pictured with slight handmade variations.",
        price: 18.00,
        slideNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 9 ,
        postId: 23,
        productName: "Swedish Cinnamon Rolls",
        description: "Package of 6",
        price: 12.00,
        slideNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 9 ,
        postId: 24,
        productName: "Single Layer Cake",
        description: "All butter cake recipe with whipped buttercream and fondant",
        price: 45.00,
        slideNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 10 ,
        postId: 25,
        productName: "Mermaid Smoothie Kit",
        description: "Enough for 4 smoothies",
        price: 20.00,
        slideNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 10 ,
        postId: 26,
        productName: "Crystal Chunk",
        description: "Weighs approximatley 5 oz.",
        price: 10.00,
        slideNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shopId: 10 ,
        postId: 27,
        productName: "Medium Gnome",
        description: "One ceramic gnome, 6 inches tall",
        price: 16.00,
        slideNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Products', {
      shopId: { [Op.in]: [2, 3, 4] }
    }, {});
  }
};
