import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TodoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ onLogout }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch todos from the backend API
  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Add a new todo
  const handleAddTodo = async () => {
    if (!title || !description) {
      alert('Both title and description are required!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        const newTodo = await response.json();
        setTodos([...todos, newTodo]);
        setTitle('');
        setDescription('');
      } else {
        alert('Failed to add todo.');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Edit a todo
  const handleEditTodo = (id) => {
    const todo = todos.find((todo) => todo._id === id);
    setTitle(todo.title);
    setDescription(todo.description);
    setEditId(id);
  };

  const handleUpdateTodo = async () => {
    if (!editId) return;

    try {
      const response = await fetch(`http://localhost:5000/todos/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        const updatedTodo = await response.json();
        setTodos(todos.map((todo) => (todo._id === editId ? updatedTodo : todo)));
        setTitle('');
        setDescription('');
        setEditId(null);
      } else {
        alert('Failed to update todo.');
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  // Delete a todo
  const handleDeleteTodo = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this todo?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTodos(todos.filter((todo) => todo._id !== id));
      } else {
        alert('Failed to delete todo.');
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleTitleClick = (id) => {
    navigate(`/todos/${id}`);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {editId ? (
          <button onClick={handleUpdateTodo} className="todo-button">
            Update
          </button>
        ) : (
          <button onClick={handleAddTodo} className="todo-button">
            Add Todo
          </button>
        )}
      </div>

      <table className="todo-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              <td
                onClick={() => handleTitleClick(todo._id)}
                style={{
                  cursor: 'pointer',
                  color: '#007BFF',
                  textDecoration: 'underline',
                }}
              >
                {todo.title}
              </td>
              <td>{todo.description}</td>
              <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => handleEditTodo(todo._id)}
                  className="edit-icon"
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDeleteTodo(todo._id)}
                  className="delete-icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default TodoList;
