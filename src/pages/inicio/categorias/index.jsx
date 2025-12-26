import React from "react";
import "./categorias.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { HelmetProvider } from "react-helmet-async";



 
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

function Categorias() {
  const settings = {

    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
        dots: true
      }
    ]
  };

  return (
   <>
   
    <section id="productos" className="productos">
      <h1>CATEGORÍAS</h1>
      <Slider {...settings} className="categorias-slider">
        <Link className="categoria" to="/tienda#latte-art">
          <img src="img/lj-plat-720.webp" alt="Latte Art" />
          <p>Latte Art</p>
        </Link>
        <Link className="categoria" to="/tienda#balanzas">
          <img src="img/balanza1.webp" alt="Balanzas" />
          <p>Balanzas</p>
        </Link>
        <Link className="categoria" to="/tienda#espresso">
          <img src="img/nivelador.webp" alt="Expresso Bar" />
          <p>Espresso Bar</p>
        </Link>
        <Link className="categoria" to="/tienda#mde">
          <img src="img/hervidora.webp" alt="Hervidores Inteligentes" />
          <p>Métodos de extracción</p>
        </Link>
        <Link className="categoria" to="/tienda#molinos">
          <img src="img/molino-manual.webp" alt="Brew Bar" />
          <p>Molinos</p>
        </Link>
         <Link className="categoria" to="/tienda#limpieza">
          <img src="img/soplador.webp" alt="Limpieza y utiliarios" />
          <p>Limpieza y utiliarios</p>
        </Link>
         <Link className="categoria" to="/tienda#extras">
          <img src="img/sm.webp" alt="Brew Bar" />
          <p>Extras</p>
        </Link>
      </Slider>
    </section>
    </>
  );
}

export default Categorias;



