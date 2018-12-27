import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => (
  <div>
    <h2>
      {recipe.id}. {recipe.title}
    </h2>
    <p>{recipe.description}</p>
  </div>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

export default Recipe;
