import React, { useEffect } from "react";
import ImJi from "../img/MyPic.jpg";

const Pic = () => {
  useEffect((options) => {
    const M = window.M;
    var elems = document.querySelectorAll(".materialboxed");
    var instances = M.Materialbox.init(elems, options);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={ImJi}
        alt="myImg"
        width="200px"
        className="materialboxed"
      />
    </div>
  );
};

export default Pic;
