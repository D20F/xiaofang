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







