import React from 'react';
import ReactDOM from 'react-dom';
   
   const toDoList = (
        <ol>
            <li>Learn React</li>
            <li>Become a Developer</li>
        </ol>
    );


ReactDOM.render(
    toDoList, 
    document.getElementById('root')
);