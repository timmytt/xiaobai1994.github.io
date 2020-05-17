import React, { Component } from "react";

class List extends Component {
  state = {
    count: 0
  };
  push = () => {
    // push会将浏览信息存进浏览器中，replace则不会
    this.props.history.push("/home");
    // this.props.history.replace('/Home')
  };
  static getDerivedStateFromProps() {
    console.log("生命周期更新了");
    return null;
  }
  updateState = num => {
    console.log(num);
    // this.setState({ count: this.state.count++ });
    // return function(num) {
    //   console.log(num);
    // };
  };
  render() {
    let his = this.props.history;
    return (
      <div>
        <button onClick={this.updateState(1)}>点击返回首页</button>
        {/* //push只能使用事件触发，直接在这里写带上括号会导致一直触发 */}
        <button onClick={his.goBack.bind()}>点击返回上一级</button>
        {/* //goBack可以使用.bind(),如果不是用的话会自动触发函数，导致一直跳转 */}
      </div>
    );
  }
}
export default List;
