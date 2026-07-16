import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./theme";
import "./i18n";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

if (import.meta.env.DEV) {
  import("web-vitals")
    .then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
      const log = (metric) => console.info("[web-vitals]", metric.name, metric.value);
      onCLS(log);
      onINP(log);
      onLCP(log);
      onFCP(log);
      onTTFB(log);
    })
    .catch(() => {});
}
