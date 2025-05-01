import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

  const toggleComplete = (id) =>
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));

  const editTodo = (id, newText) =>
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));

  return (
    <div className="p-6 max-w-md mx-auto">
      <Header />
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 ml-2">Add</button>
      </div>
      <ToDoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo} />
    </div>
  );
}

export default App;
