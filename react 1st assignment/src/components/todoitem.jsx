import { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between mb-2 border p-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            className="border px-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleEdit} className="text-green-600">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-yellow-600">Edit</button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-red-600">Delete</button>
      </div>
    </div>
  );
};

export default ToDoItem;
