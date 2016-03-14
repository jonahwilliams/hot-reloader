import React from 'react';
import ReactDOM from 'react-dom';

let render = () => {
  System.import('./containers/ListContainer')
    .then((ListContainer) => {
      ReactDOM.render(<ListContainer />, document.getElementById('app'));
    });
};
render();