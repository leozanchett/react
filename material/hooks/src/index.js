import React, { useState } from "react";
import ReactDOM from 'react-dom';
import EditProfile from "./objects-in-state";

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

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose', 'Tomato'];

function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState('Tomato');
  const divStyle = {
    backgroundColor: color
  };

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      {colorNames.map((colorName, index) => (
        <button 
          key={index}
          onClick={() => setColor(colorName)}>
          {colorName}</button>
      ))}
    </div>
  );
}

ReactDOM.render(
  <EditProfile/>,
  //<App />,
  //<NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);