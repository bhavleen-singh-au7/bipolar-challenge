import React from "react";
import Image from "../img/loader.png";

const Spinner = () => {
  return (
    <div className="centered">
      <div className="my-5">
        <img src={Image} alt="spinner" />
      </div>
    </div>
  );
};

export default Spinner;
