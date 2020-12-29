'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'mrmouse@user.io',
        username: 'mr_mouse',
        hashedPassword: bcrypt.hashSync('password'),
        shopId: 2
      },
      {
        email: faker.internet.email(),
        username: 'amy_sedaris',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        shopId: 3
      },
      {
        email: faker.internet.email(),
        username: 'leslie_hall',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        shopId: 4
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['mr_mouse', 'amy_sedaris', 'leslie_hall'] }
    }, {});
  }
};
