import React from "react";
import "./categorias.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

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
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="productos" className="productos">
      <h1>CATEGORÍAS</h1>
      <Slider {...settings} className="categorias-slider">
        <div className="categoria" id="latteart">
          <img src="img/latteart.jpg" alt="Latte Art" />
          <p>Latte Art</p>
        </div>
        <div className="categoria" id="balanza">
          <img src="img/balanza1.jpg" alt="Balanzas" />
          <p>Balanzas</p>
        </div>
        <div className="categoria" id="expresso">
          <img src="img/latte.png" alt="Expresso Bar" />
          <p>Expresso Bar</p>
        </div>
        <div className="categoria" id="hervidores">
          <img src="img/hervidora.jpg" alt="Hervidores Inteligentes" />
          <p>Hervidores Inteligentes</p>
        </div>
        <div className="categoria" id="brewbar">
          <img src="img/latte.png" alt="Brew Bar" />
          <p>Brew Bar</p>
        </div>
      </Slider>
    </section>
  );
}

export default Categorias;
