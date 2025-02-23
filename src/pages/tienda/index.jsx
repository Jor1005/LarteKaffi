import React from "react";
import Nav from "../../componentes/nav";
import "./tienda.css"; // Estilos específicos de la tienda

function Tienda() {
  return (
    <section className="tienda">
      <Nav /> 
      <h1>Bienvenido a la Tienda</h1>
      <p>Aquí puedes ver nuestros productos.</p>
    </section>
  );
}

export default Tienda;