function Balance() {
  return (
    <div className="my-5">
      <h2 className="text-2xl">Your Balance</h2>
      <h3 className="text-xl my-2">$420.00</h3>
      <div className="grid grid-cols-2 my-2">
        <div>
          <div className="font-bold text-green-700">Income</div>
          <div className=" text-green-700">$450.00</div>
        </div>
        <div>
          <div className="font-bold text-red-700">Expense</div>
          <div className="text-red-700">$30.00</div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
