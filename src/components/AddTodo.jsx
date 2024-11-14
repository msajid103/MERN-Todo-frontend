// AddTodo.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleAddTodo = async () => {
        await axios.post('http://localhost:5000/api/todos', { title, description });
        navigate('/todos');
    };

    return (
        <div className="h-screen w-full bg-gray-900 flex flex-col items-center py-10">
            <h2 className="text-4xl text-teal-400 font-bold mb-4">Add New ToDo</h2>
            <div className="w-3/4 max-w-lg bg-gray-800 rounded-lg p-6">
                <div className="flex flex-col text-gray-400 mb-4">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="rounded-lg bg-gray-700 mt-2 p-2"
                        placeholder="Enter title"
                    />
                </div>
                <div className="flex flex-col text-gray-400 mb-4">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="rounded-lg bg-gray-700 mt-2 p-2"
                        placeholder="Enter description"
                    />
                </div>
                <button
                    onClick={handleAddTodo}
                    className="w-full bg-teal-500 py-2 rounded-lg text-white font-semibold"
                >
                    Add ToDo
                </button>
            </div>
        </div>
    );
}
