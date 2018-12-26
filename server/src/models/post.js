module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post',
        {
            content: DataTypes.TEXT
        },
        {}
    );
    Post.associate = function(models) {
        // associations can be defined here
    };
    return Post;
};
