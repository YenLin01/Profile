import React from "react";

const PorblemSolveComponent = ({ AOS }) => {
  return (
    <div classNameName="container-lg" style={{ paddingTop: "2rem" }}>
      <h3 data-aos="zoom-in" classNameName="Atitle">
        我處理問題方式
      </h3>
      <div classNameName="container-lg">
        <div classNameName="container row row-cols-1 row-cols-sm-2 ProblemBox">
          <div data-aos="zoom-out">
            <p>理解問題</p>
            <p classNameName="inText">
              對問題的要求和限制有一個清晰的理解。
              搞清楚問題是什麼，要解決什麼，並且收集所有可能有助於解決問題的信息和數據
            </p>
          </div>
          <div data-aos="zoom-out">
            <p>制定計畫</p>
            <p classNameName="inText">
              根據問題的性質和需求，制定一個解決問題的計劃。
              確定解決問題的步驟和方法，
            </p>
          </div>
          <div data-aos="zoom-out">
            <p>執行計畫</p>
            <p classNameName="inText">
              根據你的計劃一步一步地進行解題。
              確保按照計劃進行，並紀錄每一步的結果。
            </p>
          </div>
          <div data-aos="zoom-out">
            <p>檢查結果</p>
            <p classNameName="inText">
              在解題過程中，經常檢查你的結果和進展。
              確保你正確地解決了問題，並且沒有錯誤。
            </p>
          </div>
          <div data-aos="zoom-out">
            <p>調整和優化</p>
            <p classNameName="inText">
              根據檢查的結果進行調整和優化。
              持續改進我的解決方案，直到得到滿意的結果。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorblemSolveComponent;
