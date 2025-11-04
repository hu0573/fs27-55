import { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import History from "./components/History";
import Add from "./components/Add";

function App() {
  return (
    <div className="w-full felx justify-items-center">
      <div className="w-70 px-5">
        <h1>Header</h1>
        <Balance></Balance>
        <History></History>
        <Add></Add>
      </div>
    </div>
  );
}

export default App;
