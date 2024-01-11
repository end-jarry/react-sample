import React from 'react';

function TodoListItem({ todo, onDelete, updateTodo }) {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggle = () => {
    updateTodo(todo.id);
  };

  const handleItemClick = () => {
    updateTodo(todo.id);
  };

  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleItemClick}>
        <input
          type='checkbox'
          checked={todo.active}
          onChange={handleToggle}
          style={{ marginRight: '10px' }}
        />
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      </div>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}

export default TodoListItem;
