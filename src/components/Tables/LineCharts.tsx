import React, { useContext } from "react";
import { billContext } from "../Bills/BillsContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineCharts = () => {
  const { transactions } = useContext(billContext);

  return (
    <div className="flex flex-col w-full border-2 border-gray-400 h-full rounded-2xl p-2">
      <div>
        <p className="text-base font-bold text-gray-700 border-b-2 border-gray-700 text-left mb-2">
          Line Chart
        </p>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={transactions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FF69B4"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
