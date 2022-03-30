import React from 'react';
import { Thought } from '../Thought.js';

// import render and screen here
import { render, screen } from '@testing-library/react';
import  '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react'; 

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

test('Clicking the x button should remove a thought' , async () => {
   render(<App/>);
 
   // Since there are multiple '×' buttons, we are using the .getAllByText() method which returns an array. We are then extracting the first button from the array which belongs to the Thought with text 'This is a place for your passing thoughts.'
   const button = screen.getAllByText('×')[0]
   
   // TODO: Mimic clicking on the button
   userEvent.click(button);
 
   // We grab the thought again. It should be null after we clicked the '×' button using userEvent.
   const removedThought = screen.queryByText('This is a place for your passing thoughts.')
   expect(removedThought).toBeNull()
 });

 test('Should add a new thought' , () => {
   render(<App/>);
   // Grab the text box and the submit button.
   const input = screen.getByRole('textbox');
   const submit = screen.getByText('Add');
   
   // TODO: Add testing logic to simulate user interactions here
   userEvent.type(input, 'Did I forget my keys?');
   userEvent.click(submit);
   // Assert that the thought appears
   const thought = screen.getByText('Did I forget my keys?');
   expect(thought).toBeInTheDocument();
 });


 test('Should show Thought to be removed' , async () => {
   render(<App/>);
   const input = screen.getByPlaceholderText('What\'s on your mind?');
   const submit = screen.getByText('Add');
   userEvent.type(input, 'I have to call my mom.');

   await waitFor(() => {
      userEvent.click(submit)
      const thought = screen.queryByText('I have to call my mom.');
      expect(thought).toBeNull();
   });
 });