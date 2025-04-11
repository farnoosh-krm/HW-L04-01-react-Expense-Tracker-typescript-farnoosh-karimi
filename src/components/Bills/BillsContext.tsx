import React, { createContext, useEffect, useState } from "react";

export const billContext = createContext();

const BillProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  const [categories, setCategories] = useState([
    { id: 1, name: "food", value: "100" },
    { id: 2, name: "transportation", value: "50" },
    { id: 3, name: "rent", value: "80" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reminderMessage, setReminderMessage] = useState("");

  const closeReminder = () => setReminderMessage("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().slice(0, 10);

    const reminders = transactions.filter((item) => {
      if (item.repeat === "none") return false;

      const lastDate = new Date(item.date);
      const diffDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));

      if (item.repeat === "weekly" && diffDays >= 7) return true;
      if (item.repeat === "monthly" && diffDays >= 30) return true;

      return false;
    });

    if (reminders.length > 0) {
      setReminderMessage("📌 It's time to pay your recurring expenses!");
      // alert("📌 It's time to pay your recurring expenses!");
    }
  }, []);

  const addTransaction = (transaction) =>
    setTransactions([...transactions, transaction]);
  const addCategory = (category) => setCategories([...categories, category]);

  return (
    <billContext.Provider
      value={{
        transactions,
        addTransaction,
        categories,
        addCategory,
        searchQuery,
        setSearchQuery,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        reminderMessage,
        closeReminder,
      }}
    >
      {children}
    </billContext.Provider>
  );
};

export default BillProvider;
