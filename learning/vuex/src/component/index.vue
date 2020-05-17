<template>
  <div>
    <div>{{ count }}----{{ num }}----{{ name }}</div>
    <ul>
      <li v-for="(item, index) in goodList" :key="index">
        {{ item.name }}{{ item.price }}
      </li>
    </ul>
    <transition name="slide-fade">
      <p v-if="show">
        hello今天礼拜六hello今天礼拜六hello今天礼拜六hello今天礼拜六
      </p>
    </transition>
    <v-touch
      v-on:swipeleft="swiperleft"
      v-on:swiperight="swiperright"
      class="wrapper"
    >
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </v-touch>

    <button @click="show = !show">动画效果</button>
    <span>价格超过{{ count }}元的有{{ filterGoods }}种</span>
    <button @click="addCount(5)">数字增加</button>
    <button @click="reduce">数字减少</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      show: true
    };
  },
  mounted() {},
  methods: {
    swiperleft: function() {
      //左划切换到goods页
      //this.$router.push({ path: "/" });
      console.log("左滑");
    },
    swiperright: function() {
      //右滑切换到detail页
      //this.$router.push({ path: "/user/2" });
      console.log("右划");
    },
    ...mapActions({
      addCount: "increment" // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
    // addCount() {
    //   this.$store.dispatch("increment", 5);
    // },
    // addCount() {
    //   this.$store.commit("increment", 3);
    // },
    // reduce() {
    //   this.$store.commit("reduce");
    // },
    reduce() {
      //对象方式的提交 载荷要是一个对象的话
      this.$store.commit({
        type: "reduce",
        amount: 10
      });
      // 最好提前在你的 store 中初始化好所有所需属性。 检测变化的注意事项！！
      // 当需要在对象上添加新属性时，你应该
      // 使用 Vue.set(obj, 'newProp', 123), 或者
      // 以新对象替换老对象。例如，利用对象展开运算符我们可以这样写：
      // state.obj = { ...state.obj, newProp: 123 }
    }
    // ...mapMutations([
    //   'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

    //   `mapMutations` 也支持载荷：
    //   'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    // ]),
    // ...mapMutations({
    //   addCount: "increment" // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    // })
  },
  // computed:...mapState({
  //   'count',
  //   'num',
  //   'name'
  // })
  // computed: mapState({
  //   count: function(state) {
  //     console.log(this); //vue实例
  //     return this.name;
  //   }
  // }),
  //computed: mapState(["count", "num", "name", "goodList"]), //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  computed: {
    ...mapState({
      //mapState 函数返回的是一个对象 参数可为数组  对象 // 传字符串参数 'count' 等同于 `state => state.count`
      count: state => state.count,
      num: state => state.num,
      name: function(state) {
        console.log(this); //指向vue实例
        return state.name;
      },
      goodList: "goodList"
    }),
    //...mapGetters({
    //也可以使用数组
    // filterGoods: "filterGoods" //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
    // 把 `this.filterGoods` 映射为 `this.$store.getters.filterGoods`
    //参数可为数组或对象
    //})
    filterGoods() {
      return this.$store.getters.filterGoods(this.count); // 在通过方法访问时，每次都会去进行调用，而不会缓存结果
    }
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   num() {
  //     return this.$store.state.num;
  //   }
  // },
  watch: {}
};
</script>

<style>
p {
  background: #aaa;
  height: 100px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
