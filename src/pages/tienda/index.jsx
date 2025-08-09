import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { useLocation } from "react-router-dom";
import Nav from "../../componentes/nav";
import "./tienda.css";

function Tienda() {
  const [categorias, setCategorias] = useState([]);
  const location = useLocation();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)

  useEffect(() => {
  if (location.hash && categorias.length > 0) {
    const target = document.querySelector(location.hash);
    if (target) {
  
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }
}, [location, categorias]);

  

  useEffect(() => {
    fetch("/data/productos.json")
      .then(response => response.json())
      .then(data => setCategorias(data))
      .catch(error => console.error("Error al cargar productos", error));
  }, []);

  return (
    <section className="tienda">
      <Nav />
      <h1 className="title">Productos</h1>
      <div className="tienda-container">
        {categorias.map((categoria, i) => {
          const productos = categoria.productos;
          return (
  <section key={i} id={categoria.id} className="categoria-section">
    <h2 className="categoriasProductos">{categoria.categoria}</h2>
    {productos.length > 0 ? (
      <div className="productos-grid">
        {productos.map((producto, j) => (
          <div key={j} className="producto-container" onClick={()=> setProductoSeleccionado(producto)}>
            <img src={producto.img} alt={producto.nombre} />
            <p>{producto.nombre}</p>
          </div>
        ))}
      </div>
    ) : (
      <p>No hay productos disponibles.</p>
    )}
    {productoSeleccionado && (
  <div className="popup-overlay">
    <div className="popup">
      <button onClick={() => setProductoSeleccionado(null)}>✖</button>
      <img src={productoSeleccionado.img} alt={productoSeleccionado.nombre} />
      <h2>{productoSeleccionado.nombre}</h2>
      <p>detalles del producto.</p>
      <button onClick={() => alert("Producto agregado al carrito!")}>
        Agregar al carrito
      </button>
    </div>
  </div>
)}

  </section>
  );
        })}
</div>
</section>
          

        
);
}

export default Tienda;
