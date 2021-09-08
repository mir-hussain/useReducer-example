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
const ExampleTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>This Counter is created with reducer.</h1>
      <h2>Count = {state.counter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
    </div>
  );
};

export default ExampleTwo;
