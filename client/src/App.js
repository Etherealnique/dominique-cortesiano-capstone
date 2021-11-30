import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/Home";

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
