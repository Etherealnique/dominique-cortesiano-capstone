import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Blockchain from "./pages/Blockchain";
import VirtualWallet from "./pages/VirtualWallet";
import Header from "./components/Header/Header";
import CoinDetails from "./pages/CoinDetails";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blockchain" component={Blockchain} />
            <Route path="/virtualwallet" component={VirtualWallet} />
            <Route path="/coins/:id" component={CoinDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
