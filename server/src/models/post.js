export default (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: DataTypes.TEXT
    },
    {}
  );
  // eslint-disable-next-line
  Post.associate = models => {
    // associations can be defined here
  };
  return Post;
};
