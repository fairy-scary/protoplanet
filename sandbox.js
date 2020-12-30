// 'use strict';
// const faker = require('faker');
// const bcrypt = require('bcryptjs');

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Users', [
//       {
//         email: 'mrmouse@user.io',
//         username: 'mr_mouse',
//         hashedPassword: bcrypt.hashSync('password'),
//         shopId: 1
//       },
//       {
//         email: faker.internet.email(),
//         username: 'amy_sedaris',
//         hashedPassword: bcrypt.hashSync(faker.internet.password()),
//         shopId: 2
//       },
//       {
//         email: faker.internet.email(),
//         username: 'leslie_hall',
//         hashedPassword: bcrypt.hashSync(faker.internet.password()),
//         shopId: 3
//       },
//     ], {});
//   },

//   down: (queryInterface, Sequelize) => {
//     const Op = Sequelize.Op;
//     return queryInterface.bulkDelete('Users', {
//       username: { [Op.in]: ['mr_mouse', 'amy_sedaris', 'leslie_hall'] }
//     }, {});
//   }
// };

// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Shops', [{
//       {
        
//       }

//     }], {});
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('', [
      {

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('', {
      shopId: { [Op.in]: [2, 3, 4] }
    }, {});
  }
};


//       Example:
//       return queryInterface.bulkInsert('People', [{
//         name: 'John Doe',
//         isBetaMember: false
//       }], {});
//     */
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkDelete('People', null, {});
//     */
//   }
// };



// 'use strict';

// module.exports = {
//   up(queryInterface, Sequelize) {
//     return Promise.all([
//       queryInterface.addColumn(
//         'Users', // table name
//         'shopId', // new field name
//         {
//           type: Sequelize.INTEGER,
//           allowNull: true,
//           unique: true,
//         }
//       )
//     ]);
//   },

//   down(queryInterface, Sequelize) {
//     // logic for reverting the changes
//     return Promise.all([
//       queryInterface.removeColumn('Users', 'shopId'),
//     ]);
//   },
// };