import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/ChildComponents/Navbar";
import ExampleFive from "./ExampleFive";
import ExampleFour from "./ExampleFour";
import ExampleOne from "./ExampleOne";
import ExampleSix from "./ExampleSix";
import ExampleThree from "./ExampleThree";
import ExampleTwo from "./ExampleTwo";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/example-one' component={ExampleOne} />
        <Route path='/example-two' component={ExampleTwo} />
        <Route path='/example-three' component={ExampleThree} />
        <Route path='/example-four' component={ExampleFour} />
        <Route path='/example-five' component={ExampleFive} />
        <Route path='/example-six' component={ExampleSix} />
      </Switch>
    </Router>
  );
};

export default App;
