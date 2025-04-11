import React, { useContext } from "react";
import { billContext } from "../Bills/BillsContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const BarCharts = () => {
  const { transactions } = useContext(billContext);

  const COLORS = [
    "#0088FE",
    "#cd033f",
    "#FFBB28",
    "#890593",
    "#3b9305",
    "#ff6600",
    "#00ffb3",
    "#ae00ff",
    "#ff002b",
    "#f6ff00",
    "#3700ff",
    "#FF69B4",
  ];

  return (
    <div className="flex flex-col w-full border-2 border-gray-400 h-full rounded-2xl p-2">
      <div>
        <p className="text-base font-bold text-gray-700 border-b-2 border-gray-700 text-left mb-2">
          Bar Chart
        </p>
      </div>

      <div className="flex flex-row gap-2.5 pr-4 text-sm">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={transactions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8">
              {transactions.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-4">
          <p className="font-bold text-gray-700">Legend</p>
          <ul className="list-disc pl-5">
            {transactions.map((entry, index) => (
              <li key={`legend-${index}`} className="flex items-center">
                <span
                  className="w-3 h-3 mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                {entry.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BarCharts;
