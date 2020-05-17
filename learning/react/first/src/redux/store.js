import { createStore } from "redux";
import { counter } from "./reducers";
const store = createStore(counter); //调用reducers得到初始状态 内部会第一次调用
console.log(store.getState());
export default store;
