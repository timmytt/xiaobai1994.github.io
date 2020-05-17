import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Back from "../back/back";
import Back1 from "../back1/back1";
import Home from "../home/home";
import App from "../app/app";
import "../app/app.css";
class Contain extends Component {
  componentDidMount() {
    console.log(this.props.store);
  }

  render() {
    return (
      <Switch>
        <Route path="/app" component={App}></Route>
        <Route path="/back" component={Back}></Route>
        <Route path="/back1" component={Back1}></Route>
        <Route path="/home" component={Home}></Route>
        <Redirect to="/back/"></Redirect>
      </Switch>
    );
  }
}
export default Contain;
