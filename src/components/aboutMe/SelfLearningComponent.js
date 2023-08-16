import React from "react";

const SelfLearningComponent = () => {
  return (
    <div className="container-lg" style={{ paddingTop: "2rem" }}>
      <h3 data-aos="zoom-in" className="Atitle">
        自學的經驗和碰到的困難
      </h3>
      <div data-aos="fade-right" className="container-lg">
        <p>
          在自主學習的過程中，我認為到最具挑戰的情況往往涉及到解決一個廣泛且複雜的問題。
          這類問題常常需要花費大量的時間來尋找解決方法。舉例來說，在我開始建立這份履歷時，我遇到了一個困難。
          最初我計劃使用Heroku來建立static
          site，但由於今年Heroku停止了免費服務。所以需要使用其他的託管服務
          我隨後想到使用GitHub Pages來建立網站，但這也帶來了新的問題。
          我試了很多次使用gh-pages來建立，但無論怎麼嘗試，GitHub
          Pages都無法正常顯示我的內容。 最終，我發現問題出在GitHub
          Pages不支援SPA，這導致部分組件無法正常顯示。
          在發生這個問題時，由於缺乏可以討論的同伴，我只能根據各種可能性與參考網路上的討論
          來對我的程式做了各種的調整與測試，但最後都是失敗的。
          最後，我選擇了使用Render來托管我的履歷和作品，儘管render
          的建立對當時我來說仍然是一個未嘗試過的挑戰，但總結來說是可行的。
          經過了這一次的經驗，我應該要在面對困難時要能轉變思維，尋找替代方案。
          我認為在當下的狀況我認為如果有人可以一起討論這個問題的話，
          或許我可以更早地找到這個解決方案，節省了大量的時間和精力。
        </p>
        <h3 data-aos="zoom-in" className="Atitle"></h3>
      </div>
      <h3 data-aos="zoom-in" className="Atitle">
        你學習工程師相關技能時的優勢是什麼？
      </h3>
      <div className="container-lg">
        <p>
          我認為我的優勢在於我能夠輕鬆閱讀並理解各種模組的文件。
          而且，我不會僵化地認為某個特定功能就是唯一正確的解決方案。我喜愛嘗試新的方法，
          這讓我擁有開放的心態。因此，當遇到新的功能或模組，我會給自己充足的時間來摸索，
          深入了解未知領域。
        </p>
      </div>
    </div>
  );
};

export default SelfLearningComponent;
