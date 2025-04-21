import React from "react";
import "./categorias.css";

function Categorias() {
  return (
    <section id="productos" className="productos">
      <h1>CATEGORIAS</h1>
      <div className="categorias">
        <div className="categoria" id="latteart">
          <img src="img/latteart.jpg" alt="Latte Art" />
          <p>Latte Art</p>
        </div>
        <div className="categoria" id="balanza">
          <img src="img/latte.png" alt="Latte Art" />
          <p>Balanzas</p>
        </div>
        <div className="categoria" id="expresso">
          <img src="img/latte.png" alt="Latte Art" />
          <p>Expresso Bar</p>
        </div>
        <div className="categoria" id="hervidores">
          <img src="img/latte.png" alt="Latte Art" />
          <p>Hervidores Inteligentes</p>
        </div>
        <div className="categoria" id="brewbar">
          {" "}
          <img src="img/latte.png" alt="Latte Art" />
          <p>Brew Bar</p>
        </div>
      </div>
    </section>
  );
}

export default Categorias;
