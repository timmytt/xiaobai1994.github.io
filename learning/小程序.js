    大小不超过8M
    用户体验优于H5 可以调用原生的各种接口
    一端开发多端运行

    双线程模型 沙盒运行环境 不能执行浏览器相关的接口， 例如跳转页面 操作dom等

    小程序开发主要分为三部分
    1、 WXML 类似html
    2、 WXSS 类似css 某些不支持 某些增强
    3、 页面脚本 js + WXS

    开发前准备
    1、 申请appID
    2、 下载开发者工具

    一个账号只能对应一个小程序
    企业账号等可以注册50个账号对应50个小程序
    个体户可以注册5个账号5个小程序

    工具 生成小程序码 扫描可进入
    小程序的后端服务方式选择小程序云可以共享数据

    普通编译和app.json可以指定初始化运行页面
    预览需要成员才可以预览

    小程序的json文件 页面入口。 格式严格要求 不能以逗号结尾对象 {
        "page": [
            //页面注册
        ]
    }
    默认显示第一个页面

    app三部分组成
    页面四部分组成
    page.js放page对象 例如
    page({
        data() {

        },
        //事件处理函数
    })
    内置组件 text button
    小程序的库可以用less sass 例如mpvue
    云开发可以存储服务数据

    wx: for = "{{students}}"
    自带的item展示
    与vue的区别 多了 {
        {}
    }
    少了item in
        事件绑定 bindtap = '事件名'
    js中没有methods 直接写事件。 获取data this.data.counter++不能用这种方式绑定
    小程序的事件改变数据 与react比较像
    this.setData({
        counter: this.data.counter++
    })

    vue的mvvm与小程序的mvvm
    小程序的VM用MINA框架实现 vue
    M装有数据
    View视图
    VM： vue和mina
    DOM listeners: ViewModel将DOM监听绑定到model层
    Data Bindings： ViewModel将数据的变量， 响应式的反应到view层

    命令式编程: 原生操作DOM
    变成
    声明式编程： 三大框架

    小程序的很多开发需求被封装到了配置文件里面

    四种配置
    app.json全局配置
    page.json页面配置
    详情中可以改项目版本。
    project.config.js项目信息配置
    sitmap.json搜索配置 曝光率 微信搜一艘时

    全局配置： networkTimeout 网络超时时间
    page： 页面注册 才能使用。 对应页面路径， 也可以直接在这里注册页面
    window： 页面上下拉ios默认有一个弹簧效果。 窗口配置
    backgroundColor: 拖拽漏出来的背景颜色
    enablePullDownRefresh： true / false 允许下拉刷新
    backgroundTextStyle： light / dark 拖拽漏出来的背景字体的颜色
    tabBar 底部tab栏展示
    最少两项 最多五项
        'selectColor': '', 选中颜色 'list': [{
            'pagePath': '',
            'text': '',
            'iconPath': '',
            'selectIconPath': ''
        }]
    还有边框颜色等等

    页面配置：
    基本上同全局， 不需要window。 优先级大于全局

    小程序的双线程模型
    小程序的宿主环境 微信客户端
    渲染层线程 用webview执行wxml wxss。 一个页面一个线程 可能多个。 渲染时转化成js对象再转化为真实DOM
    逻辑层线程 用jsCore执行js
    数据改变时 逻辑层改变数据生成新的对象进行diff算法更新

    app生命周期
    生命周期 关闭后会在后台存活两小时。 不会触发onLaunch但会触发onShow
    onHide onError发生错误执行
    还有一个onPageNotFound

    首先加载的页面没有在tabBar配置时 不会显示tabBar

    app中的生命周期 判断进入场景
    onLuanch onShow中 option scene场景判断
    获取用户信息 已授权才能调用 wx.authorize获取授权 wx.getSetting查询授权信息
    wx.getUserInfo({
        success: function (res) {
            console.log(res)
        }
    })
    获取授权按钮 用bindgetuserinfo绑定handleGetUserInfo函数 会传递event 中的detail 还要加open - type = getUserInfo
    open - data组件 直接展示用户信息 只用于展示 展示开放数据
    还可以定义全局数据 所有其他页面共享
    globalData: {
        name: 'xiangyi',
        age: 18
    }

    const app = getApp()
    console.log(app.globalData)
    onPullDownRefresh: function () {
            this.myRecordingA(1, answerUrl);
            wx.stopPullDownRefresh();

        },
        //myRecordingA 为自己定义的函数，作为刷新时请求服务器的方法
        // wx.stopPullDownRefresh(); 为停止当前页面下拉刷新

        调用app.js和page.js分别被称为注册一个小程序 注册一个页面

    页面的生命周期
    onLoad 1
    onShow 2
    onHide
    onUnLoad
    onReady 3 页面初次渲染完成（ 关闭页面后再进入不执行）
    不校验合法域名
    监听下拉刷新 滚动到底部 滚动 点击等等
    下拉刷新需要配置哦

    view = 》div 块级元素

    view hover - class 按下组件现实的样式
    hover - stay - time
    hover - start - time
    hover - stop - propagation true也可以写成 {
        {
            true
        }
    }
    传入数字类型bug 有时候不管用 用 {
        {
            0
        }
    }

    Image可以写成单双标签 任何设备下 有自己默认的大小320 * 240
    bindTap = "handleChooseAlbum"
    绑定点击事件
    wx.chooseImage({
        success: function (res) {
            //返回用户选择图片的地址
        }
    }) bug多 ios不出现 回调失败等
    bindLoad 监听图片加载完成 lazy - load
    show - menu - by - longpress 长按分享 识别小程序码
    mode 图片裁剪、 缩放的模式

    input 无边框背景 type 值类型
    confirm - type 键盘上确认的值
    bindInput

    scroll - view 局部滚动
    scroll - x scroll - y
    bindscroll 监听滚动事件


    共同属性 id class style hidden data - * bind -
        catch - 绑定的属性 阻止冒泡
    hidden与wx -
        if
    event.currentTarget.dataset.alphaBeta === 1
    样式 行内大于页面大于全局样式


    rpx
    iphone6宽度（ px） 的两倍

    @import '路径'
    导入样式 拆分样式 使用官方样式库 复制代码 好蠢

    wxml属性区分大小写？？？

    data、 可以用new Data()
    调用setInterval() 不用window 小程序没有DOM操作

    wx: for可以直接写数组 {
        需要双括号 遍历 "字符串"
        遍历数字 {
            {
                9
            }
        } {
            []
        }
    }

    block性能更高（ 标签） 只接受控制属性 块。 view组件需要渲染

    v -
        for -item = ''
    v -
        for -index = ''
    给item index起一个名字
    双层for 区分item

    模板语法在使用前不会进行任何渲染
    定义模板: < template name = "contentItem" > {
        {
            key
        }
    } < /template>  
    使用模板 < template is = "contentItem"
    data = "{{key:'xiangyi'}}" > < /template>  单双标签中均可  同一文件中写法 同一文件可使用多次。传值
    其他文件中
    import include均可引入
        <
        import scr = '' / > 绝对相对路径均可 使用模板方式一样 禁止递归导入。 导入template
    模板可以定义在单独的wxml文件中（ 不包含js、 json、 等）
    include导入整个wxml文档。 除了template和wxs标签。 可以递归的引入 可以写在标签内部 相当于拷贝
        <
        include src = '' / > 不能导入模板 template

    wxs weixin script 与js基本一致
    设计原因 wxml不能直接调用page、 component中的函数
    需要使用类似vue的过滤器 使用wxs 小程序没有过滤器
    运行环境 和其他js隔离 wxs不能调用其他js中定义的函数， 也不能调用小程序的api 不能作为组件事件回调。 在ios执行效率比js快2 - 20 倍 <
        wxs module = 'info' > js代码
    var message = 'xiangyi';
    module.export = {
            message: message
        } < /wxs>  module必须使用 私有 可以在一个文件中使用（写在wxml中） <
        view > {
            {
                info.message
            }
        } < /view>   common.js规范
    1、 在wxml中使用
    2、 真实开发中： 定义在单独的wxs文件中(不需要wxs标签包裹了) 再在其他wxml中引入 只能使用相对路径！！！ 好像不能使用es6语法 < wxs src = '/wxs/info.wxs'
    module = 'info' > < /wxs>导入
    只能使用绝对路径


    常见的事件类型
    bindtap = ''
    触摸后马上离开
    bind: tap = ''
    同bindtap
    catch: tap = ''
    catch 会阻止事件向上冒泡。
    都可以绑定事件
    bindinput bindblur bindfocus
    bindscrolltoupper顶部 bindscrolltolower滚动到底部 / 右边时触发

    事件对象
    timeStamp时间戳
    target 产生事件的节点
    currenttarget 触发事件的节点
    detail 点击的位置
    touches 数组 触摸点信息 多个手指。 当前有几个手指在小程序触摸， 触摸点信息
    changetouches 先触摸一个 再触摸一个 则显示后一个。 变化的 touchend中不同 为变化的那根手指。 上面为空
    一个手指完全一样

    事件参数传递用data - index = '{{index}}'
    data - item = '{{item}}'
    event.currentTarget.dataset 获取传参
    handeEvent(item, index) 不使用这种传参 奇葩 event.dataSet接受参数

        -
        bind: tap监听事件捕获 冒泡就是普通的
    bind一层层传递 用catch捕获 阻止事件的进一步传递。
    captrue捕获阶段监听事件


    v1 .6 .3 开始 支持组件化
    自定义组件中可以引入自定义组件
    wxml的标签名字只能用小写字母、 中划线、 下划线 {
        'component': true, //定义自定义组件  必须加才是自定义组件
        "usingComponents": {}
    }
    json中注册 {
        "usingComponents": {
            'name': '路径'
            标签名 相对绝对均可、 在母文件中引入
        }
    } <
    name > < /name>使用 name不能以wx开头
    可以在app.json全局注册
    自定义组件样式独立 内外部均不会相互影响 只针对class 外部的id不会影响内部
    组件内不能使用id 标签 属性选择器
    外部标签样式可以影响内部

    组件样式可以相互影响 options: {
        组件的Component(options: {}) js中设置
        styleIsolation: 'isolated' / 'apply-shared' / 'shared'
    }
    不能 页面可以影响组件 页面和组件均可以相互影响
    组件和模板的区别 模板没有自己的js css json文件。 而组件会全部引入 相当于一个页面


    组件交互
    组件中与data同级的Conmpnent中的properties: {}
    接受值。 页面给组件传递数据 < fu title = 'hahaha' > < /fu>
    接收值 其他与vue一样， 可以设置默认值
    title: {
            type: 'String',
            value: '',
            observer: function () {} //监听传过来的值的变化
        } {
            与properties 同级的externalClasses: ['titleClass'] 页面给组件传样式
            接收类名 样式传递

            向外传递事件 组件里的方法要写在methods里面
            this.triggerEvent('事件名') 其他与vue一样
            传递的数据在event里面

            this.selectComponent('class/id') 获取组件对象
            再用此对象.setData() 可以从组件外修改组件内的数据 不符合开发规范
            此对象.对象内的方法

            components中options需要配置multipleslots： true才能使用多插槽

            Component({}) Page({})
            component构造器 组件的方法要定义在methods里面 页面里不用
            observers 监听data 没有oldvalue。 不在传入值里面
            组件的生命周期
            1、 监听所在页面的生命周期
            pagelifetimes: {
                show() {

                },
                hide() {

                },
                resize() {

                }
            }
            2、 组件的生命周期
            lifetimes: {
                created() {
                    创建
                },
                attached() {
                    被添加到页面
                },
                ready() {
                    渲染
                },
                moved() {
                    移动
                },
                detached() {
                    移除
                }
            }

            小程序系统api
            请求
            wx.request({
                url: '',
                success() {}
            })
            要设置域名,
            不能与本机ip互相通信 服务器必须支持https wss。 不允许请求ip地址。 超时时间60s。 最多配置20个域名
            参数在url后面或者data中
            有的接口必须在header中加入token
            post请求参数不能放在url后面
            complete 成功失败都会执行

            四种弹窗api
            showToast showModal showLoading showActionSheet

            js直接用es6和common.js

            onShareAppMessage(options) {
                //右上角分享
                return {
                    title: '', //title
                    path: '', //点击进来的页面位置
                    imageUrl: '' //图片地址,可以用网络图片,没有他就截取页面

                }
            }
            写了就有分享 转发

            分享按钮button open - type = 'share'
            没有转发的选项。 直接选择好友分享

            登录流程
            开发者服务器 openid 每一个微信用户的唯一标识 也是微信服务接口的session key
            appid就是开发者ID
            wx.login() sussess回调获取code（ 向微信的服务器获取,
                有效时间5分钟） 发送给自己的服务器code + appid + appsercet（ 管理员身份扫描 小程序密匙） 发送给微信服务器 返回session_key + openid返回给自己的服务器 openid作为唯一标识
            也有可能openid + 账号 + 密码。 登录 自己的服务器返回token 前台获取保存在storage里 下次就可以直接使用token请求和查询


            登录和验证token有没有过期的接口

            对象的数据在小程序关闭后全部清除
            wx.setStorage({

            })
            异步
            wx.setStorageSync({

            })
            同步


            界面跳转
            navigator和wx API
                <
                navigator url = '' > < /navigator>  自动添加一个返回按钮
            组件的open - type = navigator默认值 / redirect(未关闭, 不允许跳到tabbar页面, 没有返回键, 有一个home图标) / switchTab（ 跳转到tabbar页面， 关闭其他非tabbar页面） / reLaunch（ 关闭所有其他页面） / navigatorBack 自定义的返回 delta自定义返回层级数
            数据传递 直接在url后 + ？key = value onload options中拿数据

            返回传递数据 onUnload传递数据 getCurrentPage() 获取当前所有活跃的页面 pages[pages.length - 2] 调用页面对象setData修改数据

            wx.navigatorTo({
                url: ''
            })

            wx.navigatorBack({
                delta: ''
            })
            与组件的api保持一致。
            navigateBack 需要与navigate一起使用

            wx.authorize({
                // 通过scope指明申请获取哪种类型的权限
                scope: 'scope.record',
                success() {
                    // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                    wx.startRecord()
                }
            })