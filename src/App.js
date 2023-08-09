import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            onDelete={deleteTodo}
          />
        ))}
      </div>
      
    </div>
  );
}

export default TodoApp;
