let list = [10, 20, 30];
Array.prototype.Len = function() {};

//ES6语法
for (let val of list) console.log(val);
//let => 数组或对象循环的个数   list => 数组或对象

//ES5语法
for (let val in list) console.log(val, list[val]);
