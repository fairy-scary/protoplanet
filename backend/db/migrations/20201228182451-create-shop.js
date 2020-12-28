'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
        unique: true
      },
      shopName: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      makerName: {
        allowNull: false,
        type: Sequelize.STRING(256),
        unique: true
      },
      shopBio: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shops');
  }
};