import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import "./App.css";
import "./weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <p>
        Open-source code, by{" "}
        <a href="https://github.com/hani-slh/my-app">Haniye Salehi</a>{" "}
      </p>
    </div>
  </StrictMode>
);
