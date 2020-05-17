<template>
  <div class="flexDiv">
    <div class="header">
      <mt-button type="primary" @click="bool = !bool">关闭footer</mt-button>
    </div>
    <div class="body" id="body">
      <App />
      <div class="liDiv" v-for="item in 15">1</div>
    </div>
    <div class="footer" v-if="bool">3</div>
  </div>
</template>

<script>
//import { Button } from "mint-ui";
export default {
  //   name: "Login"
  data() {
    return {
      bool: true
    };
  },
  mounted() {
    console.log(this);

    window.testFn = this.testFn;
    var obj = { x: 1 };
    var obj = JSON.stringify(obj);
    var x = 1;
    var a = document.createElement("a");
    a.innerHTML = "testAAA";
    a.setAttribute("onclick", `testFn(${obj})`);
    document.getElementById("body").appendChild(a);
    //alert(this.$route.params.x);
  },
  methods: {
    testFn(args) {
      //var args = JSON.parse(args);
      console.log(args);
      console.log(args.x);
      console.log(typeof args);
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
.flexDiv {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  height: 100px;
  background: red;
}
.footer {
  height: 100px;
  background: blue;
}
.body {
  background: yellow;
  overflow-y: scroll;
  flex: 1;
}
.liDiv {
  border-bottom: 1px solid #ccc;
  height: 50px;
  background: yellowgreen;
}
</style>
