//数组去重，并记录每个数据出现的次数
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
      var b=array[i]
      array[i][b]=ccc
    }
    console.log(array)


// 函数节流
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


//触摸事件
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

//vue双向绑定原理 根据defineproperty实现
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

//Promise 使用方法
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
// async await  await只是promise的语法糖
