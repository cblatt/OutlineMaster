import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AuthProvider } from "./context/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
      <ChakraProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ChakraProvider>
    </React.StrictMode>
  </div>
);
