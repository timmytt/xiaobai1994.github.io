// function Slide(dom) {
//   this.start_y = null;
//   this.end_y = null;
//   this.render(dom);
// }
// Slide.prototype = {
//   // 动态创建下拉刷新特效
//   render: function(dom) {
//     console.log(dom);
//     var body = document.getElementsByTagName("body");
//     var newItem = document.createElement("div");
//     newItem.className = "slide-wrap";
//     newItem.innerHTML =
//       '<div class="slided">正在刷新。。。</div>' +
//       '<div class="sliding">下拉刷新</div>';
//     dom.parentNode.insertBefore(newItem, dom);
//     var dom2 = document.getElementsByClassName("slide-wrap");
//     this.slide_start(dom2);
//   },
//   slide_start: function(dom2) {
//     var _this = this;
//     document.addEventListener("touchstart", function(evt) {
//       var touch = evt.touches[0]; //获取第一个触点
//       _this.start_y = Number(touch.pageY);
//     });
//     _this.slide_move(dom2);
//   },
//   slide_move: function(dom2) {
//     var _this = this;
//     document.addEventListener("touchmove", function(evt) {
//       dom2[0].childNodes[0].style.display = "none";
//       var touch = evt.touches[0]; //获取第一个触点
//       _this.end_y = Number(touch.pageY) - _this.start_y;
//       if (_this.end_y > 5) {
//         dom2[0].childNodes[1].style.display = "block";
//         dom2[0].childNodes[1].style.height = _this.end_y + "px";
//         dom2[0].childNodes[1].style.lineHeight = _this.end_y + "px";
//       }
//     });
//     this.slide_end(dom2);
//   },
//   slide_end: function(dom2) {
//     var _this = this;
//     document.addEventListener("touchend", function(evt) {
//       if (_this.end_y > 100) {
//         dom2[0].childNodes[1].style.display = "none";
//         dom2[0].childNodes[0].style.display = "block";
//         console.log("开始刷新");
//         setTimeout(function() {
//           dom2[0].childNodes[0].style.display = "none";
//         }, 3000);
//       } else {
//         dom2[0].childNodes[1].style.display = "none";
//       }
//     });
//   }
// };
function Slide() {
  console.log(1)
}
module.exports.a = 1