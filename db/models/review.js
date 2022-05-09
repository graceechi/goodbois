'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    body: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    parksId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model : 'Parks', key: 'id'}
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model : 'Users', key: 'id'}
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};