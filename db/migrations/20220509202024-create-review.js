'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      parksId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model : 'Parks', key: 'id'}
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model : 'Users', key: 'id'}
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
    return queryInterface.dropTable('Reviews');
  }
};