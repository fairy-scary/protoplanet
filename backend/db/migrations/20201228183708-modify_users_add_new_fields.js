'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users', // table name
        'shopId', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          unique: true,
        }
      )
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Users', 'shopId'),
    ]);
  },
};