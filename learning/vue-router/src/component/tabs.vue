<template>
  <div>
    <!-- <div class="horizontal-container">
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <div
            class="scroll-item"
            v-for="(item, index) in navigatorList"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div> -->
    <div class="core-container">
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <div class="scroll-item" v-for="(item, index) in 8" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      navigatorList: ["语文", "数学", "英语", "体育", "物理", "化学", "生物"]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollY: true,
        probeType: 2 // listening scroll hook
      });
      this._registerHooks(["scroll", "scrollEnd"], pos => {
        console.log("done");
        console.log(pos);
      });
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach(name => {
        this.bs.on(name, handler);
      });
    }
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.horizontal-container {
  .scroll-wrapper {
    width: 100%;
    margin: 0px auto;
    white-space: nowrap;
    border: 3px solid #42b983;
    border-radius: 5px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .scroll-content {
    display: inline-block;
    .scroll-item {
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      display: inline-block;
      text-align: center;
      padding: 0 20px;
    }
  }
}

.core-container {
  .scroll-wrapper {
    height: 500px;
    overflow: hidden;
    .scroll-item {
      height: 200px;
      line-height: 200px;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
      text-align: center;
      &:nth-child(2n) {
        background-color: #f3f5f7;
      }
      &:nth-child(2n + 1) {
        background-color: #42b983;
      }
    }
  }
}
</style>
