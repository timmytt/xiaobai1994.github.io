// let str = require("./a.js");
// require("./index.css");
// require("./index.less");
// let fn = () => {
//     console.log("es6");
// };
// fn();
// let image = new Image();
// import logo from "./1.png"; //file loader会生成一张图片 把生成图片的名字返回回来。发射到build下  logo为url
// image.src = logo;
// document.body.appendChild(image);
// lalal

// image.src = './1.png'; //字符串 无法引入
// document.body.appendChild(image);

//图片也是模块 需要import或require
//css中background: url('./1.png')  css-loader自动处理
//html中引入 html-withimg-loader -D

//import Vue from "vue";
//import Vuex from "Vuex";
//import VueRouter from "vue-router";
import Vue from "vue";
import {
  store
} from "./store.js";
import "mint-ui/lib/style.css";
import "./index.less";
import ElementUI from "element-ui";
import Mint from "mint-ui";
Vue.use(Mint);
import "element-ui/lib/theme-chalk/index.css";
import {
  router
} from "./router.js";
// import Index from "./component/index.vue";
// import App from "./component/ele.vue";
// import Login from "./component/login.vue";
// import Test from "./component/test.vue";
// import Child from "./component/testChild.vue";
import All from "./component/all.vue";
import App from "./component/ele.vue";
Vue.component('App', App)
import VueTouch from "vue-touch";
Vue.use(VueTouch, {
  name: "v-touch"
});
// VueTouch.config.swipe = {
//   threshold: 50 //设置左右滑动的距离
// }
//Vue.use(Vuex);
Vue.use(ElementUI);
//Vue.component("All", All);  组件全局注册
//Vue.use(VueRouter);
// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     num: 1,
//     name: "xiangyi"
//   },
//   getters: {

//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     }
//   },
//   actions: {
//     increment(context) {
//       context.commit("increment");
//     }
//   }
// });
// const router = new VueRouter({
//   routes: [{
//       path: "/user",
//       component: Index,
//       meta: {
//         title: "xiangyi" //route可获取
//       }
//     },
//     {
//       path: "*",
//       component: Login
//     }
//   ]
// });
console.log(Vue)
console.log(Vue.prototype);
var vm = new Vue({
  el: "#app",
  store,
  router,
  render: c => c(All)
});