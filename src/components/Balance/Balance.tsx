import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  function getBalance(): number {
    return transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
  }
  function getIncome(): number {
    return transactions.reduce(
      (acc, transactions) =>
        acc + (transactions.amount > 0 ? transactions.amount : 0),
      0
    );
  }
  function getExpense(): number {
    return transactions.reduce(
      (acc, transactions) =>
        acc + (transactions.amount < 0 ? -transactions.amount : 0),
      0
    );
  }
  useEffect(() => {
    setBalance(getBalance());
    setIncome(getIncome());
    setExpense(getExpense());
  }, [transactions]);

  return (
    <div className="my-5">
      <h2 className="text-2xl">Your Balance</h2>
      <h3 className="text-xl my-2">${balance}</h3>
      <div className="grid grid-cols-2 my-2">
        <div>
          <div className="font-bold text-green-700">Income</div>
          <div className=" text-green-700">${income}</div>
        </div>
        <div>
          <div className="font-bold text-red-700">Expense</div>
          <div className="text-red-700">${expense}</div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
