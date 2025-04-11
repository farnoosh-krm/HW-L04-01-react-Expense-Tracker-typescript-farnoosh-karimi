import React, { useContext, useState } from "react";
import profileIcon from "../../images/profile.png";
import settingInIcon from "../../images/setting.png";
import bellInIcon from "../../images/bell.png";
import searchInIcon from "../../images/search.png";
import calenderIcon from "../../images/calender.png";
import Inputs from "../Inputs/Inputs";
import { billContext } from "../Bills/BillsContext";
import Button from "../Button/Button";

const NavBarItems = () => {
  const { setSearchQuery, setStartDate, setEndDate } = useContext(billContext);
  const [date, setDate] = useState("");

  // const [localStart, setLocalStart] = useState("");
  // const [localEnd, setLocalEnd] = useState("");

  // const handleSearch = () => {
  //   setStartDate(localStart);
  //   setEndDate(localEnd);
  // };

  return (
    <div className="flex flex-row text-xs gap-1">
      <Inputs
        type={"text"}
        placeholder={"search..."}
        icon={searchInIcon}
        onchange={(e) => setSearchQuery(e.target.value)}
      />

      <Inputs
        type={"date"}
        placeholder={"date"}
        value={date}
        icon={calenderIcon}
        widthEnter={"150px"}
        onchange={(e) => {
          setStartDate(e.target.value);
          setDate(e.target.value);
        }}
      />
      <Inputs
        type={"date"}
        placeholder={"date"}
        value={date}
        icon={calenderIcon}
        widthEnter={"150px"}
        onchange={(e) => {
          setEndDate(e.target.value);
          setDate(e.target.value);
        }}
      />

      <a className="flex flex-row items-center" href="#">
        <img className="w-[25px] h-[25px]" src={profileIcon} />
        {/* <p className="text-gray-700 text-sm">Sign In</p> */}
      </a>

      <a href="#">
        <img className="w-[25px] h-[25px] mt-2" src={settingInIcon} />
      </a>

      <a href="#">
        <img className="w-[25px] h-[25px] mt-2" src={bellInIcon} />
      </a>
    </div>
  );
};

export default NavBarItems;
