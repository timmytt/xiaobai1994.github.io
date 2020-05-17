Array.prototype.fakeFilter = function fakeFilter(fn, context) {
    if (typeof fn !== "function") {
        throw new TypeError(`${fn} is not a function`);
    }

    let arr = this;
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        let result = fn.call(context, arr[i], i, arr);
        if (result) temp.push(arr[i]);
    }
    return temp;
};
//实现filter

function instanceofFunc(obj, cons) {
    // 错误判断 构造函数必须是一个function 其他的均报错
    if (typeof cons !== 'function') throw new Error('instance error')
    if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) return false
    // 获取到原型对象
    let proto = cons.prototype
    // 如果obj的原型对象不是null
    while (obj.__proto__) {
        if (obj.__proto__ === proto) return true
        obj = obj.__proto__
    }
    return false
}
//实现 instanceof

Array.prototype.st = function (fn) {
    var t;
    fn = fn || function (x, y) {
        return x - y
    };
    for (var i = 0; i < this.length; i++) {
        for (var j = i; j < this.length; j++) {
            if (fn(this[i], this[j]) > 0) {
                t = this[i];
                this[i] = this[j];
                this[j] = t;
            }
        }
    }
}
//小于零正常 大于零相反 x-y正常 y-x相反
//默认升序排列
//实现sort 冒泡排序
Array.prototype.myReduce = function (cb, initialValue) {
    let arr = this
    let accumulator = initialValue ? initialValue : this[0]
    var i = initialValue ? 0 : 1
    for (i; i < arr.length; i++) {
        accumulator = cb(accumulator, arr[i], i, arr)
    }
    return accumulator
}

arra
//实现reduce


// eventEmitter(emit, on, off, once)
// 实现promise
// 实现promise.all
// 实现promise.retry
// 将一个同步callback包装成promise形式
// 写一个函数，可以控制最大并发数
//继承（ES5/ES6）

//sleep函数为什么return funciton？

function mySqrt(n){
    var high=n/2
    var low=0
    var mid=(high+low)/2
    while(Math.abs(mid*mid-n)>1e-6){
        mid=low+(high-low)/2
        if(mid*mid-n>0){
            high=mid
        }else if(mid*mid-n<0){
            low=mid
        }
    }
    return mid
}
//二分法求平方根