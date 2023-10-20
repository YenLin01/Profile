import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../images/portfolio/ICONS/icon";
import p1 from "../images/portfolio/Pictures/p1.png";
import p2 from "../images/portfolio/Pictures/p2.png";
import p3 from "../images/portfolio/Pictures/p3.jpg";

import AOS from "aos";

const PortfolioComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <main>
        <section className=" py-5 text-center container">
          <div className=" row py-lg-5">
            <div data-aos="fade-up" className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">作品集</h1>
              <p className="lead text-body-secondary">
                每個專案在 github
                上皆有相關的程式碼,在Youtube上則有對於網頁上功能的說明。
                除此之外演算法的練習也在gitHub上有興趣可以去看看
              </p>
            </div>
          </div>
        </section>
        <div
          className="card mb-3 "
          style={{ marginTop: "1rem", border: "none" }}
        >
          <div data-aos="fade-right" className="shadow row g-0">
            <div className="col-md-4 ImgContainer">
              <img src={p1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">學習網站</h2>
                <p className="card-text">
                  主要使用MERN 所製作的全端專案，使用者能以學生或者老師的身分
                  去註冊、登入會員並且因身分不同而有不同的功能。在功能上還有將先前所學的TodoList融合到Project當中
                </p>

                <p className="card-text">
                  <small className="text-body-secondary">
                    <Link
                      className="btn "
                      target="_blank"
                      to={"https://courseweb-0w0l.onrender.com/"}
                    >
                      前往學習網站
                    </Link>
                    <Link
                      className="btn"
                      target="_blank"
                      to={"https://github.com/YenLin01/Course-FrontEnd"}
                    >
                      Front-End <img src={icon.github} alt="github"></img>
                    </Link>
                    <Link
                      className="btn"
                      target="_blank"
                      to={"https://github.com/YenLin01/Course-BackEnd"}
                    >
                      Back-End <img src={icon.github} alt="github"></img>
                    </Link>
                    <Link
                      className="btn"
                      target="_blank"
                      to={
                        "https://www.youtube.com/watch?v=hqlJrNirj_Y&ab_channel=%E6%9E%97%E5%90%9B%E5%BD%A5"
                      }
                    >
                      <img src={icon.youtube} alt="youtube"></img>
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            style={{ paddingTop: "20px" }}
            className="shadow row g-0"
          >
            <div className="col-md-4 ImgContainer">
              <img src={p2} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className=" col-md-8">
              <div className="card-body">
                <h2 className="card-title">圖片網站</h2>
                <br />
                <p className="card-text">
                  使用React
                  所製作的前端網站，fetch來自於pexels的API所製作而成的網站，並且可以使用關鍵字去搜索特定的圖片
                  <br />
                  <br />
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <Link
                      className="btn "
                      target="_blank"
                      to={"https://imgweb.onrender.com/"}
                    >
                      前往圖片網站
                    </Link>
                    <Link
                      className="btn"
                      target="_blank"
                      to={"https://github.com/YenLin01/p8_img_webside"}
                    >
                      Front-End Code <img src={icon.github} alt="github"></img>
                    </Link>

                    <Link
                      className="btn"
                      target="_blank"
                      to={"https://youtu.be/x_ajLoc3mCI"}
                    >
                      <img src={icon.youtube} alt="youtube"></img>
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* third profolio */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            style={{ paddingTop: "20px" }}
            className="shadow row g-0"
          >
            <div className="col-md-4 ImgContainer">
              <img
                style={{}}
                src={p3}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className=" col-md-8">
              <div className="card-body">
                <h2 className="card-title">Pomodoro</h2>
                <br />
                <p className="card-text">
                  番茄鐘工作法是一種時間管理方法，
                  該方法使用一個定時器來分割出一個一般為25分鐘的工作時間和5分鐘的休息時間，這稱之為一節。而每四節就會給予一個25分鐘的休息時間。
                  <br />
                  而這個網頁就是使用此概念所製作的，使用React 和
                  簡單的數學所製作的番茄鐘計時器，可以計算目前進行的總時數、節數與已經經過幾輪。
                  <br />
                  <br />
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <Link
                      className="btn "
                      target="_blank"
                      to={"https://timer-2t59.onrender.com/"}
                    >
                      前往Pomodoro
                    </Link>
                    <Link
                      className="btn"
                      target="_blank"
                      to={"https://github.com/YenLin01/Timer"}
                    >
                      Front-End Code <img src={icon.github} alt="github"></img>
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="footerWhite"></div>
    </div>
  );
};

export default PortfolioComponent;
