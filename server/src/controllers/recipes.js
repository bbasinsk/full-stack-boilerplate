import { Recipe } from '../models';

const Recipes = {
  list: (req, res) => {
    Recipe.all()
      .then(recipes => res.status(200).send(recipes))
      .catch(error => res.status(400).send(error));
  }
};

export default Recipes;
