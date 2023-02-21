import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
    </BrowserRouter>
  );
}

export default App;
