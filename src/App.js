import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./components/Layout";
import AboutMe from "./components/AboutMe";
import { HomePageComponent } from "./components/HomePageComponent";
import React from "react";

import PortfolioComponent from "./components/PortfolioComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageComponent />}></Route>
          <Route path="resume" element={<AboutMe AOS={AOS} />}></Route>

          <Route
            path="portfolio"
            element={<PortfolioComponent AOS={AOS} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;