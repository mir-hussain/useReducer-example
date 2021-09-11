import React, { useReducer } from "react";

const initialValue = {
  counterOne: 0,
  counterTwo: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementCounterOne":
      return { ...state, counterOne: state.counterOne + action.value };
    case "decrementCounterOne":
      return { ...state, counterOne: state.counterOne - action.value };
    case "incrementCounterTwo":
      return { ...state, counterTwo: state.counterTwo + action.value };
    case "decrementCounterTwo":
      return { ...state, counterTwo: state.counterTwo - action.value };
    default:
      return state;
  }
};
const ExampleThree = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <div>
        <h1>This Counter is created with reducer.</h1>
        <h2>Count One = {count.counterOne}</h2>
        <button
          onClick={() => dispatch({ type: "incrementCounterOne", value: 1 })}
        >
          Increment Counter One
        </button>
        <button
          onClick={() => dispatch({ type: "decrementCounterOne", value: 1 })}
        >
          Decrement Counter One
        </button>
      </div>
      <div>
        <h1>This Counter is created with reducer.</h1>
        <h2>Count Two = {count.counterTwo}</h2>
        <button
          onClick={() => dispatch({ type: "incrementCounterTwo", value: 1 })}
        >
          Increment Counter Two
        </button>
        <button
          onClick={() => dispatch({ type: "decrementCounterTwo", value: 1 })}
        >
          Decrement Counter Two
        </button>
      </div>
    </div>
  );
};

export default ExampleThree;
