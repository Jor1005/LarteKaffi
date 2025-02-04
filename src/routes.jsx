import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "../src/pages/App";

function AppRoutes() {
  return (
    <BrowserRouter basename="/LarteKaffi">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
