import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Home from "./scenes/Home";
import AmbsaHero from "./scenes/AmbsaHero";
import AmbsaFooter from "./scenes/AmbsaFooter";
import AmbsaNav from "./scenes/AmbsaNav";
import AmbsaBreadcrumbs from "./scenes/AmbsaBreadcrumbs";
import AmbsaArticle from "./scenes/AmbsaArticle";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ScrollToTopRoute exact path={"/"} component={Home} />
          <ScrollToTopRoute exact path={"/ambsa-hero"} component={AmbsaHero} />
          <ScrollToTopRoute exact path={"/ambsa-nav"} component={AmbsaNav} />
          <ScrollToTopRoute
            exact
            path={"/ambsa-footer"}
            component={AmbsaFooter}
          />
          <ScrollToTopRoute
            exact
            path={"/ambsa-breadcrumbs"}
            component={AmbsaBreadcrumbs}
          />
          <ScrollToTopRoute
            exact
            path={"/ambsa-article"}
            component={AmbsaArticle}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-root"));
