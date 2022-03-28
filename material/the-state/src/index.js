import React from 'react';
import ReactDOM from 'react-dom';
import { Toggle } from './setState';

class App extends React.Component {
  // constructor method begins here:
  constructor(props) {
    super(props);
    this.state = {
      title: 'Best app'
    }
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.title}
        </h1>
        <Toggle />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);


