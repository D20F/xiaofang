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

## 函数参数对象
``` js
function func(...arguments) {
    console.log(arguments[0],arguments[1],arguments[2]); // [1, 'sada', 1]
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

## input限制只能输入数字   
``` js
oninput = "this.value=this.value.replace(/[^\d]/g,'')"  //vue写法
oninput = "value=value.replace(/[^\d]/g,'')"  //普通写法

```


## 重写call
``` js
function foo() {
    console.log(this.name)
}
const obj = {
    name: '写代码像蔡徐抻'
}
obj.foo = foo   // 变更foo的调用者
obj.foo()       // '写代码像蔡徐抻'
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
 ## 时间
 ``` js

            设置时间 
            var day2 = new Date();
            day2.setHours(0);
            day2.setMinutes(0);
            day2.setSeconds(0);
            day2.setMilliseconds(0);
 ```


## websocket
``` js
    import store from '../store/index'

const suffix = '/socket.io/?EIO=3&transport=websocket';
let socket = null;
const send = (data = null) => {
	if(data === null) {
    socket.send('40/scatter');
    socket.send('40/block');
  } else {
    socket.send('42/scatter,' + JSON.stringify(['api', data]));
  }
}

export default class ClientSocket {
  static link() {
		return new Promise(async (resolve, reject) => {
			const setupSocket = () => {
				socket.onmessage = msg => {
					if (msg.data.indexOf('42/block') !== -1) {
                        const [block] = JSON.parse(msg.data.replace('42/block,', ''));
                        // 区块号获取
						if (block.type == 'block') {
							console.log('block',block.result)
						}
					}
				}
			}
			const trySocket = () => {
                const host = `ws://112.74.165.87:13021${suffix}`;
		        const s = new WebSocket(host);
		        s.onerror = err => {
                    resolve(false);
		          console.log('err',err);
		        }
		        s.onopen = () => {
		        	socket = s;
		        	send();
		        	setupSocket();
		        	resolve(true);
		        }
		        s.onclose = () => {
		        	
		        }
			};
			await trySocket();
		})
	}
}

```
## 常用的正则规则
``` js
// 常用的正则规则
// eslint-disable-next-line
export const regExpConfig = {
  IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证
  mobile: /^1([3|4|5|7|8|])\d{9}$/, // 手机号码
  telephone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/, // 固定电话
  num: /^[0-9]*$/, // 数字
  num1: /^[1-9]*$/, // 数字
  phoneNo: /(^1([3|4|5|7|8|])\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$)/, // 电话或者手机
  policeNo: /^[0-9A-Za-z]{4,10}$/, // 账号4-10位数字或字母组成
  pwd: /^[0-9A-Za-z]{6,16}$/, // 密码由6-16位数字或者字母组成
  isNumAlpha: /^[0-9A-Za-z]*$/, // 字母或数字
  isAlpha: /^[a-zA-Z]*$/, // 是否字母
  isNumAlphaCn: /^[0-9a-zA-Z\u4E00-\uFA29]*$/, // 是否数字或字母或汉字
  isPostCode: /^[\d-]*$/i, // 是否邮编
  isNumAlphaUline: /^[0-9a-zA-Z_]*$/, // 是否数字、字母或下划线
  isNumAndThanZero: /^([1-9]\d*(\.\d+)?|0)$/, // 是否为整数且大于0/^[1-9]\d*(\.\d+)?$/
  isNormalEncode: /^(\w||[\u4e00-\u9fa5]){0,}$/, // 是否为非特殊字符（包括数字字母下划线中文）
  isTableName: /^[a-zA-Z][A-Za-z0-9#$_-]{0,29}$/, // 表名
  isInt: /^-?\d+$/, // 整数
  isTableOtherName: /^[\u4e00-\u9fa5]{0,20}$/, // 别名
  // isText_30: /^(\W|\w{1,2}){0,15}$/, // 正则
  // isText_20: /^(\W|\w{1,2}){0,10}$/, // 正则
  isText_30: /^(\W|\w{1}){0,30}$/, // 匹配30个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_50: /^(\W|\w{1}){0,50}$/, // 匹配50个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_20: /^(\W|\w{1}){0,20}$/, // 匹配20个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_100: /^(\W|\w{1}){0,100}$/, // 匹配100个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_250: /^(\W|\w{1}){0,250}$/, // 匹配250个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isNotChina: /^[^\u4e00-\u9fa5]{0,}$/, // 不为中文  IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证
  IDcardAndAdmin: /^(([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X))|(admin))$/, // 身份证或者是admin账号
  IDcardTrim: /^\s*(([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3})|([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X))|(admin))\s*$/, // 身份证
  companyNO: /^qqb_[0-9a-zA-Z_]{1,}$/, // 公司人员账号
  imgType: /image\/(png|jpg|jpeg|gif)$/, // 上传图片类型
  isChina: /^[\u4e00-\u9fa5]{2,8}$/,
  isNozeroNumber: /^\+?[1-9]\d*$/, // 大于零的正整数
  float: /^\d+(\.?|(\.\d+)?)$/, // 匹配正整数或者小数 或者0.这个特殊值
}
```
