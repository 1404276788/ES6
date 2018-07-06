function sum(...args) {
  //用三个点表示args数组
  let result = 0; //用于存放求和的值
  args.forEach(val => {
    //使用forEach循环args数组，使用箭头函数对循环出来的数进行处理
    result += val;
  });
  return result;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
