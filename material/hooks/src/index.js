import React, { useState } from "react";
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <ColorPicker />,
      <Toggle />,
    </div>
  )
}

const NewFriend = (props) => {
  return (
    <div>
      <img src={props.src} />
    </div>
  );
}

function Toggle() {
  const [toggle, setToggle] = useState('On');

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}

function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState('yellow');
  const divStyle = {
    backgroundColor: color
  };

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('blueviolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('cornflowerblue')}>
        CornflowerBlue
      </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  //<NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);