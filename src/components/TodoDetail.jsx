// src/components/TodoDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function TodoDetail() {
    const location = useLocation();
    const { todo } = location.state;
   
    const formattedDateTime = todo.createdAt
        ? new Date(todo.createdAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true, 
        })
        : 'Unknown date and time';

    return (
        <div className="h-screen w-full bg-gray-900 flex flex-col items-center py-10">
            <h2 className="text-4xl text-teal-400 font-bold mb-4">{todo.title}</h2>
            <div className="w-3/4 max-w-lg bg-gray-800 rounded-lg p-6 text-gray-300">
                <p className="text-lg mb-4">{todo.description}</p>
                <p className="text-sm text-gray-500">Created At: {formattedDateTime}</p>

            </div>
        </div>
    );
}
