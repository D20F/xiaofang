// 基本类型：undefined、null、string、number、boolean、symbo（ES6）
// 引用类型：Object、Array、RegExp、Date、Function
// 区别：引用类型值可添加属性和方法，而基本类型值则不可以。

var a=function(c,b){}
var b=function(c,b){}
// call(b,1,2)    //绑定this,后面为函数参数 
// apply(b,[1,2]) //绑定this,函数参数用数组形式放进去 
// bind(b,1,2)()  //绑定this,但是不会立刻执行,需要自己去执行,其他的和call一样

// script标签的defer和async有什么区别
// 没有这两个标签js加载为同步，async为异步加载。defer为异步加载，不过需要等dom都加载完，再执行js文件

//                   prototype
//                -------------->   
// 构造函数person                   person.prototype原型
//       |        <--------------          ↗
//       |           constructor         ⁄
//      new                         _proto_
//       |                           ⁄
//       ↓                         ⁄
//   实例对象p  ----------------- ⁄

// 继承 方法一  原型链继承
// 父类函数
function per(name){
	this.name = name;
}
var pername = new per('实例化');
console.log(pername.name)  //实例化
console.log(pername.showname)  // console.log(实例化)
per.prototype.names='新的';
console.log(pername.names);//新的
per.prototype.showname=function () {
  console.log(this.name)
} 
pername.showname();//实例化

// JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
// JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串
// 深拷贝方法一    var obj2=JSON.parse(JSON.stringify(obj1)) 
// 深拷贝方法二    var obj2=[...obj1]
// 深拷贝方法三
function copy(obj) {
    if(typeof obj == "object") { //判断是否复杂类型
       var result = obj.constructor == Array ? [] : {};//判断数组类型或是object，数组即result=[]，object即result={}
        for(let i in obj) {
            result[i] = typeof obj[i] == "object" ? copy(obj[i]) : obj[i]//判断数据每一项是否是object
        }
    } else {
        var result = obj //基本类型直接拷贝
    }
  return result;
}

// jsonp跨域
// var script = document.createElement('script');  创建script标签
// script.type = 'text/javascript';   指定类型
// 传参并指定回调执行函数为onBack             参数{user:admin}  callback回调函数onBack
// script.src = 'http://www.demo2.com:8080/login?user=admin&callback=onBack';
// document.head.appendChild(script);   添加srcipt标签
// function onBack(res) {alert(JSON.stringify(res));}  回调函数

// cookie  localStorage  sessionStorage
