import React from 'react';
import './inicio.css';

function Inicio() {
  return (
    <section className="inicio">
      <div className='imagen'>
        <img src="/img/lateras.jpg" alt="" />
      </div>
      <div className='slogans'>
        <h1 className='slogan1'>Perfecciona tu arte,</h1>
        <h1 className='slogan2'>completa tu estación.</h1>
        
      </div>
      <div className='textoyboton'>
        <div className='textos'>
          <p className='texto1'>Lleva el alma del café a tu hogar con</p>
          <p className='texto2'>nuestros accesorios de calidad</p>
        </div>
      <button className='boton'>Productos</button>
      </div>
    </section>
  );
}

export default Inicio;
