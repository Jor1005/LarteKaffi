// src/routes.jsx
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "../src/pages/App"


function AppRoutes() {
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}></Route>
          </Routes>
      </BrowserRouter>
  )


}

export default AppRoutes
