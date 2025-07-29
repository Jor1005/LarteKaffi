import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import Nav from "../../componentes/nav";
import "./tienda.css";

function Tienda() {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div 
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#2b2a28",
          width: "50px",
          height: "50px",
          textAlign: "center",
          borderRadius: "10%",
          fontSize: "20%",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then(response => response.json())
      .then(data => setCategorias(data))
      .catch(error => console.error("Error al cargar productos", error));
  }, []);

  return (
    <section className="tienda">
      <Nav />
      <h1 className="title">Productos</h1>
      <div className="tienda-container">
        {categorias.map((categoria, i) => {
          const productos = categoria.productos;
          const customSettings = {
            dots: true,
            infinite: productos.length > 2,
            speed: 600,
            slidesToShow: Math.min(3, productos.length),
            slidesToScroll: 1,
            autoplay: false, //pero si quieres: productos.length > 2//
            autoplaySpeed: 2500,
            arrows: true,
            prevArrow: <Arrow />,
            nextArrow: <Arrow />,
            centerMode: productos.length > 1,
            centerPadding: "40px",
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: Math.min(2, productos.length) } },
              { breakpoint: 600, settings: { slidesToShow: 1 } },
            ]
          };

          return (
            <section key={i} className={`category_${i % 2 === 0 ? "a" : "b"}`}>
              <h2>{categoria.categoria}</h2>
              {productos.length > 0 ? (
                <Slider {...customSettings}>
                  {productos.map((producto, j) => (
                    <div key={j} className="producto-container">
                      <img src={producto.img} alt={producto.nombre} />
                      <p>{producto.nombre}</p>
                    </div>
                  ))}
                </Slider>
              ) : (
                <p>No hay productos disponibles.</p>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Tienda;
