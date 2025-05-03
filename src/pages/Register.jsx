import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    let result = await fetch(
    'http://localhost:5000/register', {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
      
    const data = await result.json();
    console.log(result.status);

    if(result.status === 201) {
      alert("Data saved successfully!");
      navigate('/dash/home_');
    } else if(result.status === 409) { 
      alert(data.message);
    } else {
      alert("Something went wrong X(");
    }
  }

  return (
    <div className="bg-green-500 h-screen flex flex-col justify-center items-center">
      <main className="flex justify-center items-center w-full h-[70%] pb-8">
        <div className="bg-green-300 shadow-lg p-12 rounded-2xl w-full max-w-lg h-[730px]">
        <h1 className="text-4xl font-extrabold text-center text-green-900 drop-shadow mt-6 mb-16">Register</h1>

        {/* Contenedor del formulario con fondo más oscuro y sombra */}
          <form onSubmit={handleRegister} className="w-full">
          <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
              <input
                type="text"
                id="name"         
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
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
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                id="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Repeat Password</label>
              <input
                type="password"
                id="password2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-start mb-8">
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
            <div className="mt-5 flex items-center space-x-2 justify-center">
            <p className="font-medium"> Do you already have and account?</p>
            <Link to="/login" class="block py-2 px-3 text-blue-800 hover:underline  rounded-sm md:p-0">Log in</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Register;