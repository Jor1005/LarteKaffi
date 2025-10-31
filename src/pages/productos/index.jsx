import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import Nav from "../../componentes/nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productos.css";

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

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

  // 🔄 Convertir URL de YouTube normal a formato embed
  const convertirAEmbed = (url) => {
    if (url.includes("youtube.com/watch?v=")) {
      const id = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${id}`;
    } else if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url; // por si acaso no es un video de YouTube
  };


    // 🔍 Función para detectar si el elemento es un video de YouTube

   const esVideo = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

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
  const renderContenido = (item, i) => {
    if (
      typeof item === "string" &&
      (item.includes("youtube.com") || item.includes("instagram.com"))
    ) {
      return (
        <div key={i} className="video-wrapper">
          <iframe
            src={item}
            title={`video-${i}`}
       
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    // Imagen por defecto
    return <img key={i} src={item} alt={`${producto.nombre} ${i + 1}`} />;
  };

  return (
    <section className="producto-detalle">
      <Nav />
      <div className="detalle-contenido">
        {contenido.length > 1 ? (
          <Slider {...settings} className="slider-detalle">
            {contenido.map((item, i) => (
              <div key={i}>
                {esVideo(item) ? (
                  <iframe
                    src={convertirAEmbed(item)}
                    title={`video-${i}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      width: "99%",
                      height: "29vw",
                      borderRadius: "20px"
                  
                    }}
                  />
                ) : (
                  <img src={item} alt={`${producto.nombre} ${i + 1}`} />
                )}
              </div>
            ))}
          </Slider>
        ) : (
          contenido.length === 1 && (
            <img src={contenido[0]} alt={producto.nombre} className="imagen-unica" />
          )
        )}

        <div className="info">
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion || "Sin descripción disponible."}</p>
          <p className="precio">{producto.precio || "Precio no disponible"}</p>

          <a  className= "wasap" href="https://wa.me/51940136456?text=Hola%20estoy%20interesado%20en%20su%20producto" >Quiero este producto</a>
          <Link to="/tienda" className="volver">
            ← Volver a la tienda
          </Link>
        </div>
      </div>
    </section>
  );
}
