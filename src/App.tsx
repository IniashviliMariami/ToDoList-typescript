import React, { useState } from 'react';
import { Todo } from './types';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Enter new to-do"
      />
      <button onClick={addTodo}>Add To-Do</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;

