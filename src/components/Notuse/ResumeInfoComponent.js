import React from "react";
import icon from "../../images/portfolio/ICONS/icon.js";
import { Link } from "react-router-dom";

const ResumeInfoComponent = () => {
  return (
    <div>
      <main className=" ">
        <section>
          <h1 style={{ padding: "1rem 0rem" }}>關於我:</h1>
          <table className=" table-striped  " style={{ paddingTop: "1rem" }}>
            <tr style={{ borderTop: "2px " }}>
              <td style={{ paddingLeft: "1rem" }}>自我簡介</td>
              <td style={{ width: "80%" }}>
                我在朝陽科技就讀應用外語系。在接觸了網頁設計後對於後端非常感興趣，便自學網頁前後端的相關的知識
                。目前能使用 JavaScript + React 編寫網頁原始碼。
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "1rem" }}>學歷</td>
              <td>朝陽科技大學</td>
            </tr>

            <tr>
              <td style={{ paddingLeft: "1rem" }}>語言</td>
              <td>
                <ul style={{ listStyleType: "none" }}>
                  <li>中文: 精通</li>
                  <li>英文: 精通</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "1rem" }}>專長</td>
              <td>
                <img src={icon.htmlS} title="HTML5" alt="HTML5" />
                <img src={icon.css} title="CSS3" alt="CSS" />
                <img
                  src={icon.javascript}
                  title="JavaScript"
                  alt="JavaScript"
                />
                <img src={icon.react} title="React" alt="React" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "1rem" }}>開發經驗</td>
              <td>
                目前學習到使用MERN,開發網頁全端的專案，以mongoose alita,
                express, node 來製作後端伺服器，前端框架則是以react
                來做出網頁的架構 詳細的成品與可以至作品集觀看
              </td>
            </tr>
          </table>
          <div>
            <h1 style={{ padding: "1rem 0rem" }}>聯絡方式:</h1>
            <p>歡迎用以下方式聯絡我:</p>
            <p>電子郵件信箱:</p>
            <p>erte00000@gmail.com</p>
          </div>
        </section>

        <section className="picture">
          <h3>或者使用:</h3>
          <img
            src="./Pictures/81976033_2769606163078465_6680415702978920448_o.jpg"
            alt=""
          />
        </section>
      </main>
      <footer>
        <Link to="https://github.com/YenLin01" className="resumeSocalMedia">
          <img src={icon.github} alt="github" title="github page" />
        </Link>
        <p>
          <Link to="https://storyset.com/computer">
            Computer illustrations by Storyset
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default ResumeInfoComponent;
