var str: string = "xiangyi";
console.log(str);
var fn = () => 5;
console.log(fn());
var obj={x:1,y:2}
interface Person{
    name:string;
    age:number;
}
let xiangyi:Person={
    name:"xiangyi",
    age:18
}
interface Cat {
    name: string;
    run(): void;
    run1?():void
}
var info:Cat={
    name:"xiangyi",
    run:function(){console.log(1)},
    run1:function(){}
}

let tom: [string, number]=["1",1];
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