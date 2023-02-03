import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
