import React from "react";
import Nav from "../../componentes/nav";
import "./blog.css"; // Estilos específicos de la tienda

function Blog() {
  return (
    <section className="blog">
      <Nav /> 
      <h1>Bienvenido a mi blog</h1>
      <p>Aquí puedes ver mi blog xd.</p>
    </section>
  );
}

export default Blog;