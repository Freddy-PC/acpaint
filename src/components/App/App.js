import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Gallary from "../Gallary/Gallary";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App__page">
      <Header />
      <Switch>
        <Route path="/images">
          <Gallary />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
