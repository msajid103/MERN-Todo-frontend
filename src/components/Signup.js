import React from 'react';
import todoImg from '../assets/todo.jpg';

export default function Signup() {
    return (
        <div
            className="h-screen w-full bg-cover bg-center flex justify-center items-center"
            style={{
                backgroundImage: `url(${todoImg})`
            }}
        >
            <div className="bg-gray-800 bg-opacity-75 flex justify-center items-center w-full h-screen rounded-lg">
                <div className="max-w-[650px] w-full rounded-lg bg-gray-900 p-8">
                    <h2 className="text-4xl text-teal-400 font-bold text-center mb-6">Create an Account</h2>
                    <p className="text-gray-400 text-center mb-6">
                        Join us to manage your tasks effortlessly and stay organized!
                    </p>
                    <form>
                        <div className="flex flex-col text-gray-400 py-2">
                            <label>Username</label>
                            <input
                                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-teal-500 focus:bg-gray-800 focus:outline-none"
                                type="text"
                                placeholder="Choose a username"
                            />
                        </div>
                        <div className="flex flex-col text-gray-400 py-2">
                            <label>Email</label>
                            <input
                                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-teal-500 focus:bg-gray-800 focus:outline-none"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col text-gray-400 py-2">
                            <label>Password</label>
                            <input
                                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-teal-500 focus:bg-gray-800 focus:outline-none"
                                type="password"
                                placeholder="Create a password"
                            />
                        </div>
                        <div className="flex flex-col text-gray-400 py-2">
                            <label>Confirm Password</label>
                            <input
                                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-teal-500 focus:bg-gray-800 focus:outline-none"
                                type="password"
                                placeholder="Confirm your password"
                            />
                        </div>
                        <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
                            SIGN UP
                        </button>
                    </form>
                    <p className="text-gray-400 text-center">
                        Already have an account?{" "}
                        <a href="/login" className="text-teal-400 hover:underline">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
