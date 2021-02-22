# 灵活应用js
## JS类型
``` js
 基本类型：undefined、null、string、number、boolean、symbo（ES6）
 引用类型：Object、Array、RegExp、Date、Function
 区别：引用类型值可添加属性和方法，而基本类型值则不可以。
```
## call apply bind
``` js
  call(b,1,2)     绑定this,后面为函数参数 
  apply(b,[1,2])  绑定this,函数参数用数组形式放进去 
  bind(b,1,2)()   绑定this,但是不会立刻执行,需要自己去执行,其他的和call一样
```
## script标签的defer和async有什么区别
``` js
 没有这两个标签js加载为同步，async为异步加载。defer为异步加载，不过需要等dom都加载完，再执行js文件
```
## 原型链
``` js
                    prototype
                 -------------->   
  构造函数person                   person.prototype原型
        |        <--------------          ↗
        |           constructor         ⁄
       new                         _proto_
        |                           ⁄
        ↓                         ⁄
    实例对象p  ----------------- ⁄
```

## jsonp跨域
``` js
  var script = document.createElement('script');  创建script标签
  script.type = 'text/javascript';   指定类型
  传参并指定回调执行函数为onBack             参数{user:admin}  callback回调函数onBack
  script.src = 'http://www.demo2.com:8080/login?user=admin&callback=onBack';
  document.head.appendChild(script);   添加srcipt标签
  function onBack(res) {alert(JSON.stringify(res));}  回调函数
```


## ...展开语法将数组展开
``` js
var a=[{b: 3}, {b: 1}]
var b=[...a]
这样b就可以在不改变a的情况下实现赋值，实现深拷贝

可以用concat把两个数组连接起来，但为什么不用...展开运算符呢
const fruitsAndVegetables = fruits.concat(vegetables);
const fruitsAndVegetables = [...fruits, ...vegetables]; 
```

## 字符串切割，骚操作
``` js
const country = 'USA';
country.split('');
console.log([...country]); // ['U', 'S', 'A']
```
## 正则
``` js
"^[\u4e00-\u9fa5]{1,10}$"  //匹配1个到10个中文
```

## 输出小星星
``` js
var StartScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
var start = StartScore(3);
```

## 快速转换数字
``` js
let number = '10';
number = ~~number;
number = +number;
console.log(number); // 10
```


## 取整
``` js
console.log(-10.9 | 0);//-10
console.log(~~10.9);//10
```
## 用新Api进行深拷贝
``` js
Object.assign({}, student)
```

## 指幂运算符
``` js
2**2 === 4
3**3 === 27
```

## 正则检测                 
``` js
    const regex = /^1([3|4|5|7|8|])\d{9}$/;
    return regex.test(val);
```
## 替换或者匹配正则                 
``` js
'123'.replace('1','2')//223
```
## 寻找或者匹配正则   
``` js
'123'.match('1')//true
```
## 寻找 
``` js
'123'.includes ('1')//true
```
## 解构多维数组 按照参数解构几次 
``` js
[1,2,["3",4,"5",[6,[7,8],9]]].flat(3)//[1, 2, "3", 4, "5", 6, 7, 8, 9]
``` js
## 存储cookie         key       data    过期时间   设置的过期时间
``` js
 document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```

## 阻止冒泡
``` js
document.getElementsById().stopPropagation 
捕获冒泡
document.getElementById().addEventListener("click",function(event){
 event.target.className=='main'?console.log(event):console.log(2)
})
```

## 给对象的键值动态赋值     
``` js
var thetop = "top",
obj = { [thetop]: 10 };
console.log(obj)//{top: 10}
var a=['c','a']
obj = { [a[0]]: 10 };
console.log(obj)//{c: 10}
```
## 给一个类似数组的东西转换为真正的数组
``` js
Array.from
```

## 函数参数对象  不定解构写法
``` js
function func(...i) {
    console.log(i[0],i[1],i[2]); // [1, 'sada', 1]
}
func(1, 'sada', 1);
```
## 原型链
``` js
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true

// JavaScript是静态作用域
// 函数在创建的时候就已经如果找不到定义的值就会往上一层找,在定义的时候就已经决定了输出的值
var value = 1;
function foo() {
    console.log(value);
}
function bar() {
    var value = 2;
    foo();
}
bar();//1
```


## 重写call
``` js
function foo() {
    console.log(this.name)
}
const obj = {
    name: '写代码'
}
obj.foo = foo   // 变更foo的调用者
obj.foo()       // '写代码'
// 复制代码基于以上原理, 我们两句代码就能实现call()
Function.prototype.myCall = function(thisArg, ...args) {
    thisArg.fn = this              // this指向调用call的对象,即我们要改变this指向的函数
    return thisArg.fn(...args)     // 执行函数并return其执行结果
}
// 复制代码但是我们有一些细节需要处理
Function.prototype.myCall = function(thisArg, ...args) {
    const fn = Symbol('fn')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    thisArg = thisArg || window    // 若没有传入this, 默认绑定window对象
    thisArg[fn] = this              // this指向调用call的对象,即我们要改变this指向的函数
    const result = thisArg[fn](...args)  // 执行当前函数
    delete thisArg[fn]              // 删除我们声明的fn属性
    return result                  // 返回函数执行结果
}
```

## v-model的原理
v-model会默认注册一个 input事件 他的原理应该是绑定数据在set时候触发input事件来修改数据


## 手机自适应rem
``` js
// 基准大小
const baseSize = 37.5
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750   
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
```


## 格式化金钱 三位逗号
``` js
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(20190214);
// money => "20,190,214"
```

## 判断
``` js
if([]==false){console.log(1)}//真
if({}==false){console.log(1)}//假
if([]){console.log(1)}       //真
if([1]==[1]){console.log(1)} //假
```

## 使用attr()抓取data-*
用来适配 伪元素 :after   content

## css效验表单
使用:valid和:invalid校验表单
要点：<input>使用伪类:valid和:invalid配合pattern校验表单输入的内容


## vue底层渲染原理 虚拟dom由 vue-template-compiler 渲染成真实dom
const compiler = require("vue-template-compiler");
render: compiler.compileToFunctions(`
<div>
    <p>选中复制</p>
    <p class="code_btn" v-copy-select>选中</p>
<div>
`).render,

## 同步加载js文件 防止寻找不到dom
``` js
    this.$nextTick(() => {
        let Prism = require("@/utils/map/index");         
    });
```