import React, { useContext } from "react";
import { billContext } from "./BillsContext";
import ShowBills from "./ShowBills";

const BillsList = () => {
  const { transactions } = useContext(billContext);

  return (
    // <div className=" bg-white/30 col-span-1 row-span-3 rounded-2xl p-4 shadow-lg shadow-black/45">
    //   <h2 className="text-gray-700 font-bold border-b-2 mb-3 p-2">
    //     RECENT TRANSACTION
    //   </h2>

    //   {transactions.length > 0 ? (
    //     <div>
    //       {transactions.map((tr) => {
    //         <ShowBills key={tr.id} transactions={tr} />;
    //       })}
    //     </div>
    //   ) : (
    //     <p>No Data</p>
    //   )}
    // </div>
  );
};

export default BillsList;
