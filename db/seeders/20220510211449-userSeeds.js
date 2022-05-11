'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      { fullName: "demo", email: "demo@gmail.com", hashedPassword: bcrypt.hashSync('Demo@1', 10), createdAt: new Date(), updatedAt: new Date() },
      { fullName: "ally", email: "ally@gmail.com", hashedPassword: bcrypt.hashSync('Ally@1', 10), createdAt: new Date(), updatedAt: new Date() },
      { fullName: "brianna", email: "brianna@gmail.com", hashedPassword: bcrypt.hashSync('Brianna@1', 10), createdAt: new Date(), updatedAt: new Date() },
      { fullName: "christina", email: "christina@gmail.com", hashedPassword: bcrypt.hashSync('Christina@1', 10), createdAt: new Date(), updatedAt: new Date() },
      { fullName: "daisy", email: "daisy@gmail.com", hashedPassword: bcrypt.hashSync('Daisy@1', 10), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
