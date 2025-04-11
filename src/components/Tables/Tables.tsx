import React from "react";
import PieChart from "./PieCharts";
import BarChart from "./BarCharts";
import LineCharts from "./LineCharts";

const Tables = () => {
  return (
    <div className=" bg-white/30 col-span-2 row-span-3 ml-4 rounded-2xl p-4 shadow-lg shadow-black/45">
      <div className="flex flex-row gap-7">
        <PieChart />
        <LineCharts />
        {/* <BarChart /> */}
      </div>
    </div>
  );
};

export default Tables;
