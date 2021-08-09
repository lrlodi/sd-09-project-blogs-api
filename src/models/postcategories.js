module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategories',
  {}, { timestamps: false });

  PostCategory.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostCategory,
      foreignkey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategory,
      foreignkey: 'postId',
      otherKey: 'categoryId', 
    });
  };

  return PostCategory;
};