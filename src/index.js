import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Container } from "@mui/joy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container sx={{ p: "0px" }}>
      <App />
    </Container>
  </React.StrictMode>
);
