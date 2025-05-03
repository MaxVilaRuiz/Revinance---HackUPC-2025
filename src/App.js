import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import Home_ from './pages/dash/Home_';
import Services from './pages/dash/Services';
import Profile from './pages/dash/Profile';

import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>

        {/* RUTAS PÚBLICAS */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route path="/dash/home_" element={<Home_ />} />
            <Route path="/dash/services" element={<Services />} />
            <Route path="/dash/profile" element={<Profile />} />
        </Route>

        {/* RUTAS PRIVADAS
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}

      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;