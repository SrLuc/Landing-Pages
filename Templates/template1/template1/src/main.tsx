import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/App";
import GlobalStyle from "./global/globalstyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>
);
