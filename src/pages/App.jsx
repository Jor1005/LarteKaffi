import React from "react";
import Nav from "../componentes/nav";
import Inicio from "./inicio";
import SobreNosotros from "./sobrelarte";
import Categorias from "./inicio/categorias";
import Contacto from "../componentes/contacto";
import Footer from "../componentes/footer";
import GlobalStyles from "../componentes/globalstyles";
import "./index.css";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Inicio />
      <Categorias />
      <SobreNosotros />
      <Contacto />
      <Footer />
      <div></div>
    </div>
  );
}

export default App;
