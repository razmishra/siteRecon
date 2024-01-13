import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FullCardContextProvider } from "./context/Poppercontext.jsx";
import { ModalcontextProvider } from "./context/Modalcontext.jsx";
import { SingleCardContextProvider } from "./context/Card.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FullCardContextProvider>
      <ModalcontextProvider>
        <SingleCardContextProvider>
        <App />
        </SingleCardContextProvider>
      </ModalcontextProvider>
    </FullCardContextProvider>
  </React.StrictMode>
);
