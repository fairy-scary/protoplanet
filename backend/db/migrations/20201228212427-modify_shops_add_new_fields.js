'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Shops', // table name
        'awsUrl', // new field name
        {
          type: Sequelize.TEXT,
          allowNull: true,
          unique: true,
        }
      )
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Shops', 'awsUrl'),
    ]);
  },
};