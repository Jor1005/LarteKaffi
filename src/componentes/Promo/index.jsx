import {useState, useEffect } from "react";
import "./promo.css"

 function PromoPop(){
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        const timer = setTimeout (() =>{
            setVisible(true);
        }, 1500);

        return () => clearTimeout (timer);

        },[]);


    

    return (
        <div className={`promo-pop ${visible ? "show" : "hide"}`}>
            <button 
            className="promo-pop-close"
            onClick={() => setVisible(false)}
            aria-label="Cerrar promoción"
            >
                x
            </button>

            <div className="promo-pop-content">
                ¡Por compras mayores a S/ 100 el envío es gratuito!
            </div>
        </div>
    );
    }

    export default PromoPop;



