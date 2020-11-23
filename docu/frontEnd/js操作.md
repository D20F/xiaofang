# js操作

## 数组去重，并记录每个数据出现的次数
```js
{
  var array=[1,3,3,3,22,3,1,2,3,4,5,6,7,8,1,2,3,4,5,7,66,6,6,6,4,4]
    console.log(array)
    for(var i=0;i<array.length;i++){
      var ccc=1;
      for(var l=i+1;l<array.length;l++){
        if(array[i]==array[l]){
          array.splice(l,1)
          l--
          ccc++
        } 
      }
      array[i]={[array[i]]:ccc}
    }
    console.log(array)
    //给对象的键值动态赋值     
    // var thetop = "top",
    // obj = { [thetop]: 10 };
    // console.log(obj)//{top: 10}
    // var a=['c','a']
    // obj = { [a[0]]: 10 };
    // console.log(obj)//{c: 10}
}
```
##  函数节流
```js
{
  var canRun = true;
  function(){
      if(!canRun){
          // 判断是否已空闲，如果在执行中，则直接return
          return;
      }
      canRun = false;
      setTimeout(function(){
          console.log("函数节流");
          canRun = true;
      }, 300);
  };
  // 函数防抖
  var timer = false;
  function(){
      clearTimeout(timer); // 清除未执行的代码，重置回初始化状态
      timer = setTimeout(function(){
          console.log("函数防抖");
      }, 300);
    };    
  }; 
}
```

## 触摸事件
```js
{
  var box = document.querySelector('.homepage-content-wrap');
  box.addEventListener('touchstart', function (e) {
    console.log('start');
    console.log(e);
  })
  box.addEventListener('touchmove', function (e) {
    console.log('move');
    console.log(e);
  })
  box.addEventListener('touchend', function (e) {
    console.log('end');
    console.log(e);
    
  })
}
```
## vue双向绑定原理 根据defineproperty实现
```js
{
  let Person = {}
  let temp = null
  Object.defineProperty(Person, 'name', {
    get: function () {
      return 
    },
    set: function (val) {
      temp = val
    }
  })
  Person.name=1;//Person.name 1
  console.log(temp)//1
}
```
## Promise 使用方法
```js

  var promise1 = new Promise((resolve, reject) => {
    setTimeout(function() {
    resolve('成功');
    // reject('错误');
  }, 300);
  });
  promise1.then(function(value,error) {
    console.log(value);
  }).then((resolve,reject)=>{
    console.log(reject);
  })

then传递值外加函数传值
function name() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(1);
        }, 2000);
    })
}

let name = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(1);
             console.error(1);
        }, 2000);
    })
function funs(){
    console.log(212131)
}
function fun (callback){
    let a = name.then((res)=>{
        console.log(res);
        callback();
        console.error(1);
        return res
    }).catch((err)=>{
        console.log(err)
    })
    return a
}
let s = fun(funs);
s.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err)
})

```
##  继承 方法一  原型链继承
```js
{
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
}
```

##  继承 方法二  call重新定义this构造函数继承
```js
{
  function SuperType(){
    this.colors=["red", "blue", "green"];
  }
  function SubType(){
    //继承SuperType
    SuperType.call(this);
  }
  var instance1=new SubType();
  instance1.colors.push("black");
  alert(instance1.colors);  //red,bllue,green,black 
  var instance2=new SubType();
  alert(instance2.colors);  //red,blue,green
}
```

##  继承 方法三  组合继承
```js
{
  // 函数方法使用原型链继承,以便能够复用
  // 属性定义用构造函数,以便每个不同的函数可以有不同的数据
}
```

##  深拷贝
```js
{
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
}
```

## 事件委托
```js
{
  document.addEventListener("click",function(e){
    if(e.target.className=="left"){
    console.log(1)
    }else if(e.target.className=="main"){
    console.log(2)
    }else{
    console.log(3)
    }
})
}
```

##  async await 用法
```js
{
  function sing() {
    return new Promise(function(resolve, reject) {
            setTimeout(function() {
                        resolve(`来一首好听的歌吧~~~`);
                }, 1000);
            });
  }
  async function demo() {
      const s = await sing(); 
      console.log(s) 
  }
  demo();
}
```

##  New 构造符原生实现
```js
{
  function myNew (fun) {
    return function () {
      // 创建一个新对象且将其隐式原型指向构造函数原型
      let obj={}
      obj.__proto__ = fun.prototype
      
      // 执行构造函数
      fun.call(obj, ...arguments)
      // 返回该对象
      return obj
    }
  }
  function person(name,age) {
    this.name = name
    this.age = age
  }
  let obj = myNew(person)('chen', 18) // {name: "chen", age: 18}
}
```
##  进制转换
```js
  // 16进制数转10进制
var ex16hex = function(value){
  value = stripscript(value);
    value = value.replace("0x","");
  var arr = value.split("");
  arr = arr.reverse();
  var len = arr.length;
  var res = 0;
  $.each(arr, function(i,v){
      var num = hex_change(v);
    console.log(num)
      res += muti16(num, i);
  });
  return res;
}

// 字符转16进制数字
var hex_change = function(v){
    var res;
    switch(v){
      case "a": res = 10;break;
    case "b": res = 11;break;
    case "c": res = 12;break;
    case "d": res = 13;break;
    case "e": res = 14;break;
    case "f": res = 15;break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": res = Number(v);break;
    default: res = 0;break;
  }
  return res;
}

// 过滤所有特殊字符
var stripscript = function(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？↵\r\n]");
        var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

// 返回 v 乘以 n 个 16 的积
var muti16 = function(v, n){
  var temp = v;
    for(var i = 0; i < n; i++){
    temp *= 16;
  }
  return temp;
}

/// 获取地址栏参数
function UrlSearch() {
    var obj = {}
    var name, value;
    var str = window.location.href; //取得整个地址栏
    var num = str.indexOf("?")
    str = str.substr(num + 1); //取得所有参数 stringvar.substr(start [, length ]
    var arr = str.split("&"); //各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substr(0, num);
            value = arr[i].substr(num + 1);
            obj[name] = value;
        }
    }
    return obj;
}

```