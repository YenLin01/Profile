import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./components/Layout";
import AboutMe from "./components/AboutMe";

import { HomePageComponent } from "./components/HomePageComponent";

import PortfolioComponent from "./components/PortfolioComponent";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageComponent AOS={AOS} />}></Route>
          <Route
            path="portfolio"
            element={<PortfolioComponent AOS={AOS} />}
          ></Route>
          <Route path="aboutMe" element={<AboutMe AOS={AOS} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
