import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation } from "react-router-dom";
import Nav from "../../componentes/nav";
import "./tienda.css";

function Tienda() {
  const [categorias, setCategorias] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => setCategorias(data))
      .catch((error) => console.error("Error al cargar productos", error));
  }, []);

  useEffect(() => {
    if (location.hash && categorias.length > 0) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location, categorias]);

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#2b2a28",
          width: "40px",
          height: "40px",
          textAlign: "center",
          borderRadius: "50%",
          fontSize: "20px",
          zIndex: 2,
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1090,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
   
    <section className="tienda">
      <Nav />
      <h1 className="title">Productos</h1>

      {/* Sección: Lo más vendido */}
      <section className="productosTop">
        <h1> ★ LO MÁS VENDIDO ★ </h1>
        <Slider {...settings} className="slider-productos">
          <Link className="productoTop" to="/tienda/producto/es-tr-3">
            <img src="img/tamperespec.jpg" alt="Tamper especial" />
          </Link>
          <Link className="productoTop" to="/tienda/producto/me-herv-6">
            <img src="img/hervidoraespec.jpg" alt="Hervidora especial" />
          </Link>
          <Link className="productoTop" to="/tienda/producto/me-herv-6">
            <img src="img/basehervidora.jpg" alt="Base hervidora" />
          </Link>
          <Link className="productoTop" to="/tienda/producto/450ml-2">
            <img src="img/ljespec450.jpg" alt="Latte jug 450ml" />
          </Link>
        </Slider>
      </section>

      {/* Secciones por categoría */}
      <div className="tienda-container">
        {categorias.map((categoria, i) => {
          const productos = categoria.productos || [];

          return (
            <section key={i} id={categoria.id} className="categoria-section">
              <h1 className="categoriasProductos">{categoria.categoria}</h1>

              {/* Caso: tiene subcategorías */}
              {productos.length > 0 && "productos" in productos[0] ? (
                productos.map((subcat, j) => (
                  <div key={j} className="subcategoria-section">
                    <h2>{subcat.categoria}</h2>
                    <div className="productos-grid">
                      {subcat.productos
                        .filter((p) => p.img && p.img.trim() !== "")
                        .map((producto) => (
                          <Link
                            to={`/tienda/producto/${producto.id}`}
                            key={producto.id}
                            className="producto-container"
                          >
                            <img
                              src={producto.img}
                              alt={producto.nombre}
                              loading="lazy"
                            />
                            <h2>{producto.nombre}</h2>
                          </Link>
                        ))}
                    </div>
                  </div>
                ))
              ) : (
                /* Caso: productos normales */
                <div className="productos-grid">
                  {productos
                    .filter((p) => p.img && p.img.trim() !== "")
                    .map((producto, j) => (
                      <Link
                        to={`/tienda/producto/${producto.id}`}
                        key={producto.id}
                        className="producto-container"
                      >
                        <img
                          src={producto.img}
                          alt={producto.nombre}
                          loading="lazy"
                        />
                        <h2>{producto.nombre}</h2>
                      </Link>
                    ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
    </>
  );
  
}

export default Tienda;
