import React, { Component } from "react";
import { INCREMENT, DECREMENT } from "../../redux/action-type";
import store from "../../redux/store";
//import { NavLink, Switch, Route, Redirect } from "react-router-dom";
// import Back from "../back/back";
// import Back1 from "../back1/back1";
// import Home from "../home/home";
import "./app.css";

export default class App extends Component {
  // state = {
  //   count: 0
  // };

  increment = () => {
    const num = this.select.value * 1;
    store.dispatch({ type: INCREMENT, data: num });
    //const count = this.state.count + num;
    //this.setState({ count });
  };
  decrement = () => {
    const num = this.select.value * 1;
    store.dispatch({ type: DECREMENT, data: num });
    //const count = this.state.count - num;
    //this.setState({ count });
  };
  incrementIfOdd = () => {
    const num = this.select.value * 1;
    const count = store.getState();
    //const count = this.state.count + num;
    if (count % 2 === 0) {
      //this.setState({ count });
      store.dispatch({ type: INCREMENT, data: num });
    }
  };
  decrementAsync = () => {
    setTimeout(() => {
      //const count = store.getState() + 3;
      const num = this.select.value * 1;
      store.dispatch({ type: INCREMENT, data: num });
      //const count = this.state.count + 3;
      //this.setState({ count });
    }, 1000);
  };
  render() {
    //const { count } = this.state;
    const count = store.getState();
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select name="" id="select" ref={select => (this.select = select)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIfOdd}> increment if odd</button>
          <button onClick={this.decrementAsync}>increment async</button>
        </div>
        {/* <NavLink to="/back">back</NavLink>
        <Switch>
          <Route path="/back" component={Back}></Route>
          <Route path="/back1" component={Back1}></Route>
          <Route path="/home" component={Home}></Route>
          <Redirect to="/back/"></Redirect>
        </Switch> */}
      </div>
    );
  }
}
