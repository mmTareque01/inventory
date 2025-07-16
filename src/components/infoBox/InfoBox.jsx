import React from "react";

const InfoBox = ({ bgColor, title, count, icon }) => {
  return (
    <div className={`
      w-full h-28 max-w-[22rem] mr-4 mb-4
      flex justify-start items-center
      text-white transform transition-all duration-300
      hover:-translate-y-1 hover:cursor-pointer
      md:hover:-translate-y-1.5
      ${bgColor}
    `}>
      <span className="px-8 text-white">{icon}</span>
      <span className="text-white">
        <p className="text-sm md:text-base">{title}</p>
        <h4 className="text-xl md:text-2xl font-semibold">{count}</h4>
      </span>
    </div>
  );
};

export default InfoBox;