import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { logicalExpression } from "@babel/types";
import Navbar from "./container/NavSection";
import Home from "../src/container/Login";
import Login from "../src/container/Login";
import SignUp from "../src/container/SignUp";
import NavSection from "../src/container/NavSection";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";


function App() {
  return (
      <Router>
        <NavSection />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
