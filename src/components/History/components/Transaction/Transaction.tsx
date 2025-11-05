function Transaction({ transaction }) {
  const isIncome = transaction.amount >= 0;
  return (
    <div className="flex my-3">
      <div className="flex w-full justify-between">
        <div>{transaction.text}</div>
        {isIncome ? (
          <div>${transaction.amount}</div>
        ) : (
          <div>-${-transaction.amount}</div>
        )}
      </div>
      {isIncome ? (
        <div className="w-2 bg-green-700 ml-2"></div>
      ) : (
        <div className="w-2 bg-red-700 ml-2"></div>
      )}
    </div>
  );
}

export default Transaction;
