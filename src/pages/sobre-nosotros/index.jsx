import React from "react";
import "./sobre-nosotros.css"
import Nav from "../../componentes/nav";

function sobreNosotros(){
    return(
        <> 
        <Nav />
        <section className="todo">
            <div className="sobre-nosotros">
                <div className="diego">
                <img src="\img\Diego.png" alt="" />
                </div>
                <div className="texto">
                <h1 className="titulo">SOBRE LARTE KAFI</h1>
                <p className="pc">Larte Kaffi es un emprendimiento personal a manos de Diego Puente Lara, un joven barista de 20 años que lleva trabajando con café desde muy temprana edad. Su formación comenzó observando, probando y perfeccionando cada preparación detrás de la barra, y con el tiempo entablo una conexión profunda por el arte del café y la experiencia del cliente. </p>
                <p >awdawd</p>
                <p>awdawdawd</p>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default sobreNosotros