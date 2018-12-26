module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            username: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            },
            password: DataTypes.TEXT,
            facebookId: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            }
        },
        {}
    );
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
