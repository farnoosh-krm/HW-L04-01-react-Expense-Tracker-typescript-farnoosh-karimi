import React, { useContext } from "react";
import { billContext } from "../Bills/BillsContext";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const PieCharts = () => {
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

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    );
  };

  return (
    <div className="flex flex-col w-full border-2 border-gray-400 h-full rounded-2xl p-2">
      <div>
        <p className="text-base font-bold text-gray-700 border-b-2 border-gray-700 text-left mb-2">
          Pie Chart
        </p>
      </div>

      <div className="flex flex-row gap-2.5 pr-4 text-sm">
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={transactions}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {transactions.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
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

export default PieCharts;
