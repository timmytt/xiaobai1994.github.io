<template>
  <div>
    <div>{{ query }}</div>
    <div>这里是index页面</div>
    <div ref="change">{{ update }}</div>
    <router-link :to="{ name: 'childAComponent', params: { x: 1 } }"
      >A</router-link
    >
    <router-link :to="{ path: 'childB', query: { x: 1 } }">B</router-link>
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <!-- 设置过渡动画 -->
    <div @click="toA">A</div>
    <div @click="toB">B</div>
    <!-- <span>{{$route.path}}</span> -->
  </div>
</template>

<script>
props: ["query"];
export default {
  data() {
    return {
      name: "",
      update: "未改变"
    };
  },
  mounted() {
    //this.name = this.$route.params.name;
    console.log(this.props);
    console.log(this);
    console.log(window);
    //this.update = "已改变";
    setTimeout(() => {
      this.update = "已改变";
      console.log(this.$refs.change);
    }, 5000);
  },
  methods: {
    toA() {
      this.$router.push({ name: "childAComponent", params: { x: 1 } });
    },
    toB() {
      this.$router.push({ path: "childB", query: { x: 1 } });
    }
  },
  beforeUpdate() {
    console.log("会执行吗");
    console.log(this.update);
  },
  updated() {
    console.log(this.update);
  }
  // watch: {
  //   $route(to, from) {
  //     console.log(to, from);
  //     const toDepth = to.path.split("/").length;
  //     const fromDepth = from.path.split("/").length;
  //     this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
  //   }
  // }
};
</script>

<style></style>
