<template>
  <div>
    <!-- demo-demo-demo{{ a }}
    <router-view></router-view>
    <div @click="toBaiduParams">params</div>
    <div @click="toBaiduQuery">query</div> -->
  </div>
</template>

<script>
export default {
  props: ["params"],
  data() {
    return {};
  },
  created() {
    console.log(this.params);
  },
  mounted() {
    console.log(this.params);
  },
  methods: {
    // toBaiduParams() {
    //   this.$router.push({ path: "/login", query: { name: "xiangyi" } });
    // }
  },
  components: {
    //Child
  },
  watch: {
    params(newValue) {
      console.log(newValue);
    }
  }
};
</script>

<style></style>
