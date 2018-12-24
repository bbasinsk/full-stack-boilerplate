const appleCranCrumble = {
  title: 'Apple-Cranberry Crumble',
  description:
    "Original recipe is a twist on my Mom's version. Fast and easy dessert, great for fall season when apples are freshest and the cranberries come in. I have made it without the apples or using frozen cranberries. I enjoy it as a dessert and as a breakfast treat around the Thanks-Mas season. Loaded with antioxidants! I have also made a wheat-free version using nut flour. Serve plain or topped with ice cream, whipped cream, or a drizzle of heavy cream.",
  ingredients: {
    fresh_cranberries: '1 (12 ounce) package',
    apples: 2,
    raisins: '1/2 cup',
    walnuts: '1/4 cup',
    white_sugar: '1 1/4 cups',
    ground_cinnamon: null,
    flour: '1 cup',
    baking_powder: '1 tsp',
    salt: '1/4 tsp',
    egg: 1,
    butter: '1/4 cup'
  },
  steps: [
    'Preheat the oven to 375 degrees F (190 degrees C). Butter a 9x9-inch glass baking pan.',
    'Mix cranberries, apples, raisins, and walnuts gently in the baking pan. Sprinkle with 1/4 cup sugar and cinnamon.',
    'Combine remaining sugar with flour, baking powder, salt, egg, and butter in a medium bowl. Mix until crumbly. Spread topping over the apple mixture.',
    'Bake in the preheated oven until topping is golden and inside is bubbling, about 50 minutes. Remove from oven and let cool for 5 to 10 minutes.'
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};

module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    queryInterface.bulkInsert(
      'Recipes',
      [appleCranCrumble],
      {},
      { ingredients: { type: new Sequelize.JSON() } }
    ),
  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    queryInterface.bulkDelete('Recipes', null, {})
};
