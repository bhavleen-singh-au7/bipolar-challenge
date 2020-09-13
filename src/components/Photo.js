import React, { useEffect } from "react";
// import ImJi from "../img/MyPic.jpg";

const Photo = ({ item }) => {
  useEffect((options) => {
    const M = window.M;
    var elems = document.querySelectorAll(".materialboxed");
    var instances = M.Materialbox.init(elems, options);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={item}
        alt="myImg"
        width="300px"
        height="400px"
        className="materialboxed my-3 z-depth-3 rounded"
      />
    </div>
  );
};

export default Photo;
