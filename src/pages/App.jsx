import React from "react";
import Nav from "../componentes/nav";
import Inicio from "./inicio";
import InicioBanner from "./inicio/inicio-banner";
import Categorias from "./inicio/categorias";
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
      <InicioBanner />  
      <Footer />
      <div></div>
    </div>
  );
}

export default App;
