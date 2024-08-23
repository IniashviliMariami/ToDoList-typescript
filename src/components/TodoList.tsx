import React from 'react';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
