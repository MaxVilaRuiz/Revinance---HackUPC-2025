import { Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <main>
      <Outlet /> {/* Renderiza las rutas hijas */}
    </main>
  );
}

export default PublicLayout;