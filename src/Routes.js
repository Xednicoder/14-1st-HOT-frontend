import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component="" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
