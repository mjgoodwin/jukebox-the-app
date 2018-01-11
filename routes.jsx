import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContainer from "containers/AppContainer";
import About from "containers/About";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);
