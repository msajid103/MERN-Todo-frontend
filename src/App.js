import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoDetail from './components/TodoDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/todos" element={<TodoList />} />
                <Route path="/add-todo" element={<AddTodo />} />
                <Route path="/todos/:id" element={<TodoDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
