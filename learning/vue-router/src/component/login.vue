<template>
  <div>
    <div @click="jump">跳转</div>
    <div :class="className">热更新1</div>
    <div @click="show">点击打开关闭</div>
    <transition name="fade">
      <form
        action=""
        class="sorceForm"
        v-show="showForm"
        ref="fromBlock"
        v-loading="loading"
      >
        <ul>
          <li v-for="item in list">{{ item }}</li>
        </ul>
        <div>
          <label for="input1">分数：</label>
          <input type="text" id="input1" />
        </div>
        <div>
          <label for="input1">语文：</label>
          <input type="text" />
        </div>
        <div>
          <label for="input1">数学：</label>
          <input type="text" />
        </div>
        <div>
          <label for="input1">英语：</label>
          <input type="text" />
        </div>
        <input type="submit" />
      </form>
    </transition>
    <div>hahah</div>
    <div>111</div>
    <div>{{ str }}</div>
    <img v-for="img in imgs" v-lazy="img" />
    <lazy-component @show="handler">
      <!-- <All></All> -->
    </lazy-component>
    <lazy-component>
      <img v-for="img in imgs" :src="img" />
    </lazy-component>
    <!-- <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    login-login-login hot 不需要写什么东西吗
    <All></All>

    <el-carousel height="450px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <el-row>
      <el-col
        :span="11"
        v-for="(o, index) in 2"
        :key="o"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row> -->
    <!-- <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i> -->
    <!-- <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <template>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </template>
    <router-view></router-view>
    <template>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="">A</el-checkbox>
        <el-checkbox label="复选框 B">B</el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </template>
    -->
  </div>
</template>

<script>
import All from "./all.vue";
import str from "./str.js";
import collapseTransition from "./animate";
import { Loading } from "element-ui";
export default {
  data() {
    return {
      str: str,
      loading: false,
      imgs: [],
      height: 0,
      className: "",
      showForm: false,
      radio: 1,
      checkList: [{ label: 2, value: 2 }, "复选框 B"],
      list: [],
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  watch: {
    radio(newValue, oldValue) {
      console.log(newValue);
      console.log(typeof newValue);
    },
    checkList(newValue) {
      console.log(newValue);
    },
    imgs(newValue) {
      console.log(newValue);
    }
  },
  methods: {
    jump() {
      //var params = { x: 1 };
      this.$router.push({ name: "All", params: { x: 1 } });
    },
    show() {
      this.showForm = !this.showForm;
      if (this.list.length === 0) {
        this.loading = true;
        setTimeout(() => {
          this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          this.loading = false;
        }, 2000);
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handler() {
      console.log("组件显示了");
    }
  },
  mounted() {
    console.log(this.str);
    setTimeout(() => {
      this.className = "animated infinite bounce delay-2s";
      this.imgs = [
        require("../assets/imgs/1.jpg"),
        require("../assets/imgs/2.jpg"),
        require("../assets/imgs/3.jpg"),
        require("../assets/imgs/4.jpg"),
        require("../assets/imgs/5.jpg"),
        require("../assets/imgs/6.jpg"),
        require("../assets/imgs/7.jpg"),
        require("../assets/imgs/8.jpg"),
        require("../assets/imgs/9.jpg"),
        require("../assets/imgs/10.jpg"),
        require("../assets/imgs/11.jpg")
      ];
    }, 2000);
  }
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-button {
  width: 200px;
}
img {
  width: 100%;
}

@-webkit-keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
.sorceForm {
  position: relative;
  overflow: hidden;
  height: 200px;
  border: 1px solid #000;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  height: 0;
}
/* .fade-enter-to,
.fade-leave {
  overflow: hidden;
  height: 0;
} */
</style>
