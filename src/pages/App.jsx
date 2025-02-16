import React from 'react';
import Nav from '../componentes/nav';
import Inicio from './inicio';
import SobreNosotros from './sobrelarte';
import Productos from './productos';
import GlobalStyles from '../componentes/globalstyles';
import './index.css'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav/>
      <Inicio/>
      <SobreNosotros/>
      <Productos/>
      <div>
      </div>
    </div>
  );
}

export default App;
