import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Context/AuthenticationContext";
import { ColorPaletteProvider } from "./Context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ColorPaletteProvider>
        <App />
      </ColorPaletteProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
