import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <main>
        <h1 className="text-[5rem] font-bold">Hello world</h1>
      </main>
      <Link to="/login">Hello</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Home;