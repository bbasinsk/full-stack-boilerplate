import React from 'react';
import RecipeItem from '../recipe-item/component';

import { onSnapshot } from 'mobx-state-tree';
import { store } from '../../../models/RecipeStore';

class RecipeList extends React.Component {
  componentDidMount() {
    onSnapshot(store, snapshot => {
      this.setState({ ...this.state });
    });
  }

  render() {
    const { recipeList, count, setCount, age } = this.props;

    return (
      <div>
        <h1>Recipe List</h1>
        <p>
          Count {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </p>
        <p>Age {age}</p>
        <ul>
          {recipeList.recipes.map((recipe, idx) => (
            <RecipeItem key={idx} recipe={recipe} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
