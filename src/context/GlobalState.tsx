import { createContext, useReducer } from "react";
import type { ReactNode } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
  ],
  deleteTransaction: (id: number) => {},
  addTransaction: (transaction: { id: number; text: string; amount: number }) => {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransaction(id: number) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(transaction: { id: number; text: string; amount: number }) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
