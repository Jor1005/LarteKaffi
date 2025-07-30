import React from "react";
import "./contacto.css";

function contacto() {
  return (
    <section className="contacto">
      <h1>CONTACTO</h1>
      <div className="contacto__container">
        <a className="whatsapp" href="https://wa.me/51922165273?text=Hola%20estoy%20interesado%20en%20su%20producto" target="_blank" rel="noopener noreferrer">
            <img src="\img\WhatsApp.svg.webp" alt="" />      
        </a>
      </div>
      
    </section>
  );
}

export default contacto;
