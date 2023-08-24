import React from "react";
import homepageG from "../images/homepage/Setup Wizard.gif";
import { useNavigate } from "react-router-dom";
import icon from "../images/portfolio/ICONS/icon";
import { useEffect } from "react";
import AOS from "aos";

export const HomePageComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  const handleResumeButton = () => {
    navigate("/aboutMe");
  };
  const handlePortfolioButton = () => {
    navigate("/portfolio");
  };

  return (
    <div className="resumeColor">
      <div>
        <div className="container headPandT ">
          <img
            data-aos="fade-right"
            src={homepageG}
            className=""
            alt="img"
          ></img>
          <div className="HeaderDiv">
            <h1
              data-aos-delay="100"
              data-aos="fade-left"
              style={{ fontSize: "3rem" }}
            >
              Hey，我是Yen
            </h1>

            <h1
              data-aos-delay="300"
              data-aos="fade-left"
              style={{ fontSize: "2.1rem" }}
            >
              一位想轉職後端工程師的英文老師
              <br />
              很高興認識你！
            </h1>
            <p data-aos-delay="300" data-aos="zoom-in">
              我來自台中，畢業於朝陽科技大學
            </p>
            <p data-aos-delay="450" data-aos="zoom-in">
              當苦惱人生下一階段該怎麼走時，嘗試了Coding，學習了網頁全端相關的知識，
              不斷挑戰自己未知的領域。
            </p>
            <p data-aos-delay="600" data-aos="zoom-in">
              在學習Coding的過程中，我真正感受到了學習的樂趣。隨著學習的開始，在不斷的解題與思考中得到了成就感與樂趣!
            </p>
            <p data-aos-delay="750" data-aos="zoom-in">
              我喜歡下廚、旅行與製作甜點，嘗試各種組合去製作出各種菜餚，擴展視野和體驗不同文化，
              認識新的地方、人和事物。
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 data-aos="fade-right" className="Atitle">
          我能說...
        </h3>
        <div className="container-lg">
          <div className="container-lg">
            <div className="container row row-cols-1 row-cols-sm-2 languageBox">
              <div data-aos-delay="100" data-aos="fade-up-right">
                <p>🇹🇼 中文(繁體)</p>
                <p className="inText">母語者</p>
              </div>
              <div data-aos-delay="150" data-aos="fade-up-right">
                <p>🇺🇸 英文</p>
                <p className="inText">能在閱讀和聽寫中使用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 data-aos="fade-right" className="Atitle">
          能夠使用...
        </h3>
        <div>
          <div className="container-lg">
            <div className="codingLanguage container ">
              <img
                data-aos-delay="100"
                data-aos="fade-up-right"
                src={icon.htmlS}
                title="HTML5"
                alt="HTML5"
              />
              <img
                data-aos-delay="150"
                data-aos="fade-up-right"
                src={icon.css}
                title="CSS3"
                alt="CSS"
              />
              <img
                data-aos-delay="200"
                data-aos="fade-up-right"
                src={icon.javascript}
                title="JavaScript"
                alt="JavaScript"
              />
              <img
                data-aos-delay="250"
                data-aos="fade-up-right"
                src={icon.react}
                title="React"
                alt="React"
              />
              <img
                data-aos-delay="300"
                data-aos="fade-up-right"
                src={icon.MongoDB}
                title="React"
                alt="React"
              />
              <img
                data-aos-delay="350"
                data-aos="fade-up-right"
                src={icon.Node}
                title="React"
                alt="React"
              />
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="container py-4">
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div
                data-aos-delay="200"
                data-aos="zoom-out-up"
                className="h-100 p-5 text-bg-dark rounded-3"
              >
                <h2>關於我...</h2>
                <p>我的人格特質與學習程式的心路歷程</p>
                <button
                  className="btn btn-outline-light"
                  onClick={handleResumeButton}
                >
                  點擊前往關於我
                </button>
              </div>
            </div>
            <div className="col-md-6 text-black">
              <div
                data-aos-delay="300"
                data-aos="zoom-out-up"
                className="h-100 p-5 bg-body-tertiary border rounded-3"
              >
                <h2>我的作品集</h2>
                <p>這裡有我從開始使用我在學習全端知識後所製作的作品</p>
                <button
                  className="btn btn-outline-secondary"
                  onClick={handlePortfolioButton}
                  type="button"
                >
                  點擊前往作品集
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="footer"></div>
    </div>
  );
};
