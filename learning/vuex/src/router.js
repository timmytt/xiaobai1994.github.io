import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Index from "./component/index.vue";
//import Login from "./component/login.vue";
const Login = () => import('./component/login.vue') //import的动态加载
import Test from "./component/test.vue";
import Child from "./component/testChild.vue";
import All from "./component/all.vue";
VueRouter.prototype.goBack = function () {
    this.isBack = true //判断是否是返回操作
    window.history.go(-1)
}
VueRouter.prototype.go = function () {
    this.isBack = false //判断是否是返回操作
    window.history.go(1)
}
let routes = [{
        path: "/",
        component: All
    },
    {
        path: "/user",
        component: Index,
        meta: {
            title: "xiangyi" //route可获取
        }
    },
    {
        path: "*",
        component: Login
    }
]

export const router = new VueRouter({
    routes
});