import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Back1 from "../back1/back1";
class Home extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/back1" component={Back1}></Route>
        </Switch>
      </div>
    );
  }
}
export default Home;
