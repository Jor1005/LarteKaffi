import "./nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// esto es el desplegable para moviles, lo anoto porque la otravez me olvide que era esto jaja, porfa diego no me despidas//
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".side-bar") &&
        !event.target.closest(".open-sidebar-button")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="img/logo.png" alt="logo" />
        </Link>
      </div>

      <button className="open-sidebar-button" onClick={() => setMenuOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>

      <nav className={`side-bar ${menuOpen ? "active" : ""}`}>
        <button
          className="close-sidebar-button"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/sobre-nosotros" onClick={() => setMenuOpen(false)}>
              SOBRE NOSOTROS
            </Link>
          </li>
          <li>
            <Link to="/tienda" onClick={() => setMenuOpen(false)}>
              PRODUCTOS
            </Link>
            <ul className="droptop-menu" id="productos-droptop-menu">
                <Link to="/tienda#latte-art">Latte Art</Link>
                <Link to="/tienda#balanzas">Balanzas</Link>
                <Link to="/tienda#mde">Métodos de extracción</Link>
                <Link to="/tienda#molinos">Molinos</Link>
                <Link to="/tienda#limpieza">Limpieza y utiliarios</Link>
                <Link to="/tienda#extras">Extras</Link>
                <Link to="/tienda#espresso">Espresso</Link>
            </ul>
          </li>
          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              BLOG
            </Link>
          </li>
          {/* <li>
            <Link to="/socios" onClick={() => setMenuOpen(false)}>
              SOCIOS
            </Link>
          </li> */}
        </ul>
      </nav>

      <div className="lupa">
        <img src="img/lupa 2.png" alt="lupa" />
      </div>
    </header>
  );
}

export default Nav;
