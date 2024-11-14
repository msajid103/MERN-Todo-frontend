import React from 'react';
import { Link } from 'react-router-dom';

import todoImg from '../assets/todo.jpg';

export default function Login() {
    return (
        <div
            className="h-screen w-full bg-cover bg-center flex justify-center items-center"
            style={{
                backgroundImage: `url(${todoImg})`
            }}
        >
            <div className="bg-gray-800 bg-opacity-75 flex justify-center items-center w-full h-screen rounded-lg">
                <div className="max-w-[650px] w-full rounded-lg bg-gray-900 p-8">
                    <h2 className="text-4xl text-teal-400 font-bold text-center mb-6">Welcome Back!</h2>
                    <p className="text-gray-400 text-center mb-6">
                        Please log in to access your tasks and stay productive.
                    </p>
                    <form>
                        <div className="flex flex-col text-gray-400 py-2">
                            <label>Username</label>
                            <input
                                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-teal-500 focus:bg-gray-800 focus:outline-none"
                                type="text"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="flex flex-col text-gray-400 py-2">
                            <label>Password</label>
                            <input
                                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-teal-500 focus:bg-gray-800 focus:outline-none"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex justify-between text-gray-400 py-2">
                            <p className="flex items-center">
                                <input className="mr-2" type="checkbox" /> Remember Me
                            </p>
                            <p className="hover:text-teal-400 cursor-pointer">Forgot Password?</p>
                        </div>
                        <Link to="/todos">
                            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
                                SIGN IN
                            </button>
                        </Link>
                    </form>
                    <p className="text-gray-400 text-center">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-teal-400 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
