import React from "react";
import Image from "../img/loader.png";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center py-5 my-auto">
      <div className="my-5">
        <img src={Image} alt="spinner" />
      </div>
    </div>
  );
};

export default Spinner;
