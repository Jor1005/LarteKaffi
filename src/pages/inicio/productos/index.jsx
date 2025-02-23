import React from "react";
import "./productos.css"

function Productos() {
    return (
      <section id="productos" className="productos">
        <h1>Categorias</h1>
        <div className="categorias">
          <div className="latteart" > <img src="img/latte.png" alt="Latte Art" />
          <p>Latte Art</p> 
          </div>
          <div className="balanzas"> Balanzas</div>
          <div className="expressobar">Expresso Bar</div>
          <div className="hervidores">Hervidores inteligente</div>
          <div className="brewbar">Brew Bar</div>
        </div>
      </section>
    );
  }
  
  export default Productos;
  