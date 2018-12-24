import React, { Component } from 'react';
import Recipe from './simpleRecipe';

import { simpleStore } from '../../../models/RecipeStore';

class App extends Component {
  render() {
    const { id, title, description } = simpleStore;
    return (
      <div>
        <Recipe id={id} title={title} description={description} />
      </div>
    );
  }
}

export default App;
