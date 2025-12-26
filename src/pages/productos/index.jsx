import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Slider from "react-slick";
import Nav from "../../componentes/nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productos.css";
import { Helmet } from "react-helmet-async";


export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const location = useLocation();
  const categoriaId = location.state?.categoriaId;

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => {
        for (const cat of data) {
          for (const p of cat.productos) {
            if (p.productos) {
              for (const sub of p.productos) {
                if (String(sub.id) === id) return setProducto(sub);
              }
            } else if (String(p.id) === id) {
              return setProducto(p);
            }
          }
        }
      })
      .catch((err) => console.error("Error cargando producto:", err));
  }, [id]);

  if (!producto)
    return (
      <div className="producto-detalle cargando">
        <Nav />
        <p>Cargando producto...</p>
      </div>
    );

  // ✅ Combina la imagen principal y las adicionales si existen
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

  // Determina si un elemento es video o imagen
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
    // Imagen por defecto
    return <img key={i} src={media} alt={`${producto.nombre} ${i + 1}`} />;
  };



  return (
    
    <>
    <Helmet>
      <title>{producto.nombre} | Larte Kaffi</title>
      <meta
        name="description"
        content={producto.descripcion || "Producto de Larte Kaffi"}
      />
      <meta property="og:title" content={producto.nombre} />
      <meta
        property="og:description"
        content={producto.descripcion || "Producto de Larte Kaffi"}
      />
      <meta property="og:image" content={producto.img} />
    </Helmet>
   
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
    </section>
    </>
  );
}
