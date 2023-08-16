import React from "react";

const AValuesComponent = ({ AOS }) => {
  return (
    <div className="container-lg" style={{ paddingTop: "2rem" }}>
      <h3 data-aos="zoom-in" className="Atitle">
        我人生的價值觀
      </h3>
      <div data-aos="fade-right" className="container-lg">
        <h3>樂於接受別人的意見</h3>
        <p>
          我認為日後成為任何公司或團隊的一員，我們必然要與他人合作，不同成長背景或者性格的人肯定會有不同的意見，
          我認為每個人提出他的意見必然是他從不同的角度對事情有了見解，保持傾聽其他人的意見必然會有一定的收穫，
          團隊夥伴不斷的進行溝通，將有助於團隊更加凝聚力量，發揮潛力，並取得共同成功。
        </p>
      </div>
      <div data-aos="fade-right" className="container-lg">
        <h3>豐富見聞與持續學習</h3>
        <p>
          人生沒有任何的體驗與學習是白費的，即使在當下可能看不出它們的用處，但在某個時間點必然會派上用場。
          我們所經歷的每一個時刻和學到的每一份知識都豐富了我們的內在世界，並在未來的生活中產生影響。
        </p>
      </div>
      <div data-aos="fade-right" className="container-lg">
        <h3>創新與創造的思維</h3>
        <p>
          在生活中保持開放的心態，不斷尋找新的方法和解決方案，追求個人成長和進步，並在面對挑戰時勇於嘗試新的思維方式和方法。
          就如同下廚，同一食材試各種不同的調味和烹飪方式，能產出大相逕庭的結果。
        </p>
      </div>
    </div>
  );
};

export default AValuesComponent;
