"use strict";
var str = "xiangyi";
console.log(str);
var fn = function () { return 5; };
console.log(fn());
var obj = { x: 1, y: 2 };
var xiangyi = {
    name: "xiangyi",
    age: 18
};
var info = {
    name: "xiangyi",
    run: function () { console.log(1); },
    run1: function () { }
};
var tom = ["1", 1];
tom[0] = 'Tom';
tom[1] = 25;
tom[0].slice(1);
tom[1].toFixed(2);
//let tom: [string, number] = ['Tom', 25];
// var tom: [string, number];
// tom[0] = 'Tom';
// tom[1] = 25;
// tom.splice(1);
// console.log(tom)
// tom.splice(1);
// console.log(tom)
