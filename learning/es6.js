// promise、async await、Generator的区别
// https://www.jianshu.com/p/3c695e078d91

// async必须以一个promise对象开始？  yeild*?
// Generator函数是将函数分步骤阻塞 ，只有主动调用next()才能进行下一步。
// async函数就相当于自执行的Generator函数，相当于自带一个状态机，在 await 的部分等待返回， 返回后自动执行下一步。


// ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上(Parent.apply(this))
// ES5的继承是通过prototype或构造函数机制来实现。
// ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上(Parent.apply(this))。
// ES6的继承机制实质上是先创建父类的实例对象this(所以必须先调用父类的super()方法)，然后再用子类的构造函数修改this。具体为ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承。子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其调用。如果不调用super方法，子类得不到this对象。
// 注意：super关键字指代父类的实例，即父类的this对象。在子类构造函数中，调用super后，才可使用this关键字，否则报错。

// <script type="text/javascript">
//     class Father{
//         constructor(name){
//             this.name = name;
//         }
//         sayName(){
//             console.log(this.name);
//         }
//     }
//     class Son extends Father{  //extents后面跟表示要继承的类型
//         constructor(name, age){
//             super(name);  //相当于以前的：Father.call(this, name);
//             this.age = age;
//         }
//         //子类独有的方法
//         sayAge(){
//             console.log(this.age);
//         }
//     }

//     var son1 = new Son("李四", 30);
//     son1.sayAge();
//     son1.sayName();
//     console.log(son1 instanceof Son);  // true
//     console.log(son1 instanceof Father);  //true

// </script>

js模块化（commonjs/AMD/CMD/ES6）
https://www.jianshu.com/p/67ce52c93392
// 每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。
// exports:首先对于本身来讲是一个变量（对象），它不是module的引用，它是{}的引用，它指向module.exports的{}模块
// module.exports:首先，module是一个变量，指向一块内存，exports是module中的一个属性，存储在内存中，然后exports属性指向{}模块
// exports只能使用.语法向外暴露内部变量  例   exports.xxx=xxx
// module.exports既可以通过点语法，也可以直接赋值一个对象    例  module.exports.xxx=xxx
// module.exports=xxx


ES6
一个文件能有多个export 但只能有一个export default
用export导出的文件必须加{}引入 用export default导出的不用加{}
https://yq.aliyun.com/articles/646349

https://www.cnblogs.com/heluan/p/8620312.html http2
https://www.jianshu.com/p/1f6df4109c1f 跨域丢失cookie

三次握手与四次挥手
垃圾回收机制

事件循环
事件循环绝对是一个必考题。其中涉及到宏任务、微任务、UI渲染等的执行顺序，浏览器端的必须要掌握，node端的有精力的最好也能掌握。
拦截器拦截token？
1211