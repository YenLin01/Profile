import { React, useEffect } from "react";
import { Link } from "react-router-dom";

const PortfolioComponent = ({ AOS }) => {
  // const [open, setOpen] = useState(false);

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
        <div className="album py-5 bg-body-tertiary">
          <Link to={"https://courseweb-0w0l.onrender.com/"}>
            點我前往profile
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PortfolioComponent;
