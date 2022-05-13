'use strict';
module.exports = (sequelize, DataTypes) => {
  const Park = sequelize.define('Park', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    smallDogArea: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    doggieWaterFountain: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    fullyFenced: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    parkSize: {
      allowNull: false,
      type: DataTypes.NUMERIC(8,2)
    },
    parkingLot: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    wasteDisposal: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    agilityEquipment: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    shaded: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {});
  Park.associate = function(models) {
    Park.hasMany(models.Review, {foreignKey: 'parksId'})
    Park.hasMany(models.ParksList, {foreignKey: 'parksId'})
    Park.belongsToMany(models.User, {through: 'ParksList',
      foreignKey: 'parksId',
      otherKey: 'userId'})
  };
  return Park;
};
