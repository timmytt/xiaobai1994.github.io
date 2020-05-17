let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin"); //可以多个 抽离成多个css
let VueLoaderPlugin = require("vue-loader/lib/plugin");
let webpack = require('webpack')
//let OptimizeCss=require('optimize-css-assets-webpack-plugin')
//cleanWebpackPlugin ./dist编译前删除dist目录  防止重复   使用传入目录
//copyWebpackPlugin  将其他文件打包到dist doc 例如说明文档 from to
//bannerPlugin  内置 引入webpack 版权声明 webpack的方法
module.exports = {
  // optimization: {    js css优化项 压缩等
  //   minimizer: [
  //     new UglifyJsPlugin({   js压缩
  //       cache: true,
  //       parallel:true,
  //       sourceMap:true
  //     }),
  //     new OptimizeCss()  css压缩
  //   ]
  // },
  devServer: {
    //开发服务器的配置
    hot: true, // 只更新组件 不是全部刷新
    open: true,
    port: 8002,
    //progress: true, //现实进度条
    contentBase: "./dist", //静态服务的目录 相对路径
    //compress: true, //压缩
    proxy: {
      api: "http://localhost:3000" //访问api的都去3000找  {target:'',pathRewrite:{'api':''}}将api替换为空重写路径  无服端 mock数据 before(app){app.get()}  服务端启动webpack解决跨域
    }
  },
  mode: "development", //模式 开发 生产
  //mode: "production",
  entry: "./src/index.js", //入口
  output: {
    filename: "main.js", //打包后的名称
    //filename:'main.[hash:8].js', 生成8位hash戳
    path: path.resolve(__dirname, "dist") //resolve  解析  以当前目录vue-router产生一个dist文件夹。绝对路径 需要引入path模块 __dirname不加也可以
    //publicPath :'www.baidu.com' //所有link script src都会加入前缀 适用于cdn优化
  },
  //devtool: "source-map", //源码映射   生成map文件   //eval-source-map 生成的map文件会放在文件中！不会产生单独文件   //'cheap-module-source-map 产生map不会映射 不会产生列 产生单独文件  /'cheap-module-source-map'/ 不会产生文件 集成在打包后文件中 没有映射
  watch: true,
  //实时编译打包
  //watchOptions:{
  //   poll:1000
  //  aggreateTimeout：500    防抖
  // ignored：/node-modules/  不需要监控
  //},
  //   resolve: {  到哪里去找引入的第三方文件
  //     //默认去node module的package.json下查找 main指向的目录。import ‘bootstrap’ 通常会引入dist下的js。可以 ‘bootstrap/dist/css/bootstrap.css’
  //     //modules: [path.resolve('node_module')], //文件查找规则   import ‘无路径’ 是已经安装了的模块
  //     extensions: ["js", "vue", "json"],
  //     alias: {
  //       vue$: "vue/dist/vue.esm.js"
  //     }
  //     // alias: {
  //     //     bootstrap: 'bootstrap/dist/css/bootstrap' //引入文件的别名  默认先找node-modules里的
  //     // },
  //     // mainFields: ['style', 'main'], //查找规则 入口文件的名字。主入口字段 先找style再找main对应的文件
  //     // mainFiles: [], //入口文件的名字 默认在index.js里找
  //     // extensions: ['js', 'css', '.json'] //在引入文件不写后缀的时候，一个个类型的找
  //   },
  // performance: {
  //   hints: false, //"warning", // 枚举  性能提示。打包入口和生成文件体积限制webpack打包后的生成文件和入口文件体积过大，超过了默认值。
  //   maxAssetSize: 300000, // 整数类型（以字节为单位）
  //   maxEntrypointSize: 500000000000000, // 整数类型（以字节为单位）
  //   assetFilter: function (assetFilename) {
  //     // 提供资源文件名的断言函数
  //     return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
  //   }
  // },
  plugins: [
    new VueLoaderPlugin(),
    //插件
    new HtmlWebpackPlugin({
      template: "./src/index.html", //选择的模板
      filename: "index.html", //打包后的html文件名
      minify: {
        removeAttributeQuotes: true //压缩html文件  删除文件双引号
        // collapseWhitespace:true 折叠空行
      }
      //hash: true  引入js生成hash戳
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css" //设置文件名和目录 抽离css到dist下的什么目录
    }),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
    // new webpack.ProvidePlugin({  每个模块中都注入$
    //   $:'jquery'
    // })
  ],
  module: {
    //模块
    rules: [{
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: "/node_modules/"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)(\?\S*)?$/,
        loader: "url-loader",
        options: {
          esModule: false,
          limit: 0
        }
      },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)(\?\S*)?$/,
      //   //use: "file-loader"  大图片  小图片用url-loader 避免发生http请求
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       esModule: false,
      //     }

      //     //options: {
      //     //limit: 20000 * 1024,
      //     //outputPath: "/img/", //输出路径 img目录下  引入路径自动变化
      //     //publicPath: '' //图片设置路径 cdn 样式 js都可划分
      //     //}
      //   } //小于200k转化为base64 否则还是引入图片 url-loader
      // },
      // {
      //   //eslint   再去官网下.eslintrc.json 代码风格配置 拷贝到目录中
      //   test: /\.js$/,
      //   use: {
      //     loader: "eslint-loader", //校验语法规则   打包前校验语法合不合格
      //     options: {
      //       enforce: "pre" //强制放在前面执行  顺序问题 post普通loader之后执行。
      //     }
      //   },
      //   exclude: "/node_modules/", //不包含
      //   include: path.resolve(__dirname, "src") //包含
      // },
      {
        test: /.\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], //转化es6   插件库 预设
            plugins: [
              //[],
              //''
            ]
            //小插件集合 class语法
          }
        },
        // include: path.resolve(__dirname, 'src'),  包含
        exclude: "/node.modules/" //不包含
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] //可以引入css模块  //插入style标签在head中 style-loader   解析@import require css文件语法的  数组中可以使用{}
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"] // 创建link标签  //可以引入css模块  //使用postcss //插入style标签  注意顺序
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  }
};

//use:[{loader:'style-loader',options:{insertAt:'top'}},'css-loader','less-loader'] 将style标签插到html模板的最上面  可以再模板中加入style
//postcss-loader  autoprefixer css加前缀。postcss.config.js样式文件配置
//css 压缩 需要+js压缩
//babel-loader 转化的下载器
//@babel/core babel的核心模块
//@babel/preset-env 高级语法转化为低级语法  还有react预设
//es6 提案插件 装饰器插件 。  内置api例如*gen promise不转化报错  用@babel/plugin-transform-runtime -D  @babel/runtime -S注入的脚本 上线也需要
//实例上的方法  默认不解析 @babel/polyfill -S 解析。需要require
//引入全局的方法  例如jq 很多第三方模块依赖window上的jq  expose-loader 暴露全局的loader -D。 注入$。ProvidePlugin（window.$引用不到）
//externals:{jquery:'jquery'} 不打包 避免引入后打包
//css loader会自动处理图片引入
//html-withimg-loader  html使用loader
//打包多页应用
//Node环境能用ajax吗

//new webpack.DefinePlugin({
//DEV:JSON.stringify('dev')  定义不同环境的变量  全局都可以取到DEV这个变量  可以多个
//})
//webpack-merge 区分不同环境的变量  不同环境 多个config.js 变量 pro dev base基础的
//noParse 不解析。优化  noParse：/jquery/例如不去解析jq中是否有依赖项
//匹配js时 exclude：/node_module/  忽略
//moment 时间插件的库
//ignorePlugin()  可作为忽略语言包的优化。moment中自动引入很多语言包 忽略 忽略引用插件文件夹中不需要的部分 自己手动引用

//动态链接库 dllPlugin 抽离公共的引入 例如react react dom
//happypack 多线程打包  打包快

//webpack自带优化  production 相对于 dev  不会打包没引入的模块tree-shaking把没用到的代码自动删除。import语法才可以，require不行。production不会打包没使用的代码
//es6会导出到dufault上  scope hosting 作用域提升。自动省略一些可以简化的代码 减少声明 直接打印
//多入口 抽离公共文件 单页面应用不用
//es6 草案语法  import('./source.js').then(data=>{console.log(1)}) 懒加载 jsonp实现的动态加载 promise 配置预设 语法动态加载的预设。vue react路由有使用。路由懒加载就使用的import()语法
//热更新 只更新组件  浏览器不直接加载   有两个插件可配置
//    if (module.hot) {
//      module.hot.accept(/* ... */)
// ... require() 只能require查看
//     }
//import只能放在顶层
//打包后自动上传文件
//vue-loader：解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的 Loader 去处理。
//vue-template-compiler：把 vue-loader 提取出的 HTML 模版编译成对应的可执行的 JavaScript 代码，这和 React 中的 JSX 语法被编译成 JavaScript 代码类似。预先编译好 HTML 模版相对于在浏览器中再去编译 HTML 模版的好处在于性能更好
//npm install babel-plugin-component -D 按需引入element-ui组件

//url-loader它除了做file-loader能做的事情，还能做除file-loader以外的事情。url-loader与file-loader的主要区别：url-loader会通过配置规则将一定范围大小的图片打包成base64的字符串，放到dist.js文件里，而不是单独生成一个图片文件。而file-loader在打包时一定会生成单独的图片文件。

//webpack webpack-cli -D  安装webpack  webpack4   运行npx webpack 回去node modules下的bin目录找到webpack的cmd执行命令webpack.js

//tapable 类似node.js事件流  实现webpack  发布订阅模式


/**插件
 * new webpack.NamedModulesPlugin() 打印出哪个模块更新了
 * new webpack.HotModuleReplacementPlugin() 热更新模块
 * @babel/plugin-syntax-dynamic-import 语法动态导入插件  懒加载~
 * new Happypack({})  css js
 * new webpack.Dllplugin()
 * new webpack.DllReferencePlugin()
 * new webpackIgnorePlugin({})
 * new webpack.DefinePlugin({}) 定义环境变量  可全局拿到此值
 * cleanWebpackPlugin ./dist编译前删除dist目录  防止重复   使用传入目录
 * copyWebpackPlugin  将其他文件打包到dist doc 例如说明文档 from to
 * bannerPlugin  内置 引入webpack 版权声明 webpack的方法
 * new MiniCssExtractPlugin   css压缩
 * new providePlugin({$:'jquery'})  每个模块注入插件
 * MiniCssExtractPlugin 
 * VueLoaderPlugin
 * optimize-css-assets-webpack-plugin
 * new UglifyJsPlugin
 * new OptimizeCss()
 * 
 * 打包优化：
 * 1、多页面应用抽离公共代码  
 * 2、happypack 多线程打包 提高打包速度。 
 * 3、动态链接库 dllplugin 先将文件较大的打包起来 
 * 4、ignorePlugin() 可作为忽略语言包的优化 手动引入
 * 5、noParse 不解析。优化  noParse：/jquery/例如不去解析jq中是否有依赖项
 * 6、exclude: "/node.modules/"  include
 * 自带优化：Pro、模式的tree-shaking与scope hosting作用域提升
 * 
 * 
 * 定义不同环境 定义多个config   common dev pro
 * devserve:{before(app){app.get("/user",(req,res)=>{res.json()})}} 前端模拟数据
 * 打包多页面应用  source map watch 小插件 跨域配置 resolve
 * outputPath loader中。 publicePath loader中和output中
 * fileloader urlloader  图片加载  urlloader有大小限制 可转化为base64
 * html-withimg-loader  解决html中引入图片
 * style loader / css loader  / less loader  sass  stylus
 * link MiniCssExtractPlugin  抽离css
 * 全局变量引入expose-loader 暴露给全局的loader  externals:{}外部引用模块 不需要打包
 * postcss loader   postcss.config.js  autoprefixer
 * babel-loader 转化的下载器  @babel/core babel的核心模块  @babel/preset-env 高级语法转化为低级语法  还有react预设  装饰器 类
 * 
 * 
 * 
 * 
 * {
        test: /.\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"，”@babel/preset-react“], //转化es6 解析react语法  插件库 预设。用于module的rules
            plugins: [
              //[],
              //''
            ]
            //小插件集合 class语法
          }
        },
        // include: path.resolve(__dirname, 'src'),  包含
        exclude: "/node.modules/" //不包含
      },
 */