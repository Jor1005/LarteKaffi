import "./nav.css"
import { Link } from "react-router-dom";



function Nav(){
    
      return <header className="navbar">
        <div className="logo"> 
            <Link to="/">
            <img  src="img/logo.png" alt='logo'></img> 
            </Link>
        </div>
        <ul className="nav-links">
  
          <li>SOBRE NOSOTROS</li>
            <li><Link to="/tienda">PRODUCTOS</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/socios">SOCIOS</Link></li> 
        </ul>
        <div className="lupa">
          <img src="img/lupa 2.png" alt="lupa" />
        </div>
      </header>
      }

      export default Nav