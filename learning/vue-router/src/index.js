// let str = require("./a.js");
// require("./index.css");
require("./index.less");
require('./mock');
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

import Vue from "vue";
import VueRouter from "vue-router";
import Tabs from "./component/tabs.vue"
import Index from "./component/index.vue";
import App from "./component/ele.vue";
import Login from "./component/login.vue";
import Test from "./component/test.vue";
import Child from "./component/testChild.vue";
import All from "./component/all.vue";
import Out from "./out.vue";
import AxiosDemo from "./component/axiosDemo.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: "http://iph.href.lu/375x400",
  loading: "http://iph.href.lu/375x400",
  attempt: 1,
  lazyComponent: true
});
Vue.use(ElementUI);
//Vue.use(All)
Vue.component("All", All);
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [{
      path: "/tabs",
      component: Tabs,
    }, {
      path: "/all",
      component: All,
      name: 'All'
    },
    {
      path: "/login",
      component: Login
    },
  ]
  //   path: "/user",
  //   component: Index,
  //   meta: {
  //     title: "xiangyi" //route可获取
  //   }
  //   // props: (route) => ({
  //   //   query: route.query.q
  //   // })
  //   // props: {
  //   //   query: true
  //   // }
  //   //props路由传值 传给组件属性 很强。this.$attrs
  // },
  // {
  //   path: "/out",
  //   component: Out
  // },
  // {
  //   path: "/axiosDemo",
  //   component: AxiosDemo
  // },
  // {
  //   path: "/out",
  //   component: Out
  // },
  // {
  //   path: "/index",
  //   component: Index
  // },
  // {
  //   path: "/user/:name",
  //   component: Index,
  //   children: [{
  //       path: "childA",
  //       component: All,
  //       name: "childAComponent"
  //     },
  //     {
  //       path: "childB",
  //       component: Child
  //     }
  //   ]
  // },
  // {
  //   path: "*",
  //   component: Login
  // }
  //]
  // scrollBehavior (to, from, savedPosition) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({ x: 0, y: 0 })
  //     }, 500)
  //   })
  // } 异步滚动
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })
//
var vm = new Vue({
  el: "#app",
  router,
  render: c => c(App)
});