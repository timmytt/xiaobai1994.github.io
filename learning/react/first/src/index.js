import React from "react";
import ReactDom from "react-dom";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
// import App from "./components/app/app";
import Contain from "./components/contain/contain";

function render() {
  ReactDom.render(
    <BrowserRouter>
      <Contain store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
}
render();
store.subscribe(render);
