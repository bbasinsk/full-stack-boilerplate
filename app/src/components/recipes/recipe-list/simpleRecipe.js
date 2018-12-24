import React from 'react';

class SimpleRecipe extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>
          {this.props.id}. {this.props.title}
        </h1>
        <h2>{this.props.description}</h2>
      </div>
    );
  }
}

export default SimpleRecipe;
