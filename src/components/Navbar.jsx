import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <Link
        to="/"
        className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
      >
        Inicio
      </Link>

      <Link
        to="/quienes-somos"
        className={
          location.pathname === '/quienes-somos'
            ? 'nav-link active'
            : 'nav-link'
        }
      >
        Quiénes somos
      </Link>

      <Link
        to="/contacto"
        className={
          location.pathname === '/contacto'
            ? 'nav-link active'
            : 'nav-link'
        }
      >
        Contáctanos
      </Link>
    </nav>
  );
}

export default Navbar;