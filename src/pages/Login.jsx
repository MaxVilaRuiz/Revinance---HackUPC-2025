import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import { pass } from 'three/tsl';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  useEffect(() => {
    let singedOut = localStorage.getItem('singout');
    if(singedOut) {
      const msg_so = document.getElementById('msg-so');
      msg_so.classList.remove('hidden');
      setTimeout(() => msg_so.classList.add('hidden'), 5000);
      localStorage.removeItem('singout');
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await fetch(
    'http://localhost:5000/login', {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
      
    const data = await result.json();
    console.log(result.status);

    if(result.status === 201) {
      alert("Data manipuled correctly!");
      navigate('/dash/home_');
    } else if(result.status === 409) { 
      alert(data.message);
    } else if(result.status === 400) {
      alert(data.message);
    } else {
      alert("Something went wrong X(");
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 to-black h-screen flex flex-col">
      <div className="text-left p-8">
        <Link to="/" className="font-semibold text-[2rem] text-white">Revinance</Link>
      </div>

      <div id='msg-so' className="hidden shadow-2xl shadow-black self-center w-[500px] text-center rounded-3xl bg-green-400 text-black px-4 py-2 mb-5">
      ✓ You have been logged out successfully.
      </div>

      <main className="flex justify-center items-center w-full h-[70%] pb-8">
        <div className="bg-white border border-gray-100 shadow-2xl shadow-black p-12 rounded-3xl w-full max-w-lg h-[550px] overflow-visible">
          {/* Título dentro del contenedor verde */}
          <h1 className="text-4xl font-extrabold text-black drop-shadow text-center mt-5 mb-20">Log In</h1>
          
          <form onSubmit={handleLogin} className="w-full">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <div className="mt-5 flex items-center space-x-2 justify-center">
            <p className="font-medium"> Don't have an account?</p>
            <Link to="/register" class="block py-2 px-3 text-blue-800 hover:underline  rounded-sm md:p-0">Sign up</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
