import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='제목'
        value={title}
        onChange={handleTitleChange}
      />
      <button type='submit'>추가</button>
    </form>
  );
}

export default AddTodo;
