// 对象赋值
let {name,age}={name:"xiaoming",age:20};
console.log(name,age);

//函数赋值
function fun1(){
    return [10,20];
}
let [num1,num2]=fun1();
console.log(num1,num2);

//函数参数指定
function func1({x=1,y=2}){
    return x+y;
}
console.log("++++++++++++");
console.log(func1({})); //3
console.log(func1({x:5})); //7
console.log(func1({y:9})); //10
console.log(func1({x:5,y:5})); //10
console.log("++++++++++++");
