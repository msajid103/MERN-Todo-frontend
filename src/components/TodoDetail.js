import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/TodoDetails.css'; // Optional: Add custom styles for the details page

const TodoDetail = () => {
  const { id } = useParams(); // Get the dynamic id from the URL
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the todo details from the backend
    const fetchTodo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/todos/${id}`);
        if (!response.ok) {
          throw new Error('Todo not found');
        }
        const data = await response.json();
        setTodo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching todo details:', error);
        setTodo(null);
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  const handleGoBack = () => {
    navigate('/todos'); // Navigate back to the Todo List page
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!todo) {
    return <p>Todo not found.</p>;
  }

  return (
    <div className="todo-details-container">
      <h2>Todo Details</h2>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleGoBack} className="back-button">Back to List</button>
    </div>
  );
};

export default TodoDetail;
