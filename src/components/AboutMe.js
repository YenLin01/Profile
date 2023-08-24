import React, { useEffect } from "react";
import AOS from "aos";

const ResumeComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" p-3  resumeColor text-white aboutMe">
      <div className="container-lg " style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in">學習期間的故事</h1>

        <div data-aos="fade-right" className="container-lg">
          <h2 data-aos="zoom-in" className="storyTitle">
            促使改變的關鍵
          </h2>

          <p data-aos="fade-right" className="container-lg">
            {" "}
            在上一份工作當中，我的職業是一位補習班老師，負責教導國小國中的小朋友，
            但礙於剛入職不久後便接到了兵單，出於多方面的考慮，特別是補習班師生班級管理的問題，最終我與主管討論後我認為離開這份職位，
            對於我或者是我帶的班級都是更好的選擇
            ，因此這份工作的持續的時間並不長⋯
            <br />
            在結束這份工作後我也去反思了，我真的想做這種安穩的工作嗎?
            我在這份工作中看到了我的未來就是持續10到20年教授著大同小異的內容，雖這份工作不難也很安逸，
            但我現在還年輕我真的不該去嘗試一些新的事務嗎?
          </p>

          <h2 data-aos="zoom-in" className="storyTitle">
            學習的開始
          </h2>
          <p data-aos="fade-right" className="container-lg">
            當我在思考人生的下一步時，回憶起大學半工半讀擔任品檢員的時期，因工作上的需求，為了優化流程，我研究Excel
            成功創造出能夠提升工作效率的公式，並從中發現樂趣，得到了無可替代的成就感。
            他與程式兩者間的相同之處在於他們都是需要運用邏輯，且是可塑性極高的東西，Excel能創造出數組公式的功能，
            用來幫助使用者更高效地處理和分析資料。
            而在JavaScript則可以創造出function
            來指定特定的任務或操作，當時負責架構我們公司內部網站的工程師在使用我的電腦時看了我的公式，對我說「你其實邏輯還不錯欸，
            竟然可以想到用這個公式來整理公司的資料，你不如以後不要做本科系的東西了，來試試看程式設計！」
            這段回憶引發了我對資訊工程領域的思考。儘管當時受限於非本科背景，我未敢踏出嘗試程式設計的步伐。
            <br />
            時至今日，自學的風潮逐漸興起，當我注意到Udemy上一門僅需390元的網頁全端課程時，
            我毫不猶豫地購買了它。起初，我對資訊工程領域只是抱著好奇。
            然而，隨著課程的進行，我開始逐步建立基礎的 HTML 網頁，運用 CSS
            增添網頁的外觀，並透過簡單的 JavaScript
            使網頁充滿活力。在這一過程中，我漸漸發現，
            我對於創造自己的東西充滿了激情，就像當初我創造出 Excel
            公式時所感受到的成就感一樣。這正是我在課程中所深刻體驗到的。
            <br />
          </p>
          <h2 data-aos="zoom-in" className="storyTitle">
            當兵發生的故事
          </h2>
          <p data-aos="fade-right" className="container-lg">
            10月本來我要入伍，卻因確診延後至12月底正式入伍。這期間算是半工半讀，雖然下班後依然是持續的自學，但效率不高。
            所以我決定兵役後專心學程式。在軍旅生涯中生活不易，而且自由有限，不能使用手機。但新訓單位鼓勵我們寫日記，他們會給予我們一小段時間去寫下日記，
            而這些日記他們不會檢查。因此，在假日我會把我學到的東西記錄在日記中，
            不斷複習，以免遺忘。我也會將遇到的問題寫在日記上，然後在休息日時專注解決這些問題。
            幸運的是鄰兵是資工系畢業，我會與他討論程式思路及未來規劃。雖分發後不同單位，但我們仍會保持聯絡。部隊生活雖不像新訓繁忙，也有各種任務。
            但比起新訓期間更有空閒時能寫想法、筆記。下部隊後的任務大部分的工作都是機械性的，所以我會在執行任務時思考如何以JS製作出梯形星星或者提取特定字串等問題。
            畢竟身體受限，但是腦袋是自由的。漫長又無聊的生活，思考成為寶貴伴侶。
          </p>
          <h2 data-aos="zoom-in" className="storyTitle">
            從退伍後到現在的生活
          </h2>
          <p data-aos="fade-right" className="container-lg">
            四月中旬，我從軍隊退伍後，開啟了漫長的自學旅程。了解自己非天才型，而是努力型的人，所以我將基本功視為關鍵。
            不論課程中是否有難懂的地方，我都會用時間去理解，而不草率帶過。我學習的過程可能拉長，因為網課有時無法完全清晰講解，
            或者在實作時出現版本不一致的問題，導致Bug產生。當遇到問題時，我會自己搜尋資料，確保弄懂不懂的地方。
            自學初期，我就確定目標要爭取進入AppWork，原本計劃申請第22期，但在截止後才覺得自己具備完成一個完整全端網頁所需的知識，
            於是改為申請第23期。我意識到在AppWork申請者中不乏有頂尖學生和天才，作為普通人，我需要比他們多投入數倍的時間去備戰。我深知在報名前要打好基礎
            ，這樣在進度上才不會被拖累。
          </p>
        </div>
        <div className="container-lg" style={{ paddingTop: "2rem" }}>
          <h1 data-aos="zoom-in">選擇AppWork的原因</h1>
          <div data-aos="fade-right" className="container-lg">
            <p data-aos="fade-right">
              我選擇AppWork的原因主要是因為它擁有高達90%的就業錄取率。作為一名非本科生，我深知在應徵與自己學科不相關的職位時可能會受限。
              且我的學校背景並不突出，這可能在面試官看到我的履歷時帶來挑戰。然而，我不想被這些因素阻礙，我知道在AppWork中看中的是關於轉職者對於轉職的心態與決心，
              所以我渴望在AppWork中展現我的決心和實力。
              <br />
              AppWork強調自主學習的能力，我在課程說明會上了解到，這裡不只是機械地傳授知識，而是透過每日作業培養學員獨立思考的能力。
              此外，AppWork提供同學間的互動，可以從不同角度討論問題，這種學習方式深得我心。我作為一個曾經擔任過老師職位的人更加認同這種教學方式，因為在每次的實作中，
              我都能獲得寶貴的經驗和知識，相較於傳統課堂進度的學習，更能體察到自身的不足，並努力彌補所缺乏的技能。
              <br />
              雖然我的目標是後端工程師，但我依然認為對於前端的知識必不可少，後端人員若是可以理解在前端中的功能，如uesEffect
              or useState等能幫助前端人員更有效率地達成目的，
              所以我嘗試運用React的功能創建屬於自己的前端個人網站。
              這次嘗試讓我深刻體會到在版面配置和模塊使用方面的不足，通過深入研究Bootstrap和Bootstrap-react的範例，
              我理解了每個屬性在Class中的使用，並試圖理解他們設計的目的和效果。最終，我完成了一個自己的前端成品。
              <br />
              在我看來，工程師的核心能力在於面對各種挑戰時能以創新的思維來解決問題。克服複雜的難題，並獲得成就感和自豪，正是我所渴望的工作環境。
              我希望能在工程領域發揮創造力和技能，解決現實生活中的難題，持續追求進步和成長。對我而言，工程師的角色不僅僅是一份職業，更是一種充滿挑戰和機遇的生活態度。
              我期待在這個領域中不斷學習成長，挑戰自我極限，並為社會創造更多的價值與貢獻。我深信，我能成為一位擁有創新思維的工程師。
            </p>
          </div>
        </div>
        <div className="container-lg" style={{ paddingTop: "2rem" }}>
          <h1 data-aos="zoom-in" className="Atitle">
            未來規劃
          </h1>
          <div data-aos="fade-right" className="container-lg">
            <p>
              目前，我雖然距離成為一位能夠獨當一面的工程師還有一段路要走。首要的是，我將進一步累積作品集。已經有初步構想了下一個作品，
              是一個以現有食材為基礎的查詢網站。這個網站的目標是為像我這樣會自己料理的普通人提供便利，當食材不足時，可以提供替代的調味料或青菜選項。
              <br />
              另外，我計畫對目前的教學網站進行優化和添加新功能，以提升其完整性。我也會創建其他網頁全端的作品，這樣可以從不同角度思考問題，
              例如如何更有效地儲存資料，或者如何在前端呈現動態效果。
              <br />
              作為一位非本科生，我深知自己在後端工程師相關的基礎技能方面可能尚有不足，例如資料結構和演算法等。若我無法參加AppWork，我計畫繼續執行上述計劃。
              之後，我將參加企業媒合活動，力求爭取在相關領域工作的機會，以將自己從初學者提升到初級水平。我知道，工程師的實力主要來自於實際的工作經驗，因此我將不斷實踐以學習。
              <br />
              我並不僅局限於後端工作，一旦在後端領域達到一定水平，我會擴展到其他領域，如資訊安全或人工智慧等。如果有機會，我會繼續進修，以不斷提升自己。
              工程師的道路充滿挑戰與機會，我期待通過持續的學習和實踐，成為一位具有創新思維的工程師。
            </p>
          </div>
        </div>
      </div>

      <div className="container-lg" style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in" className="Atitle">
          我處理問題方式
        </h1>
        <div className="container-lg">
          <div className="container row row-cols-1 row-cols-sm-2 ProblemBox">
            <div data-aos="zoom-out">
              <h4>理解問題</h4>
              <p className="inText">
                理解問題的要求和限制。
                釐清問題是什麼，要解決什麼，並且收集所有可能有助於解決問題的信息和數據
              </p>
            </div>
            <div data-aos="zoom-out">
              <h4>制定計畫</h4>
              <p className="inText">
                根據問題的性質和需求，制定一個解決問題的計劃。
                確定解決問題的步驟和方法，
              </p>
            </div>
            <div data-aos="zoom-out">
              <h4>執行計畫</h4>
              <p className="inText">
                根據計劃一步一步地進行解題。
                確保按照計劃進行，並紀錄每一步的結果。
              </p>
            </div>
            <div data-aos="zoom-out">
              <h4>檢查結果</h4>
              <p className="inText">
                在解題過程中，經常檢查結果和進展。
                確保你正確地解決了問題，並且沒有錯誤。
              </p>
            </div>
            <div data-aos="zoom-out">
              <h4>調整和優化</h4>
              <p className="inText">
                根據檢查的結果進行調整和優化。
                持續改進我的解決方案，直到得到滿意的結果。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg" style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in" className="Atitle">
          自學的經驗和困難的解決過程
        </h1>
        <div data-aos="fade-right" className="container-lg">
          <p className="container-lg">
            在自主學習的過程中，我發現其中最具挑戰的情況通常涉及解決廣泛且複雜的問題。這樣的問題常常需要耗費大量時間來尋找解決方法。
            例如，我在建立這份履歷時遇到的問題。最初，我計劃使用Heroku建立靜態網站，但由於Heroku停止了免費服務，我需要尋找其他的託管服務。
            我嘗試使用GitHub
            Pages，但也遇到了新的問題。儘管我多次嘗試使用gh-pages來建立，GitHub
            Pages仍無法正常顯示我的內容，並且沒有顯示任何錯誤訊息。
            <br />
            在面對這個問題時，我根據可能的解決方案和參考網上的討論做了多次調整和嘗試，但問題未能解決。最終，我採取了重新建立一個新的React
            App的方法，
            並將原有的內容逐步複製到新的App中。我從中找到了問題所在，原來是在使用BrowserRouter放置Routes時出現了問題，而GitHub
            Pages並不支援單頁應用（SPA）的路由設定。
            <br />
            雖然這次經驗對我來說是一個全新的挑戰，但最終我選擇使用Render來托管我的履歷和作品，
            這在當時被證實是可行的。從這次經歷中，我學會了在面對困難時轉變思維，尋找替代方案。
            <br />
            若當時能有人一起討論這個問題，或許能更早地找到解決方案，節省了大量的時間和精力。
            這也讓我深刻認識到合作和共享想法的重要性。
          </p>
        </div>
      </div>
      <div className="container-lg" style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in" className="Atitle">
          我人生的價值觀
        </h1>
        <div data-aos="fade-right" className="container-lg">
          <h2>理性溝通</h2>
          <p className="container-lg">
            我認為在未來加入任何公司或團隊時，與他人的合作至關重要。不同成長背景和性格的人會有不同的觀點和意見。
            每個人提出意見都是從他們獨特的角度來看事情，雖然這些意見可能不是最佳的，但保持開放的心態去聆聽他人的觀點是非常有價值的。
            團隊夥伴之間的溝通和協作有助於團隊的凝聚力和效能。即使意見不同，
            透過溝通可以讓我們更好地理解彼此，尋找共同點，並最終達到共同的目標。開放地接受不同意見，有助於激發創意，
            解決問題，並促進整個團隊的成長和成功。
          </p>
        </div>
        <div data-aos="fade-right" className="container-lg">
          <h2>持續學習</h2>
          <p className="container-lg">
            人生中的每次體驗和學習都是有價值的，即使當下可能看不到它們的用處，但它們會在未來派上用場。每一個時刻和學到的知識都豐富了我們的內在世界，並在日後的生活中發揮影響。
            來自應用外語系的我在學習各種模組的文件時較得心應手，且對於探索最新功能也能迅速掌握。
          </p>
        </div>
        <div data-aos="fade-right" className="container-lg">
          <h2>創新思維</h2>
          <p className="container-lg">
            在生活中保持開放心態，不斷尋找新方法解決問題，追求個人成長，面對挑戰時勇於嘗試新思維和方法。就像烹飪，同一食材不同調味和方式可得不同結果。
            在程式中，答案常來自不斷碰壁，我樂於嘗試新方法，不僵化地認為某特定寫法為唯一正確解。
          </p>
        </div>
      </div>
      <div className="container-lg" style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in" className="Atitle">
          最後感謝...
        </h1>
        <div data-aos="fade-right" className="container-lg">
          <p>
            非常感謝您閱讀完我的網站，我要衷心感謝您的耐心。我了解自己容易感到緊張，這在面試當天可能會表現得更加明顯（如果有機會進行面試的話）。
            因此，我希望透過這個網站，盡量將我想傳達的內容和我心路的歷程呈現出來。
            整個網站的字數總共超過了4000多字，希望能盡量的表達我對於這段旅程的誠意與決心。再次由衷地感謝您的閱讀與關注！
            <br />
            <br />
            <br />
            <br />
            "我夢想要成為一位工程師，且正走在成為一位工程師的路上。"
            <br />
            --"不要僅僅活在夢想中，踏出那一步，讓夢想成真。" – 布雷特·艾略特
          </p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ResumeComponent;
