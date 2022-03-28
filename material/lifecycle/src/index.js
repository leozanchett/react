import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        
      </div>
    );
  }

  /*  
    The order is
      1 - The constructor
      2 - render()
      3 - componentDidMount()
  */

  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, oneSecond);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('app')
);
