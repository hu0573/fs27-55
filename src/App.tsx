import { useState, useReducer } from "react";
import "./App.css";
import Balance from "./components/Balance";
import History from "./components/History";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="w-full felx justify-items-center">
        <div className="w-70 px-5">
          <h1 className="my-5 text-4xl">Header</h1>
          <Balance></Balance>
          <History></History>
          <Add></Add>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
