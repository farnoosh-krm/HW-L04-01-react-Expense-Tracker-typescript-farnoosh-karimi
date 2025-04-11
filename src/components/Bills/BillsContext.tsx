import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from "react";

interface Transaction {
  id: number;
  title: string;
  value: number;
  date: string;
  repeat?: "none" | "weekly" | "monthly";
}

interface Category {
  id: number;
  name: string;
  value: string;
}

interface BillContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  categories: Category[];
  addCategory: (category: Category) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  reminderMessage: string;
  closeReminder: () => void;
}

export const billContext = createContext<BillContextType | null>(null);

interface BillProviderProps {
  children: ReactNode;
}

const BillProvider: FC<BillProviderProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    JSON.parse(localStorage.getItem("transactions") || "[]")
  );

  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "food", value: "100" },
    { id: 2, name: "transportation", value: "50" },
    { id: 3, name: "rent", value: "80" },
  ]);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [reminderMessage, setReminderMessage] = useState<string>("");

  const closeReminder = () => setReminderMessage("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    const now = new Date();

    const reminders = transactions.filter((item) => {
      if (item.repeat === "none") return false;

      const lastDate = new Date(item.date);
      const diffDays = Math.floor((now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

      if (item.repeat === "weekly" && diffDays >= 7) return true;
      if (item.repeat === "monthly" && diffDays >= 30) return true;

      return false;
    });

    if (reminders.length > 0) {
      setReminderMessage("📌 It's time to pay your recurring expenses!");
    }
  }, []);

  const addTransaction = (transaction: Transaction) =>
    setTransactions((prev) => [...prev, transaction]);

  const addCategory = (category: Category) =>
    setCategories((prev) => [...prev, category]);

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
