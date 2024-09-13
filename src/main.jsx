import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { ContextProvider } from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </HashRouter>
  </React.StrictMode>
);
