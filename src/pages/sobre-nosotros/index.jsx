import React from "react";
import "./sobre-nosotros.css"
import Nav from "../../componentes/nav";

function sobreNosotros(){
    return(
        <> 
        <Nav />
        <section className="todo">
            
            <div className="sobre-nosotros">
               
                <h1 className="titulo">SOBRE LARTE KAFI</h1>
                 <h2 >LARTE KAFI es una marca creada desde la barra y pensada para baristas.</h2>

                    <div className="latera-diego"> 
                        <div className="diego">
                            <img src="\img\Diego.png" alt="" />
                        </div>
                        <div className="asadiego"/>
                    </div>
               
                    <div className="taza-cafe">
                            <div className="taza">
                                <div className="taza-textos">
                                    <p className="t1">Nos especializamos en accesorios que priorizan la precisión, la funcionalidad y el diseño, entendiendo que cada detalle influye en el resultado final en taza.</p>
                                    <p className="t2">Todos nuestros productos son seleccionados y aprobados por Diego Larte, barista competidor y apasionado por el mundo del café.</p>
                                    <p className="t1"> Porque en LARTE KAFI vendemos accesorios de calidad, ideales tanto para iniciar en el mundo del barismo como para quienes buscan competir y llevar su nivel más lejos.</p>
                                    <p className="t2"> Nuestro barista te acompaña en la elección de tus accesorios, brindándote orientación en su uso y seguimiento para que aproveches al máximo cada herramienta.</p>
                                </div>
                            </div>
                            <div className="asa"/>
                    </div>
 
            </div>
        </section>
        </>
        
    )
}

export default sobreNosotros