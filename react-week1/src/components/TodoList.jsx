import { useState } from 'react';
import ReusableButton from './ReusableButton';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-list">
      <h2>Todo List App</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <ReusableButton label="Add Todo" onClick={addTodo} color="green" />
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <ReusableButton label="Toggle Complete" onClick={() => toggleComplete(todo.id)} color="blue" />
            <ReusableButton label="Delete" onClick={() => deleteTodo(todo.id)} color="red" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
