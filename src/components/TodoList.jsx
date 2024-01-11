import React from 'react';
import { DUMMY_LIST } from '../constant';
import TodoListItem from './TodoListItem';

function TodoList() {
  return (
    <ul>
      {DUMMY_LIST.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
