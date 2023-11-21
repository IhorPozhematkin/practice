const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
