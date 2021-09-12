import React, { useContext } from "react";
import { CounterContext } from "../../ExampleFive";
import ExampleFiveGrandChild from "./ExampleFiveGrandChild";

const ExampleFiveChild = () => {
  const dispatch = useContext(CounterContext);
  return (
    <div>
      <h1>This is example 5 child component</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <ExampleFiveGrandChild />
    </div>
  );
};

export default ExampleFiveChild;
