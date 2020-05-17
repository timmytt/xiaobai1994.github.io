let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin"); //可以多个 抽离成多个css
let VueLoaderPlugin = require("vue-loader/lib/plugin");
//cleanWebpackPlugin ./dist编译前删除dist目录  防止重复
//copyWebpackPlugin  将其他文件打包到dist doc 例如说明文档
//bannerPlugin  内置 引入webpack 版权声明
module.exports = {
  devServer: {
    //开发服务器的配置
    port: 8001,
    progress: true,
    contentBase: "./dist"
  },
  //   mode: "development", //模式 开发 生产
  mode: "production",
  entry: "./src/main.js", //入口
  devtool: "source-map", //源码映射   生成map文件   //eval-source-map 生成的map文件会放在文件中！   //'cheap-module-source-map 产生map不会映射 /'cheap-module-source-map'/ 文件中 没有映射
  // watch:true,  实时编译打包
  //watchOptions:{
  //   poll:1000
  //  aggreateTimeout：500    防抖
  // ignored：/node-modules/  不需要监控
  //},
  //   resolve: {
  //     //默认去node module的package.json下查找 main指向的目录。import ‘bootstrap’ 通常会引入dist下的js。可以 ‘bootstrap/dist/css/bootstrap.css’
  //     //modules: [path.resolve('node_module')], //文件查找规则   import ‘无路径’ 是已经安装了的模块
  //     extensions: ["js", "vue", "json"],
  //     alias: {
  //       vue$: "vue/dist/vue.esm.js"
  //     }
  //     // alias: {
  //     //     bootstrap: 'bootstrap/dist/css/bootstrap' //引入文件的别名
  //     // },
  //     // mainFields: ['style', 'main'], //查找规则 入口文件的名字。主入口字段 先找style再找main对应的文件
  //     // mainFiles: [], //如何文件的名字 index.js
  //     // extensions: ['js', 'css', '.json'] //在引入文件不写后缀的时候，一个个类型的找
  //   },
  performance: {
    hints: false, //"warning", // 枚举  性能提示。打包入口和生成文件体积限制webpack打包后的生成文件和入口文件体积过大，超过了默认值。
    maxAssetSize: 300000, // 整数类型（以字节为单位）
    maxEntrypointSize: 500000000000000, // 整数类型（以字节为单位）
    assetFilter: function (assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    }
  },
  devServer: {
    proxy: {
      api: "http://localhost:3000" //访问api的都去3000找  {target:'',pathRewrite:{'api':''}}  无服端 mock数据 before(app){app.get()}  服务端启动webpack解决跨域
    }
  },
  output: {
    filename: "main.js", //打包后的名称
    //filename:'main.[hash:8].js',
    path: path.resolve(__dirname, "dist") //resolve  解析  以当前目录产生一个dist文件夹。绝对路径
    //publicPath :'www.baidu.com' //所有link script src都会加入前缀 适用于cdn优化
  },
  plugins: [
    new VueLoaderPlugin(),
    //插件
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true
        // collapseWhitespace:true
      }
      //hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css" //设置文件名和目录
    })
  ],
  module: {
    rules: [{
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)(\?\S*)?$/,
        loader: "url-loader",
        options: {
          limit: 4000 * 1024
        }
      },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)(\?\S*)?$/,
      //   //use: "file-loader"
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       //limit: 20000 * 1024,
      //       //outputPath: "/img/" //输出路径 img目录下  引入路径自动变化
      //       //publicPath:'' 图片设置路径 cdn 样式 js都可划分
      //     }
      //   } //小于200k转化为base64 否则还是引入图片 url-loader
      // },
      // {
      //   //eslint   再去官网下.eslintrc.json 代码风格配置
      //   test: /\.js$/,
      //   use: {
      //     loader: "eslint-loader",
      //     options: {
      //       enforce: "pre" //强制放在前面执行  顺序问题 post普通load之后执行
      //     }
      //   }
      // },
      {
        test: /.\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [] //小插件集合
          }
        }
        // include: path.resolve(__dirname, 'src'),  包含
        // exclude: /node.modules/ 不包含
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] //可以引入css模块  //插入style标签 style-loader
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"] //可以引入css模块  //插入style标签
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  }
};
//postcss-loader  autoprefixer css加前缀。postcss.config.js样式文件配置
//css 压缩 需要+js压缩
//babel-loader 转化的下载器
//@babel/core babel的核心模块
//@babel/preset-env 高级语法转化为低级语法
//es6 提案插件 装饰器插件 。  内置api例如*gen promise不转化报错  用@babel/plugin-transform-runtime -D  @babel/runtime -S注入的脚本 上线也需要
//实例上的方法  默认不解析 @babel/polyfill -S 解析。需要require
//引入全局的方法  例如jq 很多第三方模块依赖window上的jq  expose-loader 暴露全局的loader -D。 注入$。ProvidePlugin（window.$引用不到）
//externals 不打包
//打包多页应用
//Node环境能用ajax吗
//new webpack.DefinePlugin({
//DEV:JSON.stringify('dev')  定义不同环境的变量
//})
//webpack-merge 区分不同环境的变量
//noParse 不解析。优化  noParse：/jquery/例如不去解析jq中是否有依赖项
//匹配js时 exclude：/node_module/  忽略
//moment 时间插件的库
//ignorePlugin()  可作为忽略语言包的优化。moment中自动引入很多语言包 忽略
//happypack 多线程打包
//webpack自带优化  production 相对于 dev  不会打包没引入的模块tree-shaking把没用到的代码自动删除。import语法才可以
//es6会导出到dufault上  scope hosting 作用域提升。自动省略一些可以简化的代码
//多入口 抽离公共文件
//es6 草案语法  import('./source.js').then(data=>{console.log(1)}) 懒加载。vue react路由有使用
//热更新 只更新组件  浏览器不直接加载
//    if (module.hot) {
//      module.hot.accept(/* ... */)
// ... require()
//     }

//import只能放在顶层
//打包后自动上传文件
//vue-loader：解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的 Loader 去处理。
//vue-template-compiler：把 vue-loader 提取出的 HTML 模版编译成对应的可执行的 JavaScript 代码，这和 React 中的 JSX 语法被编译成 JavaScript 代码类似。预先编译好 HTML 模版相对于在浏览器中再去编译 HTML 模版的好处在于性能更好
//npm install babel-plugin-component -D 按需引入element-ui组件

//url-loader它除了做file-loader能做的事情，还能做除file-loader以外的事情。url-loader与file-loader的主要区别：url-loader会通过配置规则将一定范围大小的图片打包成base64的字符串，放到dist.js文件里，而不是单独生成一个图片文件。而file-loader在打包时一定会生成单独的图片文件。