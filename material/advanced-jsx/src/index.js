import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  if(e.target.alt === 'kitty'){
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  } else {
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg');
    e.target.setAttribute('alt', 'kitty');
  }
  
}

const kitty = (
	<img 
        onClick={makeDoggy}
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty"
        width="500"
        height="400"
    />
);

ReactDOM.render(kitty, document.getElementById('root'));