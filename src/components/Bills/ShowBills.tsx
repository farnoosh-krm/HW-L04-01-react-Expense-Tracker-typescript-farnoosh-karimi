import React, { useContext } from "react";
import { billContext } from "./BillsContext";

const ShowBills = () => {
  const { transactions, searchQuery, startDate, endDate } =
    useContext(billContext);

  const filtered = transactions.filter((item) => {
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.value.toString().includes(searchQuery);

    const itemDate = new Date(item.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const matchesDate =
      (!start || itemDate >= start) && (!end || itemDate <= end);

    return matchesQuery && matchesDate;
  });

  return (
    <div className=" bg-white/30 col-span-1 row-span-3 rounded-2xl p-4 shadow-lg shadow-black/45 text-sm">
      <h2 className="text-gray-700 font-bold border-b-2 mb-3 p-2">
        RECENT TRANSACTION
      </h2>

      <div className=" overflow-y-scroll h-45">
        <table className="border-collapse w-full bg-white/40 text-gray-600 text-sm">
          <thead>
            <tr>
              <th className="border-b-2 p-2 text-center">ID</th>
              <th className="border-b-2 p-2 text-center">Title</th>
              <th className="border-b-2 p-2 text-center">Value</th>
              <th className="border-b-2 p-2 text-center">Date</th>
              <th className="border-b-2 p-2 text-center">Repeat</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item, index) => (
              <tr key={item.id} className="hover:bg-indigo-300">
                <td className="border-b-2 p-2 text-center">{index + 1}</td>
                <td className="border-b-2 p-2 text-center">{item.title}</td>
                <td className="border-b-2 p-2 text-center">{item.value} $</td>
                <td className="border-b-2 p-2 text-center">{item.date}</td>
                <td className="border-b-2 p-2 text-center">{item.repeat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBills;
