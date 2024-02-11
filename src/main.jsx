import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
