import { createContext, useReducer } from "react";
import { counterReducer, initialCount } from "./counterReducer";

const CounterContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialCount);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
export default CounterContext;
