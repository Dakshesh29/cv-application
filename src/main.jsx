import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";

import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "❌ Root element not found. Make sure your HTML has <div id='root'></div>"
  );
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
