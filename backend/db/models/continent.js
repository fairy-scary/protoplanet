'use strict';
module.exports = (sequelize, DataTypes) => {
  const Continent = sequelize.define('Continent', {
    continentName: DataTypes.STRING
  }, {});
  Continent.associate = function(models) {
    // associations can be defined here
  };
  return Continent;
};