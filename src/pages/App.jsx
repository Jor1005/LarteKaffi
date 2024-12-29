import React from 'react';
import Nav from '../componentes/nav';
import Inicio from './inicio';
import GlobalStyles from '../componentes/globalstyles';
import './index.css'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav/>
      <Inicio/>
      <div>
      </div>
    </div>
  );
}

export default App;
