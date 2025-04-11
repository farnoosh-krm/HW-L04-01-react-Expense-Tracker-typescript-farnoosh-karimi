import React, { useContext } from "react";
// import { billContext } from "./BillsContext";
import { billContext } from "./BillsContext";

const ReminderAlert = () => {
  const { reminderMessage, closeReminder } = useContext(billContext);

  if (!reminderMessage) return null;

  return (
    <div className="relative bg-yellow-300 text-gray-800 font-semibold p-4 rounded-xl shadow-lg shadow-yellow-400 my-4 text-center animate-bounce">
      <button
        onClick={closeReminder}
        className="absolute top-1 right-3 text-xl font-bold text-gray-700 hover:text-red-600"
      ></button>
      {reminderMessage}
    </div>
  );
};

export default ReminderAlert;
