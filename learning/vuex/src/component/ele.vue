<template>
  <div>
    <button @click="back">路由后退</button>
    <button @click="go">路由前进</button>
    <!-- <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition> -->
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.goBack();
    },
    go() {
      this.$router.go();
    }
  },
  watch: {
    // $route(to, from) {
    //   let isBack = this.$router.isBack;
    //   if (isBack) {
    //     this.transitionName = "slide-right";
    //   } else {
    //     this.transitionName = "slide-left";
    //   }
    //   this.$router.isBack = false;
    // }
  }
};
</script>

<style>
.child-view {
  /* position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; */
  transition: all 1.5s cubic-bezier(0.55, 0, 0.1, 1);
  margin-top: 50px;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(500px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-100%, 0);
}
</style>
