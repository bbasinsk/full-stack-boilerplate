import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.dispose(() => {
    // module is about to be replaced
  });

  module.hot.accept(() => {
    // module or one of its dependencies was just updated
  });
}
