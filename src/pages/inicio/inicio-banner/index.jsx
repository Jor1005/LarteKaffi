import React from "react";
import "./inicio-banner.css";

function InicioBanner() {
  return (
    <section className="inicioBanner">
      <h1>¡Tu arte merece las mejores herramientas!</h1>
      <p>Contáctanos en las siguientes redes: </p>
      <div className="redesContainer">
        <a className="whatsapp" href="https://wa.me/51940136456?text=Hola%20estoy%20interesado%20en%20su%20producto" target="_blank" rel="noopener noreferrer">
            <img src="\img\WhatsApp.svg.webp" alt="" />      
        </a>
        <a className="instagram" href="https://www.instagram.com/larte_kafi" target="_blank" rel="noopener noreferrer">
        <img src="\img\insta.avif" alt="Instagram Logo" />
        </a>
      </div>
    </section>
  );
}

export default InicioBanner;