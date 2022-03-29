import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [thought, setThought] = useState('');

  const handleTextChange = ({ target }) => {
    setThought(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (thought) {
      props.addThought({
        id: generateId(),
        text: thought,
        expiresAt: getNewExpirationTime(),
      });
      setThought('');
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={thought}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
