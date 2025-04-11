import React, { useContext, useState, FormEvent } from "react";
import { billContext } from "./BillsContext";
import Inputs from "../Inputs/Inputs";
import calenderIcon from "../../images/calender.png";
import titleIcon from "../../images/plus.png";
import valueIcon from "../../images/money.png";
import Button from "../Button/Button";

interface Transaction {
  id: number;
  title: string;
  value: number;
  date: string;
  repeat: string;
}

const EnterBills: React.FC = () => {
  const { addTransaction } = useContext(billContext) as {
    addTransaction: (transaction: Transaction) => void;
  };

  const [title, setTitle] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [repeat, setRepeat] = useState<string>("none");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !value || !date) return;

    addTransaction({
      id: Date.now(),
      title,
      value: parseFloat(value),
      date,
      repeat,
    });

    setTitle("");
    setValue("");
    setDate("");
    setRepeat("none");
  };

  return (
    <div className="bg-white/30 col-span-1 row-span-3 ml-4 rounded-2xl p-4 shadow-lg shadow-black/45 text-sm">
      <form onSubmit={handleSubmit}>
        <h2 className="text-gray-700 font-bold border-b-2 mb-3 p-2">
          ADD TRANSACTION
        </h2>
        <Inputs
          type="text"
          placeholder="title"
          value={title}
          icon={titleIcon}
          widthEnter="300px"
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <Inputs
          type="number"
          placeholder="value"
          value={value}
          icon={valueIcon}
          widthEnter="300px"
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <Inputs
          type="date"
          placeholder="date"
          value={date}
          icon={calenderIcon}
          widthEnter="300px"
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
        />
        <select
          className="ml-2 mt-1 p-1 rounded-2xl shadow-2xl shadow-gray-400 bg-white/60 border-2 border-blue-400 focus:outline-1"
          onChange={(e) => setRepeat(e.target.value)}
          value={repeat}
        >
          <option value="none">no repeat</option>
          <option value="weekly">weekly</option>
          <option value="monthly">monthly</option>
        </select>

        <Button type="submit" widthBtn="200px" label="Add Transaction" />
      </form>
    </div>
  );
};

export default EnterBills;
