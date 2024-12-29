import "./nav.css"

function Nav(){
    
      return <header className="navbar">
        <div className="logo">
            <img src="/img/logo.png" alt='logo'></img>
        </div>
        <ul className="nav-links">
          <li>INICIO</li>
          <li>SOBRE NOSOTROS</li>
          <li>PRODUCTOS</li>
          <li>BLOG</li>
          <li>CONTACTO</li>
        </ul>
        <div className="lupa">
          <img src="/img/lupa 2.png" alt="lupa" />
        </div>
      </header>
      }

      export default Nav