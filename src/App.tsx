import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainMenu from './MainMenu';
import Fractions from "./Fractions";
import Factors from "./Factors";
import About from "./About";
import Home from "./Home";
import Division from './Division';
import Multiplication from "./Multiplication";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MainMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/factors">
            <Factors />
          </Route>          
          <Route path="/fractions">
            <Fractions />
          </Route>
          <Route path="/division">
            <Division />
          </Route>
          <Route path="/multiplication">
            <Multiplication />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;