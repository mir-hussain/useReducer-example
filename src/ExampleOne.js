import React, { useReducer } from "react";

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
const ExampleOne = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>This Counter is created with reducer.</h1>
      <h2>Count = {count}</h2>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
};

export default ExampleOne;
