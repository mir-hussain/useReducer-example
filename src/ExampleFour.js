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

const ExampleFour = () => {
  const [countOne, dispatchOne] = useReducer(reducer, initialValue);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialValue);
  return (
    <div>
      <div>
        <h1>This Counter is created with reducer.</h1>
        <h2>Count One = {countOne}</h2>
        <button onClick={() => dispatchOne("increment")}>Increment</button>
        <button onClick={() => dispatchOne("decrement")}>Decrement</button>
      </div>
      <div>
        <h1>This Counter is created with reducer.</h1>
        <h2>Count One = {countTwo}</h2>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      </div>
    </div>
  );
};

export default ExampleFour;
