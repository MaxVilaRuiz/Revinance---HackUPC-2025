import React from 'react';
import '../styles/App.css';
import '../styles/Home.css'

function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 className='hola'>Bienvenido a mi sitio web</h1>
      <p>Esta es una página de inicio creada con React y JSX.</p>
      <button onClick={() => alert('¡Haz hecho clic!')}>Haz clic aquí</button>
    </main>
  );
}

export default Home;