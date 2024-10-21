import React, { useContext } from "react";
import CounterContext from "./CounterContext";
import { type } from "@testing-library/user-event/dist/type";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <p>Counter : {state.count}</p>
      <button onClick={() => dispatch({type: "INCREMENT"})}>
        Increment
      </button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  );
};

export default Counter;
