'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ParksLists', [
        {
          userId:1,
          parksId:1,
          visited: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:2,
          parksId:1,
          visited: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:1,
          parksId:2,
          visited: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:2,
          parksId:3,
          visited: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ParksLists', null, {});
  }
};
