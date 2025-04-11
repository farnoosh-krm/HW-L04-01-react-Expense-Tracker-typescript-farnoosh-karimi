import React from "react";

const Button = ({ type, label, widthBtn, onclick }) => {
  return (
    <div>
      <button
        className="p-1.5 bg-indigo-800 rounded-2xl shadow-lg shadow-black/30 mt-2 ml-2 text-white font-bold hover:cursor-pointer hover:bg-indigo-950 active:bg-indigo-400"
        type={type}
        style={{ width: widthBtn }}
        onClick={onclick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
