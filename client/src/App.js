import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import CoinDetails from "./pages/CoinDetails";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/coins/:id" component={CoinDetails}></Route>
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
