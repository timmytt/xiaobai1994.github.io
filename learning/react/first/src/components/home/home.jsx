import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Back1 from "../back1/back1";
class Home extends Component {
  push = () => {
    // push会将浏览信息存进浏览器中，replace则不会
    this.props.history.push("/");
    // this.props.history.replace('/Home')
  };
  render() {
    return (
      <div>
        {/* home-home-home
        <button onClick={this.push}>点击返回首页</button> */}
        <NavLink to="/back1">back1</NavLink>
        <Switch>
          <Route path="/back1" component={Back1}></Route>
          {/* <Route path="/home/back1" component={Back1}></Route> */}
        </Switch>
      </div>
    );
  }
}
export default Home;
