import React from "react";

const MenuItems = ({ icon, title }) => {
  return (
    <div>
      <a className="flex flex-row items-center gap-2 mt-4" href="#">
        <img
          className="w-[35px] h-[35px]  mr-2 border-2 rounded-[30%] p-0.5 border-gray-500 bg-white"
          src={icon}
          alt=""
        />
        <p className=" font-bold text-[15px] text-gray-800 border-b-2 border-gray-400">
          {title}
        </p>
      </a>
    </div>
  );
};

export default MenuItems;
