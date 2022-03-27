import React from 'react';
import ReactDOM from 'react-dom';

import { background } from './background';
import { imgArrayAnimais, hide } from './animals';

const title = 'Animal is the future'; 
const animalFacts = (
    <div>
        { title !== '' && <h1>{title}</h1> }
        {background}
        <div className='animals'>
            {imgArrayAnimais()}
        </div>
        {console.log(hide)}
        { hide && <p id='fact'></p> }
   </div>
);


ReactDOM.render(
    animalFacts,
    document.getElementById('bindindex')
);