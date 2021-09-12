import React, { useContext } from "react";
import { CounterContext } from "../../ExampleFive";

const ExampleFiveGrandChild = () => {
  const dispatch = useContext(CounterContext);
  return (
    <div>
      <h1>This is example 5 grand child</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
};

export default ExampleFiveGrandChild;
