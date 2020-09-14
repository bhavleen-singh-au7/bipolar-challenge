import React, { useEffect } from "react";

const Photo = ({ item, key }) => {
  useEffect((options) => {
    const M = window.M;
    var elems = document.querySelectorAll(".materialboxed");
    var instances = M.Materialbox.init(elems, options);
  }, []);

  return (
    <img
      src={item}
      key={key}
      alt="myImg"
      width="250px"
      height="250px"
      className="materialboxed my-3 z-depth-3 rounded"
    />
  );
};

export default Photo;
