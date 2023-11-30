// TodoList.js
import React, { useState } from 'react';
import './TodoList.css'; // Import the CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else if (newTodo.trim() !== '') {
      // Append the new to-do item to the end of the array
      setTodos([...todos, newTodo]);
    }
    setNewTodo('');
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setNewTodo(todos[index]);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {index === editIndex ? (
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="edit-input"
              />
            ) : (
              todo
            )}
            <div className="button-container">
              {index === editIndex ? (
                <button onClick={addTodo} className="save-button">
                  Save
                </button>
              ) : (
                <button onClick={() => startEditing(index)} className="edit-button">
                  Edit
                </button>
              )}
              <button onClick={() => removeTodo(index)} className="remove-button">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="add-todo-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="add-todo-input"
        />
        <button onClick={addTodo} className="add-todo-button">
          {editIndex !== null ? 'Save Changes' : 'Add Todo'}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
