import React from "react";
import Nav from "../../componentes/nav";
import "./socios.css";
import { Helmet } from "react-helmet-async";

function Socios() {
  return (
    <>
    <Helmet>
        <title>Alianzas</title>
        <meta
          name="description"
          content="Nuestras Alianzas"
        />
      </Helmet>
    <section className="socios">
      <Nav />
      <h1 className="socios_title">Nuestros socios</h1>
      <div className="socios_container">
        <div className="socios_card">
          <img src="" alt="Socio" />
          <h2>Nombre del socio
            <p>Descripción del socio pero asi bien largo para ver hasta donde alcanza jaja </p>
          </h2>
        </div>
        <div className="socios_card">
          <img src="" alt="Socio" />
          <h2>Nombre del socio
            <p>Descripción del socio pero asi bien largo para ver hasta donde alcanza jaja </p>
          </h2>
        </div>
        <div className="socios_card">
          <img src="" alt="Socio" />
          <h2>Nombre del socio
            <p>Descripción del socio pero asi bien largo para ver hasta donde alcanza jaja </p>
          </h2>
        </div>
        <div className="socios_card">
          <img src="" alt="Socio" />
          <h2>Nombre del socio
            <p>Descripción del socio pero asi bien largo para ver hasta donde alcanza jaja </p>
          </h2>
        </div>
        <div className="socios_card">
          <img src="" alt="Socio" />
          <h2>Nombre del socio
            <p>Descripción del socio pero asi bien largo para ver hasta donde alcanza jaja </p>
          </h2>
        </div>
        <div className="socios_card">
          <img src="" alt="Socio" />
          <h2>Nombre del socio
            <p>Descripción del socio pero asi bien largo para ver hasta donde alcanza jaja </p>
          </h2>
        </div>
        
      </div>
    </section>
    </>
  );
}

export default Socios;
