export default (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      ingredients: DataTypes.JSON,
      steps: DataTypes.ARRAY(DataTypes.TEXT)
    },
    {}
  );
  // eslint-disable-next-line
  Recipe.associate = models => {
    // associations can be defined here
  };
  return Recipe;
};
