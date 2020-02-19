import React from "react";
import "./App.css";
import Home from "../src/container/Home";
import Login from "../src/container/Login";
import SignUp from "../src/container/SignUp";
import NavSection from "../src/container/NavSection";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";


function App() {
  return (
      <Router>
        <NavSection />
        <Switch>
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
  );
}

export default App;
