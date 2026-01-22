import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../src/pages/App";
import SobreNosotros from "./pages/sobre-nosotros";
import Tienda from "./pages/tienda";
import Alianzas from "./pages/alianzas"
import Blog from "./pages/blog";
import ProductoDetalle from "./pages/productos";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/tienda/producto/:id" element={<ProductoDetalle />} />
        <Route path="/alianzas" element={<Alianzas />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
