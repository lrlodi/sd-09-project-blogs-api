module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    postId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: DataTypes.INTEGER,
  },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'PostsCategories',
    });

  PostsCategories.associate = (models) => {
    PostsCategories.belongsTo(models.Categories,
      { foreignKey: 'categoryId', as: 'Categories' });
  };

  return PostsCategories;
};