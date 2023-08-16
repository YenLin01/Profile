import React from "react";
import homepageG from "../images/homepage/Setup Wizard.gif";
import { useNavigate } from "react-router-dom";
import AMHcomponent from "./aboutMe/AMHcomponent";

export const HomePageComponent = () => {
  const navigate = useNavigate();

  const handleResumeButton = () => {
    navigate("/resume");
  };
  const handlePortfolioButton = () => {
    navigate("/portfolio");
  };

  return (
    <div className="resumeColor">
      <AMHcomponent />
      <main>
        <div className="container py-4">
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>我的履歷</h2>
                <p>裡面有聯絡方式與我的履歷等等。。。</p>
                <button
                  className="btn btn-outline-light"
                  onClick={handleResumeButton}
                >
                  點擊前往履歷
                </button>
              </div>
            </div>
            <div className="col-md-6 text-black">
              <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>我的作品集</h2>
                <p>
                  這裡有我從開始學習前後端知識後的作品集，裡面有整個project
                  的程式碼與影片解釋
                </p>
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
    </div>
  );
};
