import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Tasks from "./components/tasks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Tasks />
  </React.StrictMode>
);
