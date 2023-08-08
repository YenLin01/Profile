import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./components/Layout";
import AboutMe from "./components/AboutMe";
import { HomePageComponent } from "./components/HomePageComponent";

import PortfolioComponent from "./components/PortfolioComponent";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/profile" element={<Layout />}>
          <Route index element={<HomePageComponent />}></Route>
          <Route path="/profile/resume" element={<AboutMe AOS={AOS} />}></Route>

          <Route
            path="/profile/portfolio"
            element={<PortfolioComponent AOS={AOS} />}
          ></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
