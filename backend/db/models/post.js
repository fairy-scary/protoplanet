'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    shopId: DataTypes.INTEGER,
    continentId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    awsUrl: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    Post.hasMany(models.Product, { foreignKey: 'postId'});
    Post.belongsTo(models.Shop, { foreignKey: 'shopId'});
    Post.belongsTo(models.Continent, { foreignKey: 'continentId'});
  };
  return Post;
};