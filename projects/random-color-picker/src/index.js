import React from 'react';
import ReactDOM from 'react-dom';
import { Random } from './random';


class App extends React.Component {
  render() {
    return (
      <div>
        <Random />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);