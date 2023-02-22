import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
    </BrowserRouter>
  );
}

export default App;
