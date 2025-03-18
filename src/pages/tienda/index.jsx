import React from "react";
import Nav from "../../componentes/nav";
import "./tienda.css";
function Tienda() {
  return (
    
    <section className="tienda">
      <Nav />
      <h1>Productos</h1>
      <div className="tienda-container">
      <section className="category">
        <h2>Latte Art</h2>
        <div className="producto-container">
          <div className="latera">Taza latera 1</div>
          <div className="latera">Taza latera 2</div>
          <div className="latera">Taza latera 3</div>
        </div>
      </section>
      <section className="category">
        <h2>Balanzas</h2>
        <div className="producto-container">
          <div className="Balanza">Balanza 1</div>
          <div className="Balanza">Balanza 2</div>
          <div className="Balanza">Balanza 3</div>
        </div>
      </section>
      <section className="category">
        <h2>Expresso Bar</h2>
        <div className="producto-container">
          <div className="Expresso">Expresso 1</div>
          <div className="Expresso">Expresso 2</div>
          <div className="Expresso">Expresso 3</div>
        </div>
      </section>
      <section className="category">
        <h2>Hervidores Inteligentes</h2>
        <div className="producto-container">
          <div className="Hervirdor">Hervidor 1</div>
          <div className="Hervirdor">Hervidor 2</div>
          <div className="Hervirdor">Hervidor 3</div>
        </div>
      </section>
      <section className="category">
        <h2>Brew Bar</h2>
        <div className="producto-container">
          <div className="Brew">Brew 1</div>
          <div className="Brew">Brew 2</div>
          <div className="Brew">Brew 3</div>
        </div>
      </section>
      </div>
    </section>
  );
}

export default Tienda;