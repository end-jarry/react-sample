function TodoListItem({ todo }) {
  return (
    <li>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>{todo.active ? '활성화' : '비활성화'}</p>
    </li>
  );
}

export default TodoListItem;
