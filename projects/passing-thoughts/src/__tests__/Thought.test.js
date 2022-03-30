import React from 'react';
import { Thought } from '../Thought.js';

// import render and screen here
import { render, screen } from '@testing-library/react';
import  '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
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

test('Should have header text Passing Thoughts', () => {
   render(<App />);
   // Test App header text here
   const header = screen.getByText("Passing Thoughts");
   expect(header).toHaveTextContent("Passing Thoughts");
});

test('Should have button enabled', () => {
   render(<Thought
      thought={{ text: 'Hello' }}
      removeThought={() => { }} />)
   // Test status of button here
   const button = screen.getByRole("button");
   expect(button).toBeEnabled();
   //expect(button).toBeInDocument();
});

test('"Oreos are delicious" should not appear' , () => {
   render(<App/>);
   // Add testing logic here
   const emptyThought = screen.queryByText("Oreos are delicious");
   // check if the result of your query is null
   expect(emptyThought).toBeNull();
 });

test('Should show new thought to be present', async () => {
   render(<App />);

   // The code below mimics a user posting a thought with text 'Oreos are delicious'
   // get input element with input a thought
   const addThoughtInput = screen.getByPlaceholderText("What's on your mind?");
   // get button element with button submit to add a thought
   const addThoughtButton = screen.getByRole("button", { name: "Add" });
   userEvent.type(addThoughtInput, "Oreos are delicious");
   userEvent.click(addThoughtButton)

   //method with a call to the appropriate query variant such that the test waits for the element with the text 'Oreos are delicious' to appear.
   const thought = await screen.findByText('Oreos are delicious');
   expect(thought).toBeInTheDocument();
});