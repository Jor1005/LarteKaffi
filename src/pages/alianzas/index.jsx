import React from "react";
import Nav from "../../componentes/nav";
import "./alianzas.css";
import { Helmet } from "react-helmet-async";


function Alianzas() {
  return (
<>
<Helmet>
        <title>Alianzas | Larte Kaffi</title>
        <meta
          name="description"
          content="Blog de Larte Kafi"
        />
      </Helmet>
      
    <section className="blog"> 
      <Nav />
      <section className="container-main">
      
        <div className="cards">
          <img src="img/ombu.webp" alt="ombu-logo" />
          <div className="textos">
          <h1>Ombú</h1>
          <p>
            Somos Ombú, un espacio donde el café de especialidad, los postres saludables y los brunchs se disfrutan al ritmo del rock y el amor por los gatos. 
          </p>
          <p>
             Somos principal distribuidor de productos de barismo Larte Kafi, una marca que comparte nuestra visión por la calidad, la técnica y el respeto por el café.
          </p>
          <p>
            Cada taza que servimos busca reconocer el trabajo de los caficultores peruanos y cafetizar a más peruanos, acercándolos a mejores herramientas, mejores cafés y mejores experiencias
          </p>
         
          </div>
        </div>
        <div className="cards">
          <img src="img/pcb.webp" alt="peruvian-coffe-brothers-logo" />
          <div className="textos">
          <h1>Peruvian Coffe Brothers</h1>
          <p>
            Peruvian Coffee Brothers es una marca de café de especialidad peruano que trabaja con cafés de origen, cuidando el proceso desde el grano hasta la taza, con un enfoque en calidad, trazabilidad y experiencia.
          </p>
          </div>
        </div>
      </section>
    </section>
    </>
  );
}

export default Alianzas;
