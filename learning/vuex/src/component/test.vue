<template>
  <div>
    demo-demo-demo{{a}}
    <router-view></router-view>
    <div @click="toBaiduParams">params</div>
    <div @click="toBaiduQuery">query</div>
  </div>
</template>

<script>
export default {
  data: {
    a: 123
  },
  methods: {
    toBaiduParams() {
      this.$router.push({ path: "/login", query: { name: "xiangyi" } });
    }
  },
  components: {
    //Child
  }
};
</script>

<style>
</style>