import React from "react";
import { useEffect } from "react";

const NotAdd = ({ AOS }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-lg" style={{ paddingTop: "2rem" }}>
      <h3 data-aos="zoom-in" className="Atitle">
        待新增
      </h3>
      <div data-aos="fade-right" className="container-lg">
        <p>待新增</p>
      </div>
    </div>
  );
};

export default NotAdd;
