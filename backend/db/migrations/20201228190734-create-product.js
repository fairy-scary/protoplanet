'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
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
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Posts" }
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: { model: "Orders" }
      },
      productName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      slideNumber: {
        type: Sequelize.INTEGER
      },
      vidTime: {
        type: Sequelize.STRING(5)
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
    return queryInterface.dropTable('Products');
  }
};