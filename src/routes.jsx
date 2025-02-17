import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from "../src/pages/App";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
