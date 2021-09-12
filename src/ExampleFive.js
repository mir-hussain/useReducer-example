import React, { createContext, useReducer } from "react";
import ExampleFiveChild from "./Components/ChildComponents/ExampleFiveChild";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const CounterContext = createContext(null);

const ExampleFive = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <CounterContext.Provider value={dispatch}>
      <div>
        <h1>This is parent component</h1>
        <h2>Count = {count}</h2>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
      </div>
      <ExampleFiveChild />
    </CounterContext.Provider>
  );
};

export default ExampleFive;
