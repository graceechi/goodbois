'use strict';
module.exports = (sequelize, DataTypes) => {
  const ParksList = sequelize.define('ParksList', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id'}
    },
    parksId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id'}
    },
    visited: {
      default: false,
      type: DataTypes.BOOLEAN
    }
  }, {});
  ParksList.associate = function(models) {
    // associations can be defined here
  };
  return ParksList;
};