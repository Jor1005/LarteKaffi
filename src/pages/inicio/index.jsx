import React from "react";
import "./inicio.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Inicio() {
  const navigate = useNavigate();

  return (
    <>
    <Helmet>
        <title>Larte Kaffi</title>
        <meta
          name="description"
          content="Accesorios de café y barismo para perfeccionar tu arte y completar tu estación. Latte art, espresso y métodos de extracción."
        />
      </Helmet>
    <section className="inicio">
      <div className="imagenyslogans">
      <picture className="imagen">
        <img src="img/latera plateada sf.webp" alt="" />
      </picture>
      <div className="slogans">
        <h1 className="slogan1">Perfecciona tu arte,</h1>
        <h1 className="slogan2">completa tu estación.</h1>
      </div>
      </div>
      <div className="textoyboton">
        <div className="textos">
          <p className="texto1">Lleva el alma del café a tu hogar con</p>
          <p className="texto2">nuestros accesorios de calidad</p>
        </div>
        <button className="boton" onClick={() => navigate("/tienda")}>
          Productos
        </button>
      </div>
    </section>
    </>
  );
  
}

export default Inicio;
