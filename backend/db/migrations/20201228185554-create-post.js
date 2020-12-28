'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shopId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Shops" }
      },
      continentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Continents" }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      body: {
        type: Sequelize.TEXT
      },
      awsUrl: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};