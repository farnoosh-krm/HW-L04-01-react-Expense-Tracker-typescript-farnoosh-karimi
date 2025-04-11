import React from "react";
import homeIcon from "../../images/home1.png";
import BillIcon from "../../images/bill.png";
import tableIcon from "../../images/table.png";
import toolIcon from "../../images/tools.png";
import signInIcon from "../../images/signIn.png";
import signUpIcon from "../../images/signUp.png";
import profileIcon from "../../images/profile.png";
import MenuItems from "./MenuItems";

const MenuBar = () => {
  return (
    <div className="flex flex-col  items-center gap-[15px] shadow-lg shadow-black/30 rounded-2xl w-[250px] h-[650px] bg-white/40 ">
      <ul>
        <li>
          <MenuItems icon={homeIcon} title={"Dashboard"} />
        </li>

        <li>
          <MenuItems icon={tableIcon} title={"Tables"} />
        </li>

        <li>
          <MenuItems icon={BillIcon} title={"Billing"} />
        </li>

        <li className="mb-9">
          <MenuItems icon={toolIcon} title={"RTL"} />
        </li>

        <label className="text-[14px] p-1 font-bold text-gray-600  border-b-4 ">
          ACCOUNT PAGES
        </label>
        <li className="mt-5">
          <MenuItems icon={profileIcon} title={"Profile"} />
        </li>
        <li>
          <MenuItems icon={signInIcon} title={"Sign In"} />
        </li>
        <li>
          <MenuItems icon={signUpIcon} title={"Sign Up"} />
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
