import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../images/portfolio/ICONS/icon";
import p1 from "../images/portfolio/Pictures/p1.png";

const PortfolioComponent = ({ AOS }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div data-aos="fade-up" className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">作品集</h1>
              <p className="lead text-body-secondary">
                每個專案在 github 上有相關的程式碼,
                且有程式碼相關解釋在youtube上
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary profile">
          <div>
            <img src={p1}></img>
          </div>
          <Link to={"https://courseweb-0w0l.onrender.com/"}>
            點我前往profile
          </Link>
          <img src={icon.github} alt="githun"></img>
          <img src={icon.youtube} ait="youtube"></img>
        </div>
      </main>
    </div>
  );
};

export default PortfolioComponent;
