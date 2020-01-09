//数组去重，并记录每个数据出现的次数
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

// 函数节流
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


//触摸事件
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

//vue双向绑定原理 根据defineproperty实现
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

//Promise 使用方法
{
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
}

// 继承 方法一  原型链继承
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
// 继承 方法二  call重新定义this构造函数继承
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
// 继承 方法三  组合继承
{
  // 函数方法使用原型链继承,以便能够复用
  // 属性定义用构造函数,以便每个不同的函数可以有不同的数据
}


// 深拷贝
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

//事件委托
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

// async await 用法
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

// New 构造符原生实现
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

// promise 原生写法
{

function myPromise(constructor){
  let self=this;
  self.status="pending" //定义状态改变前的初始状态
  self.value=undefined;//定义状态为resolved的时候的状态
  self.reason=undefined;//定义状态为rejected的时候的状态
  function resolve(value){
    //两个==="pending"，保证了状态的改变是不可逆的
    if(self.status==="pending"){
      self.value=value;
      self.status="resolved";
    }
  }
  function reject(reason){
    //两个==="pending"，保证了状态的改变是不可逆的
    if(self.status==="pending"){
      self.reason=reason;
      self.status="rejected";
    }
  }
  //捕获构造异常
  try{
    constructor(resolve,reject);
  }catch(e){
    reject(e);
  }
}
myPromise.prototype.then=function(Onresolve,Onreject){
  let self=this;
  switch(self.status){
    case "resolved":
      Onresolve(self.value);
      break;
    case "rejected":
      Onreject(self.reason);
      break;
    default:       
  }
}
var p=new myPromise(function(resolve,reject){
  setTimeout(() => {
    resolve(1)
  }, 3000);
});
p.then( (val) => {
  console.log(val)
})


const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(excutor) {
    let that = this; // 缓存当前promise实例对象
    that.status = PENDING; // 初始状态
    that.value = undefined; // fulfilled状态时 返回的信息
    that.reason = undefined; // rejected状态时 拒绝的原因
    that.onFulfilledCallbacks = []; // 存储fulfilled状态对应的onFulfilled函数
    that.onRejectedCallbacks = []; // 存储rejected状态对应的onRejected函数

    function resolve(value) { // value成功态时接收的终值
        if(value instanceof Promise) {
            return value.then(resolve, reject);
        }
        // 实践中要确保 onFulfilled 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
        setTimeout(() => {
            // 调用resolve 回调对应onFulfilled函数
            if (that.status === PENDING) {
                // 只能由pending状态 => fulfilled状态 (避免调用多次resolve reject)
                that.status = FULFILLED;
                that.value = value;
                that.onFulfilledCallbacks.forEach(cb => cb(that.value));
            }
        });
    }
    function reject(reason) { // reason失败态时接收的拒因
        setTimeout(() => {
            // 调用reject 回调对应onRejected函数
            if (that.status === PENDING) {
                // 只能由pending状态 => rejected状态 (避免调用多次resolve reject)
                that.status = REJECTED;
                that.reason = reason;
                that.onRejectedCallbacks.forEach(cb => cb(that.reason));
            }
        });
    }

    // 捕获在excutor执行器中抛出的异常
    // new Promise((resolve, reject) => {
    //     throw new Error('error in excutor')
    // })
    try {
        excutor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    const that = this;
    let newPromise;
    // 处理参数默认值 保证参数后续能够继续执行
    onFulfilled =
        typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected =
        typeof onRejected === "function" ? onRejected : reason => {
            throw reason;
        };
    if (that.status === FULFILLED) { // 成功态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    let x = onFulfilled(that.value);
                    resolvePromise(newPromise, x, resolve, reject); // 新的promise resolve 上一个onFulfilled的返回值
                } catch(e) {
                    reject(e); // 捕获前面onFulfilled中抛出的异常 then(onFulfilled, onRejected);
                }
            });
        })
    }

    if (that.status === REJECTED) { // 失败态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(that.reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }

    if (that.status === PENDING) { // 等待态
        // 当异步调用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中
        return newPromise = new Promise((resolve, reject) => {
            that.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilled(value);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
            that.onRejectedCallbacks.push((reason) => {
                try {
                    let x = onRejected(reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }
};
var p=new Promise(function(resolve,reject){
  // setTimeout(() => {
    resolve(1)
  // }, 1000);
});
p.then((val) => {
  console.log(val)
},(err) => {
  console.log(err)
})

}