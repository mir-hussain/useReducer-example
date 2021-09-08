import React, { useReducer } from "react";

const initialValue = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    default:
      return state;
  }
};
const ExampleThree = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>This Counter is created with reducer.</h1>
      <h2>Count = {count.counter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
    </div>
  );
};

export default ExampleThree;
