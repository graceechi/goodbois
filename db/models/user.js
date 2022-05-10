'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Review, {foreignKey: 'userId'})
    User.belongsToMany(models.Park, {through: 'ParksList',
  foreignKey: 'userId',
  otherKey: 'parksId'})
  };
  return User;
};
