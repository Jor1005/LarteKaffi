import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import { HelmetProvider } from "react-helmet-async";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <HelmetProvider>
        <AppRoutes />
      </HelmetProvider>
  </React.StrictMode>,
);
