import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/TodoDetails.css'; 

const TodoDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchTodo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/todos/${id}`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('token')
          }
        });
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
    navigate('/todos');
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
