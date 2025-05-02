import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Login() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <header className="pt-16 text-center">
        <h1 className="text-6xl font-extrabold text-black drop-shadow">Log In</h1>
      </header>

      <main className="flex justify-center items-center w-full h-[70%] pb-8">
        {/* Contenedor del formulario con fondo más oscuro y sombra */}
        <div className="bg-gray-300 shadow-lg p-10 rounded-xl w-full max-w-md">
          <form className="w-full">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;