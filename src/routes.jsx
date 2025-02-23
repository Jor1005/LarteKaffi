import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from "../src/pages/App";
import Tienda from "./pages/tienda";
import Socios from "./pages/socios";
import Blog from "./pages/blog";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/socios" element={<Socios />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
