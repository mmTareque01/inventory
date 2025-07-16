import React from "react";
import loaderImg from "../../assets/loader.gif";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="fixed w-screen h-screen bg-black bg-opacity-70 z-[9]">
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999]">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <img src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Loader;