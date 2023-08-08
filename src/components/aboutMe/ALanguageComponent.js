import React from "react";

const ALanguageComponent = ({ AOS }) => {
  return (
    <div className="container-lg" style={{ paddingTop: "2rem" }}>
      <h3 data-aos="zoom-in" className="Atitle">
        我能說...
      </h3>
      <div className="container-lg">
        <div className="container row row-cols-1 row-cols-sm-2 languageBox">
          <div data-aos="zoom-out">
            <p>🇹🇼 中文(繁體)</p>
            <p className="inText">母語者</p>
          </div>
          <div data-aos="zoom-out">
            <p>🇺🇸 英文</p>
            <p className="inText">能在閱讀和聽寫中使用</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ALanguageComponent;
