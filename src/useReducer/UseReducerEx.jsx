import React, { useReducer } from "react";
import { PersonCard } from "./reducerComponents/PersonCard";
import "./usereducer.css";
import { initialState, reducer } from "./reducer";
import Counter from "./useCounter/Counter";
import { ContextProvider } from "./useCounter/CounterContext";
const UseReducerEx = () => {
  //   const [person, setPerson] = useState("");
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);

  const [state, dispath] = useReducer(reducer, initialState);
  const { person, loading, error } = state;

  const getPerson = async () => {
    const url = "https://randomuser.me/api/";
    // setLoading(true);
    dispath({ type: "START" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      //   setPerson(data.results[0]);
      //   setError("");
      dispath({ type: "SUCCESS", payload: data.results[0] });
      console.log(data.results[0]);
    } catch (error) {
      //   setError("Person data hasn't fetched!");
      //   setPerson("");
      dispath({ type: "FAIL", payload: "Person can not be fetched!" });
    }
    console.log(state);
  };

  return (
    <div className="person-data">
      <button disabled={loading} onClick={getPerson}>
        Get Person
      </button>
      <div>
        {error && <h1>{error}</h1>}
        {person && <PersonCard person={person} />}
      </div>
      <ContextProvider>
        <Counter />
      </ContextProvider>
    </div>
  );
};

export default UseReducerEx;
