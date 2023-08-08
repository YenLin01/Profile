import React from "react";
import homepageG from "../../images/homepage/Setup Wizard.gif";

const AMHcomponent = ({ AOS }) => (
  <div
    data-aos="zoom-in-down"
    className="container row row-cols-1 row-cols-sm-2"
  >
    <img src={homepageG} className="" alt="img"></img>
    <div className="HeaderDiv">
      <h1>Hey，我是 Yen，很高興認識你！</h1>

      <p>
        我是一名大學剛畢業的社會新鮮人，我來自台中就讀朝陽科技大學的應外系，在過去的一段時間裡，我積極地學習網頁全端相關的知識，
        不斷挑戰自己未知的領域，所以我認為我是一個勇於挑戰的人，
        在不斷的學習中我體驗到了樂趣，我曾苦惱過我的學習動機到底是什麼?但隨著學習的開始，
        已經從動機為何變成我該如何解出下一個問題,最終我認為我的動機是我在不斷的學習中的得到的成就感與樂趣!
        <br />
        <br />
        我習慣專注於問題的本質去思考問題，為何會發生這個問題?
        我該如何去改進，有了粗略的了解後，在對於問題一步一步地去理解，收集訊息，制定計畫，執行計畫，檢查結果，最後在做出調整和優化。
        <br />
        <br />
        在閒暇之餘我喜歡下廚、旅行與製作糕點，在這些興趣中我可以嘗試各種食材和烹飪方式，製作出美味的菜餚，或者是擴展視野和體驗不同文化的機會。
        透過旅行，認識新的地方、人和事物，體驗不同的風土人情。
      </p>
    </div>
  </div>
);

export default AMHcomponent;
