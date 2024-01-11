import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import AddTodo from './AddTodo';
import { DUMMY_LIST } from '../constant';

function TodoList() {
  const [todos, setTodos] = useState(DUMMY_LIST);

  const addTodo = (title) => {
    setTodos((prev) => prev.concat({ id: Date.now(), title, active: false }));
  };

  const updateTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, active: !todo.active } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
