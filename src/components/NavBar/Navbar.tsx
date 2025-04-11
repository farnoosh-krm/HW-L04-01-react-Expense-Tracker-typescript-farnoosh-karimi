import React from "react";
import NavBarItems from "./NavBarItems";

const Navbar = () => {
  return (
    <div className="col-span-2 row-span-1 grid grid-cols-2  items-center h-[70px] p-2  ml-4  bg-white/50 rounded-2xl  shadow-lg shadow-black/30">
      <div className="text-base font-bold text-gray-600 justify-self-start">
        Dashboard
      </div>
      <div className="justify-self-end">
        <NavBarItems />
      </div>
    </div>
  );
};

export default Navbar;
