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
      style={{ ...style, display: "flex", justifyContent:"center", alignItems:"center", background: "#2b2a28", width:"50px", height:"50px", textAlign: "center", borderRadius:"10%", fontSize:"20%", cursor:"pointer"}}
      onClick={onClick}
    />
  );
}
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <Arrow/>,
    nextArrow: <Arrow/>,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ]
  };


  return (
    <section className="tienda">
      <Nav />
      <h1 className="title">Productos</h1>
      <div className="tienda-container">
      <section className="category_a">
        <h2>Latte Art</h2>
     <Slider {...settings}>
          <div className="producto-container" id="latera">
            <img src="img/Latera Blanca.png" alt="Latera Blanca" />
          </div>
          <div className="producto-container" id="latera">
          <img src="img/Latera negra.png" alt="Latera Negra" />
          </div>
          <div className="producto-container" id="latera">
          <img src="img/Latera azul.png" alt="Latera Azul" />
          </div>
          <div className="producto-container" id="latera">
          <img src="img/Latera.png" alt="Latera Azul" />
          </div>
          </Slider>
     
      </section>
      <section className="category_b">
        <h2>Balanzas</h2>
        <Slider {...settings}>
          <div className="Balanza">Balanza 1</div>
          <div className="Balanza">Balanza 2</div>
          <div className="Balanza">Balanza 3</div>
        </Slider>
      </section>
      <section className="category_a">
        <h2>Expresso Bar</h2>
        <div className="producto-container">
          <div className="Expresso">Expresso 1</div>
          <div className="Expresso">Expresso 2</div>
          <div className="Expresso">Expresso 3</div>
        </div>
      </section>
      <section className="category_b">
        <h2>Hervidores Inteligentes</h2>
        <div className="producto-container">
          <div className="Hervirdor">Hervidor 1</div>
          <div className="Hervirdor">Hervidor 2</div>
          <div className="Hervirdor">Hervidor 3</div>
        </div>
      </section>
      <section className="category_a">
        <h2>Brew Bar</h2>
        <div className="producto-container">
          <div className="Brew">Brew 1</div>
          <div className="Brew">Brew 2</div>
          <div className="Brew">Brew 3</div>
        </div>
      </section>
      </div>
    </section>
  );
}
export default Tienda;
