import React from 'react';
import { Thought } from '../Thought.js';

// import render and screen here
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import app
import { App } from '../App.js';

test('Display the Thought component', () => {
   
   // Pass to Thought component as thought prop
   const thought = { text: "learn react testing library" }
   // Add your testing logic here
   render(<Thought thought={thought} removeThought={() => { }} />);
   //add scren debug here
   expect(screen.getByText(thought.text)).toBeInTheDocument(); 
});

test('Should have header text Passing Thoughts',() => {
   render(<App />);
   // Test App header text here
   const header = screen.getByText("Passing Thoughts");
   expect(header).toHaveTextContent("Passing Thoughts");
 });

 test('Should have button enabled' , () => {
   render(<Thought 
   thought={{text:'Hello'}}
   removeThought={()=>{}}/>)
   // Test status of button here
   const button = screen.getByRole("button");
   expect(button).toBeEnabled();
   //expect(button).toBeInDocument();
 });