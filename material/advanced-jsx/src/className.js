import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';


const myDiv = (
  <div className="big">
     I AM A BIG DIV
  </div>
);

ReactDOM.render(
  myDiv ,
  document.getElementById('root')
);

