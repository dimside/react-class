import React from "react";
import ReactDom from "react-dom/client";
import { App } from "components/App";
import { ThemeProvider } from "@emotion/react";


const root = ReactDom.createRoot(document.querySelector("#root"));

const theme = {
  blue: "blue",
  turquoise: "turquoise",
  green: "green",
  gold: "gold",
  blueviolet: "blueviolet",
  yellow: "yellow",
  black: "#000",
  
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
