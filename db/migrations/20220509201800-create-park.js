'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Parks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      smallDogArea: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      doggieWaterFountain: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      fullyFenced: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      parkSize: {
        allowNull: false,
        type: Sequelize.NUMERIC(8,2)
      },
      parkingLot: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      wasteDisposal: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      agilityEquipment: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      shaded: {
        type: Sequelize.BOOLEAN,
        default: false
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
    return queryInterface.dropTable('Parks');
  }
};