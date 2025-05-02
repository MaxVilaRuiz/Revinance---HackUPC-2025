import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', background: '#eee' }}>
        <ul>
          <li><a href="/dashboard">Inicio</a></li>
        </ul>
      </aside>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default PrivateLayout;