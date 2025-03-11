import React from "react";
import Nav from "../../componentes/nav";
import "./tienda.css";
function Tienda() {
  return (
    
    <section className="tienda">
      <Nav />
      <div className="tienda-container">
      <p></p>
      <h1>Productos</h1>
      <section className="category">
        <h2>Latte Art</h2>
        <div className="producto">Taza latera</div>
      </section>
      <section className="category">
        <h2>Balanzas</h2>
        <div className="producto">Taza latera</div>
      </section>
      <section className="category">
        <h2>Expresso Bar</h2>
        <div className="producto">Taza latera</div>
      </section>
      <section className="category">
        <h2>Hervidores Inteligentes</h2>
        <div className="producto">Taza latera</div>
      </section>
      <section className="category">
        <h2>Brew Bar</h2>
        <div className="producto">Taza latera</div>
      </section>
      </div>
    </section>
  );
}

export default Tienda;