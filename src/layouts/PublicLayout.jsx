import { Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <div>
      <header>
        <h1>Mi Sitio Público</h1>
      </header>
      <main>
        <Outlet /> {/* Renderiza las rutas hijas */}
      </main>
    </div>
  );
}

export default PublicLayout;