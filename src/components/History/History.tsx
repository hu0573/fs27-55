import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Transation from "./components/Transaction";

function History() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <h2 className="text-2xl">History</h2>
      {transactions.map((item) => (
        <Transation transaction={item}></Transation>
      ))}
    </div>
  );
}

export default History;
