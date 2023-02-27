import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Blog from "./components/blog/Blog";
import FAQ from "./components/faqs/FAQ";
import Navbar from "./components/navbar/Navbar";
import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Blog />
      <FAQ />
    </BrowserRouter>
  );
}

export default App;
