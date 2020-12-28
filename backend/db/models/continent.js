'use strict';
module.exports = (sequelize, DataTypes) => {
  const Continent = sequelize.define('Continent', {
    continentName: DataTypes.STRING
  }, {});
  Continent.associate = function(models) {
    Continent.hasMany(models.Post, { foreignKey: 'continentId' })
  };
  return Continent;
};