<template>
  <div class="pulldown">
    <div ref="bsWrapper" class="pulldown-bswrapper">
      <div class="pulldown-scroller">
        <div class="pulldown-wrapper">
          <div v-show="beforePullDown">
            <span>Pull Down and refresh</span>
          </div>
          <div v-show="!beforePullDown">
            <div v-show="isPullingDown">
              <span>Loading...</span>
            </div>
            <div v-show="!isPullingDown">
              <span>Refresh success</span>
            </div>
          </div>
        </div>

        <ul class="pulldown-list">
          <button @click="clickMe">click</button>
          <li v-for="i of dataList" :key="i" class="pulldown-list-item">{{ `I am item ${i} ` }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import ScrollBar from "@better-scroll/scroll-bar";
import PullDown from "@better-scroll/pull-down";
BScroll.use(PullDown);
BScroll.use(ScrollBar);
var fn = require("../utils/slide.js");
import { a } from "../utils/es6.js";
function getOneRandomList(step = 0) {
  const arr = Array.apply(null, { length: 30 + step }).map(
    (...args) => args[1]
  );
  return arr.sort(() => Math.random() - 0.5);
}

const TIME_BOUNCE = 800;
const TIME_STOP = 600;
const THRESHOLD = 70;
const STOP = 56;
let STEP = 0;

export default {
  data() {
    return {
      beforePullDown: true,
      isPullingDown: false,
      dataList: getOneRandomList()
    };
  },
  created() {
    this.bscroll = null;
  },
  mounted() {
    this.initBscroll();
    console.log(fn);
  },
  methods: {
    clickMe(e) {
      console.log(1);
      console.log(a);
    },
    initBscroll() {
      this.bscroll = new BScroll(this.$refs.bsWrapper, {
        scrollY: true,
        scrollbar: true,
        bounceTime: TIME_BOUNCE, //回弹动画时长800ms
        pullDownRefresh: {
          threshold: THRESHOLD, //顶部下拉距离确定下拉刷新时机
          stop: STOP //回弹停留的距离
        }
        //click: true
      });
      console.log(this.bscroll);
      this.bscroll.on("pullingDown", function() {
        console.log("触发了");
      }); //钩子 顶部下拉距离大于threshold值时 触发一次
      console.log(this.bscroll.maxScrollY);
      console.log(this.bscroll.minScrollY);
      var that = this;
      //this.bscroll.on("scroll", this.scrollHandler);
      // this.bscroll.on("touchEnd", function(pos) {
      //   console.log(pos.x, pos.y);
      //   console.log(that.bscroll.maxScrollY);
      // });
      this.bscroll.on("scrollEnd", function(pos) {
        console.log(pos.y);
      });
    },
    scrollHandler(pos) {
      console.log(pos.y);
    },
    async pullingDownHandler(pos) {
      console.log(pos);
      this.beforePullDown = false;
      this.isPullingDown = true;
      STEP += 10;

      await this.requestData();

      this.isPullingDown = false;
      this.finishPullDown();
    },
    async finishPullDown() {
      const stopTime = TIME_STOP; //600
      await new Promise(resolve => {
        setTimeout(() => {
          this.bscroll.finishPullDown(); //标记一次下拉动作结束
          resolve();
        }, stopTime);
      });
      setTimeout(() => {
        this.beforePullDown = true;
        this.bscroll.refresh(); //重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      }, TIME_BOUNCE); //800
    },
    async requestData() {
      try {
        const newData = await this.ajaxGet(/* url */);
        this.dataList = newData;
      } catch (err) {
        // handle err
        console.log(err);
      }
    },
    ajaxGet(/* url */) {
      return new Promise(resolve => {
        setTimeout(() => {
          const dataList = getOneRandomList(STEP);
          resolve(dataList);
        }, 1000);
      });
    }
  }
};
</script>
<style lang="less">
.pulldown {
  height: 100vh;
}
.pulldown-bswrapper {
  position: relative;
  height: 100vh;
  padding: 0 10px;
  border: 1px solid #ccc;
  overflow: hidden;
}
.pulldown-list {
  padding: 0;
}
.pulldown-list-item {
  padding: 10px 0;
  list-style: none;
  border-bottom: 1px solid #ccc;
}
.pulldown-wrapper {
  position: absolute;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  text-align: center;
  color: #999;
}
</style>
