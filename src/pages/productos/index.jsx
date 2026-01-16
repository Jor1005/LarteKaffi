import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Slider from "react-slick";
import Nav from "../../componentes/nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productos.css";
import Footer from "../../componentes/footer";


export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const location = useLocation();
  const categoriaId = location.state?.categoriaId;
  const [relacionados, setRelacionados] = useState([]);




  useEffect(() => {
  fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) => {
      let productoEncontrado = null;
      let productosRelacionados = [];

      data.forEach(cat => {
        cat.productos.forEach(p => {
          if (p.productos) {
            const sub = p.productos.find(s => String(s.id) === id);
            if (sub) {
              productoEncontrado = sub;
              productosRelacionados = p.productos.filter(s => String(s.id) !== id);
            }
          }
          else if (String(p.id) === id) {
            productoEncontrado = p;
            productosRelacionados = cat.productos.filter(s => String(s.id) !== id);
          }
        });
      });

      if (productoEncontrado) {
        setProducto(productoEncontrado);
        setRelacionados(productosRelacionados);
      }
    })
    .catch((err) => console.error(err));
}, [id]);

  if (!producto)
    return (
      <div className="producto-detalle cargando">
        <Nav />
        <p>Cargando producto...</p>
      </div>
    );

  
  const contenido = [
    ...(producto.img ? [producto.img] : []),
    ...(producto.contenidoExtra && producto.contenidoExtra.length > 0 ? producto.contenidoExtra : []),
  ];



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };


  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  }
  
  const renderContenido = (media, i) => {
    if (
      typeof media === "string" &&
      (media.includes("youtube.com") || media.includes("instagram.com"))
    ) {
      return (
        <div key={i} className="media-wrapper">
          <iframe
             src={media}
            title={`video-${i}`}
            className="video-wrapper"
            allow="accelerometer; autoplay;"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    if (/\.(mp4|webm|mov|avi)$/i.test(media)) {
      return (
        <video
          key={i}
          controls
          loop
          muted
          playsInline
          className="media-wrapper"
        >
          <source src={media} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      );
    }
   
    return <img key={i} src={media} alt={`${producto.nombre} ${i + 1}`} />;
  };



  return (
    
    <>
   
   
    <Nav />
    <section className="producto-detalle">
      <div className="detalle-contenido">
        {contenido.length > 1 ? (
          <Slider {...settings} className="slider-detalle">
                       {contenido.map((media, i) => renderContenido(media, i))}

          </Slider>
        ) : (
          contenido.length === 1 && (
            <div className="imagen-unica">{renderContenido(contenido[0], 0)}</div>
          )
        )}

        <div className="info">
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion || "Sin descripción disponible."}</p>
          <p id="precio" className="precio">{producto.precio || "Precio no disponible"}</p>
          <div className="botones">
          <a  className= "wasap" href="https://wa.me/51940136456?text=Hola%20estoy%20interesado%20en%20su%20producto" >Quiero este producto</a>
          <Link
              to="/tienda"  state={{ categoriaId }} className="volver">← Volver a la tienda
        </Link>
          </div>
          
        </div>
        
      </div>
      {relacionados.length > 0 && (
      <div className="recomendados-container">
      <p className="pr">Productos Recomendados</p>
      <Slider {...settings2} className="slider-detalle"> 
              {relacionados.map((rel) => (
              <Link key={rel.id} to={`/tienda/producto/${rel.id}`} state={{ categoriaId }}>
                  <div className="card-relacionado">
                  <img src={rel.img} alt={rel.nombre} />
                  <p>{rel.nombre}</p>
                </div>
              </Link>
              ))}
           </Slider>
           </div>
           )}
      <Footer/>
    </section>
    </>
  );
}

