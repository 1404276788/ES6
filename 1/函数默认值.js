function sayhello(name = "chenhao") {
  console.log(`hello ${name}`);
}
// sayhello();
// sayhello("小明");

function add(a = 1, b = a) {
  return a + b;
}
// console.log(add());
// console.log(add(2));
// console.log(add(2, 5));

//必须指定参数
function required() {
  throw new Error("参数未指定");
}
function say(name = required()) {
  console.log(`${name} bye!`);
}
say("koma");
