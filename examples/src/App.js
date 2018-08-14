import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Home from "./scenes/Home";
import AmbsaHero from "./scenes/AmbsaHero";
import AmbsaFooter from "./scenes/AmbsaFooter";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ScrollToTopRoute exact path={"/"} component={Home} />
          <ScrollToTopRoute exact path={"/ambsa-hero"} component={AmbsaHero} />
          <ScrollToTopRoute
            exact
            path={"/ambsa-footer"}
            component={AmbsaFooter}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-root"));
