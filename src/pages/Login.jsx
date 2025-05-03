import React, { use, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Login() {
  useEffect(() => {
    let singedOut = localStorage.getItem('singout');
    if(singedOut) {
      const msg_so = document.getElementById('msg-so');
      msg_so.classList.remove('hidden');
      setTimeout(() => msg_so.classList.add('hidden'), 5000);
      localStorage.removeItem('singout');
    }
  });

  return (
    <div className="bg-green-500 h-screen flex flex-col justify-center items-center">
      <div id='msg-so' className="hidden w-[500px] text-center rounded-lg bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-5">
      ✓ You have been logged out successfully.
      </div>

      <main className="flex justify-center items-center w-full h-[70%] pb-8">
        <div className="bg-green-300 shadow-lg p-12 rounded-2xl w-full max-w-lg h-[550px]">
          {/* Título dentro del contenedor verde */}
          <h1 className="text-4xl font-extrabold text-green-900 drop-shadow text-center mt-5 mb-20">Log In</h1>
          
          <form className="w-full">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            {/* <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
            </div> */}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <div className="mt-5 flex items-center space-x-2 justify-center">
            <p className="font-medium"> Are you not registered?</p>
            <Link to="/register" class="block py-2 px-3 text-blue-800 hover:underline  rounded-sm md:p-0">Sign up</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
