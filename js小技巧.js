
// ...展开语法将数组展开
var a=[{b: 3}, {b: 1}]
var b=[...a]
//这样b就可以在不改变a的情况下实现赋值，实现深拷贝

//可以用concat把两个数组连接起来，但为什么不用...展开运算符呢
const fruitsAndVegetables = fruits.concat(vegetables);
const fruitsAndVegetables = [...fruits, ...vegetables]; 

//字符串切割，骚操作
const country = 'USA';
country.split('');
console.log([...country]); // ['U', 'S', 'A']

//使用text-align-last对齐两端文本
//要点：通过text-align-last:justify设置文本两端对齐
//场景：未知字数中文对齐

//使用text-overflow控制文本溢出
//要点：通过text-overflow:ellipsis对溢出的文本在末端添加...
//场景：单行文字溢出、多行文字溢出

// 正则
"^[\u4e00-\u9fa5]{1,10}$"  //匹配1个到10个中文

//输出小星星
var StartScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
var start = StartScore(3);

//快速转换数字
let number = '10';
number = ~~number;
number = +number;
console.log(number); // 10

//取整
console.log(-10.9 | 0);//-10
console.log(~~10.9);//10

// 存储cookie         key       data    过期时间   设置的过期时间
// document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
