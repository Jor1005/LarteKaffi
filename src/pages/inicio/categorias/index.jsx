import React from "react";
import "./productos.css"

function Productos() {
    return (
      <section id="productos" className="productos">
        <h1>CATEGORIAS</h1>
        <div className="categorias">
          <div className="producto" id="latteart" > <img src="img/latte.png" alt="Latte Art" />
          <p>Latte Art</p> 
          </div>
          <div className="producto" id="balanza"><img src="img/latte.png" alt="Latte Art" /> Balanzas</div>
          <div className="producto" id="expresso"><img src="img/latte.png" alt="Latte Art" />Expresso Bar</div>
          <div className="producto" id="hervidores"><img src="img/latte.png" alt="Latte Art" />Hervidores inteligentes</div>
          <div className="producto" id="brewbar"> <img src="img/latte.png" alt="Latte Art" />Brew Bar</div>
        </div>
      </section>
    );
  }
  
  export default Productos;
  