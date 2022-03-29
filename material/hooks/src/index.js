import React, { useState } from "react";
import ReactDOM from 'react-dom';
import AppFunction from "./appFunctions";
import Counter from "./clean-up-effects";
import Timer from "./control-when-effects-are-called";
import Forecast from "./effect-hooks-fetch-data";
import EditProfile from "./objects-in-state";
import SocialNetwork from "./separate-hook-for-separate-effects";

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
  < SocialNetwork />,
  // < Forecast />,
  //<Timer/>,
  //<Counter/>,
  //<AppFunction />,
  //<EditProfile/>,
  //<App />,
  //<NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);