<template>
  <!-- <div @click="changeClass" v-bind:class="{ bounce: true, animated: true }">
    {{ hello }}
    <div @click="show">点击弹框</div> -->

  <div>
    <div id="main"></div>
    <Test :params="params"></Test>
  </div>
</template>

<script>
import axios from "axios";
import mock from "../mock/demo.js";
import Test from "./test.vue";
var echarts = require("echarts");
export default {
  //   name: "Login"
  data() {
    return {
      // isActive: false,
      // hello: "hello xiangyi",
      params: null
    };
  },
  created() {
    //this.params = 1;
    // console.log(this.$route.params);
    // this.params = 1;
    // //alert(this.$route.params.x);
    // axios.get("/parameter/query").then(data => {
    //   console.log(data);
    // });
    // axios.get("/parameter/query1").then(data => {
    //   console.log(data);
    // });
  },
  mounted() {
    this.params = 2;
    var myChart = echarts.init(document.getElementById("main"));
    // 显示标题，图例和空的坐标轴
    myChart.showLoading();
    myChart.setOption({
      title: {
        text: "异步数据加载示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: []
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: []
        }
      ]
    });

    setTimeout(() => {
      myChart.hideLoading();
      myChart.setOption({
        xAxis: {
          data: ["语文", "数学", "应用", "体育", "物料"]
        },
        series: [
          {
            // 根据名字对应到相应的系列
            name: "销量",
            data: [18, 28, 38, 54, 55]
          }
        ]
      });
    }, 3000);
  },
  methods: {
    // show() {
    //   window.alert("hahah");
    // },
    // changeClass() {
    //   console.log(123);
    //   this.isActive = true;
    // }
  },
  components: {
    Test: Test
  }
};
</script>

<style>
#main {
  width: 600px;
  height: 300px;
}
</style>
