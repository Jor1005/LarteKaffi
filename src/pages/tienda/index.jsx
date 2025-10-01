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
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    if (location.hash && categorias.length > 0) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 50);
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
          cursor: "pointer"
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
  };

  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => setCategorias(data))
      .catch((error) => console.error("Error al cargar productos", error));
  }, []);

  return (
    <section className="tienda">
      <Nav />
      <h1 className="title">Productos</h1>
      <section className="productosTop">
        <h1> ★ LO MAS VENDIDO ★</h1>
      <Slider {...settings}className="slider-productos">
        <Link className="productoTop" to="">
                  <img src="img/tamperespec.jpg" alt="Latte Art" />
          </Link>
          <Link className="productoTop" to="">
                  <img src="img/basehervidora.jpg" alt="Latte Art" />
          </Link>
          <Link className="productoTop" to="">
                  <img src="img/ljespec450.jpg" alt="Latte Art" />
          </Link>
          <Link className="productoTop" to="">
                  <img src="img/hervidoraespec.jpg" alt="Latte Art" />
          </Link>

      </Slider>
      </section>
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
                          <div
                            key={producto.id}
                            className="producto-container"
                            onClick={() => setProductoSeleccionado(producto)}
                          >
                            <img
                              src={producto.img}
                              alt={producto.nombre}
                              loading="lazy"
                            />
                            <h2>{producto.nombre}</h2>
                          </div>
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
                      <div
                        key={j}
                        className="producto-container"
                        onClick={() => setProductoSeleccionado(producto)}
                      >
                        <img
                          src={producto.img}
                          alt={producto.nombre}
                          loading="lazy"
                        />
                        <p>{producto.nombre}</p>
                      </div>
                    ))}
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Popup genérico */}
      {productoSeleccionado && (
        <div className="popup-overlay" onClick={() => setProductoSeleccionado(null)}>
          <div
            className="popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cerrar" onClick={() => setProductoSeleccionado(null)}>
              ✖
            </button>
            <img src={productoSeleccionado.img} alt={productoSeleccionado.nombre} />
            <div className="popup-info">
              <h2>{productoSeleccionado.nombre}</h2>
              <p>{productoSeleccionado.descripcion || "Detalles del producto."}</p>
              <p className="precio">{productoSeleccionado.precio || "$0.00"}</p>
              <button>Quiero este producto</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Tienda;
