import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

function Add() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim() || !amount) {
      return;
    }

    addTransaction({
      id: Date.now(),
      text: text.trim(),
      amount: Number(amount),
    });

    setText("");
    setAmount("");
  };

  return (
    <div className="my-5">
      <h1 className="text-2xl mb-4">Add new transaction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="text" className="block text-sm font-medium mb-1">
            Text
          </label>
          <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
