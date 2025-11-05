function Transaction({ transaction, onDelete }) {
  const isIncome = transaction.amount >= 0;
  return (
    <div className="flex my-3 shadow-md p-2 rounded-sm">
      <div className="flex w-full justify-between">
        <div>{transaction.text}</div>
        {isIncome ? (
          <div>${transaction.amount}</div>
        ) : (
          <div>-${-transaction.amount}</div>
        )}
      </div>
      <button
        onClick={() => onDelete(transaction.id)}
        className="text-red-500 hover:text-red-700 ml-2 cursor-pointer text-xl font-bold"
        aria-label="Delete transaction"
      >
        ×
      </button>
      {isIncome ? (
        <div className="w-2 bg-green-700 ml-2"></div>
      ) : (
        <div className="w-2 bg-red-700 ml-2"></div>
      )}
    </div>
  );
}

export default Transaction;
