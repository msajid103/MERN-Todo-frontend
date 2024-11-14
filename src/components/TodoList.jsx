// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/todos');
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        fetchTodos();
    }, []);

    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/todos/${id}`, {
                method: 'DELETE',
            });
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="h-screen w-full bg-gray-900 flex flex-col items-center py-10">
            <h2 className="text-4xl text-teal-400 font-bold mb-4">ToDo List</h2>
            <button
                onClick={() => navigate('/add-todo')}
                className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded mb-5"
            >
                Add New ToDo
            </button>
            <ul className="w-3/4 max-w-lg bg-gray-800 rounded-lg p-4">
                {todos.map(todo => (
                    <li key={todo._id} className="flex justify-between items-center p-2 border-b border-gray-700">
                        <Link
                            to={{
                                pathname: `/todos/${todo._id}`,
                            }}
                            state={{ todo }} 
                            className="text-teal-400 hover:underline"
                        >
                            {todo.title}
                        </Link>
                        <button
                            onClick={() => deleteTodo(todo._id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
