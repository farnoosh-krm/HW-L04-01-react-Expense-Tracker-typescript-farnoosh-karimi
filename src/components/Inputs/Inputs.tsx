import React from "react";

const Inputs = ({ type, value, icon, placeholder, onchange, widthEnter }) => {
  return (
    <div className="relative">
      <img
        src={icon}
        className="absolute ml-2 left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-[25px] h-[25px]"
      />
      <input
        className="text-gray-500 border-2 m-1 mr-0 border-gray-300 bg-white/60 rounded-2xl shadow-lg shadow-black/10 h-7 focus:outline-1 pl-12 pr-2"
        type={type}
        placeholder={placeholder}
        value={value}
        style={{ width: widthEnter }}
        onChange={onchange}
      />
    </div>
  );
};

export default Inputs;
