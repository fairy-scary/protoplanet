'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Continents', [
    {
      continentName: "🌳 Cottagedam 🌳",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      continentName: "💎 Alchemis 💎",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      continentName: "🌪️ Liminaland 🌪️",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      continentName: "🛼 Bubblebopia 🛼",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      continentName: "🕰️ Yesterway 🕰️",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      continentName: "🌑 Voidend 🌑",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      continentName: "🍯 Honeydoe 🍯",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    
  ], {});
},

down: (queryInterface, Sequelize) => {
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete('Continents', {})
}
};