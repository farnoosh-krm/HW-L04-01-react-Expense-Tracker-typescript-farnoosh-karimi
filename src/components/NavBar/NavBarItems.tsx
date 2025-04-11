import React, { useContext, useState, ChangeEvent } from "react";
import profileIcon from "../../images/profile.png";
import settingInIcon from "../../images/setting.png";
import bellInIcon from "../../images/bell.png";
import searchInIcon from "../../images/search.png";
import calenderIcon from "../../images/calender.png";
import Inputs from "../Inputs/Inputs";
import { billContext } from "../Bills/BillsContext";
import Button from "../Button/Button";

const NavBarItems: React.FC = () => {
  const { setSearchQuery, setStartDate, setEndDate } = useContext(billContext);

  const [date, setDate] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    setDate(newStartDate);
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    setDate(newEndDate);
  };

  return (
    <div className="flex flex-row text-xs gap-1">
      <Inputs
        type="text"
        placeholder="search..."
        icon={searchInIcon}
        onchange={handleSearch}
      />

      <Inputs
        type="date"
        placeholder="date"
        value={date}
        icon={calenderIcon}
        widthEnter="150px"
        onchange={handleStartDateChange}
      />
      <Inputs
        type="date"
        placeholder="date"
        value={date}
        icon={calenderIcon}
        widthEnter="150px"
        onchange={handleEndDateChange}
      />

      <a className="flex flex-row items-center" href="#">
        <img className="w-[25px] h-[25px]" src={profileIcon} alt="Profile" />
      </a>

      <a href="#">
        <img className="w-[25px] h-[25px] mt-2" src={settingInIcon} alt="Settings" />
      </a>

      <a href="#">
        <img className="w-[25px] h-[25px] mt-2" src={bellInIcon} alt="Notifications" />
      </a>
    </div>
  );
};

export default NavBarItems;
