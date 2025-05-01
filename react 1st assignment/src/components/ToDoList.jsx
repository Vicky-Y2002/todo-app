import ToDoItem from './componentsToDoItem';

const ToDoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};