import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Home() {
  return (
    <div>
      <main>
        <h1 className="text-[5rem] font-bold">Hello world</h1>
      </main>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Home;