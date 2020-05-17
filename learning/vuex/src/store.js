import {
  SOME_MUTATION
} from './someMutation'
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export let store = new Vuex.Store({
  state: {
    count: 0,
    num: 1,
    name: "xiangyi",
    goodList: [{
        name: "语文",
        price: 27
      },
      {
        name: "数学",
        price: 43
      },
      {
        name: "英语",
        price: 13
      },
    ]
  },
  getters: {
    filterGoods: state => num => { //第二个参数为getters  可以选择其他计算属性.  你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
      return state.goodList.filter(item => {
        return item.price > num //可给getters传参
      }).length
    },
    // filterGoods: state => { //第二个参数为getters  可以选择其他计算属性.  你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
    //   return state.goodList.filter(item => {
    //     return item.price > 20
    //   }).length
    // }
  },
  mutations: {
    increment(state, num) { //同步调用
      // 变更状态
      state.count += num
    },
    reduce(state) {
      // 变更状态
      state.count--
    },
    [SOME_MUTATION](state) {
      state.count--
    }
  },
  actions: {
    increment(context, num) { //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象。但不是store实例本身 {{commit}}
      setTimeout(() => {
        context.commit('increment', num)
      }, 1000)
      //context.commit('increment') //可以异步
    }
  }
  // 以载荷形式分发
  // store.dispatch('incrementAsync', {
  //   amount: 10
  // })
});