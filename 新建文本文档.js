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

//导入axios
import axios from 'axios';
//设置基础接口地址
// var baseURL = 'http://172.81.224.11/api';
// 创建axios全局请求对象
const xhr = axios.create({
    baseURL,
    timeout: 10000,
});
// post请求,needHeader参数用于判断是否需要token认证
const postData = (url, data, needHeader) => {
    let headers = {};
    if (needHeader) {
        headers = {
            token: localStorage.getItem('token')
        }
    }
    return new Promise((resolve, reject) => {
        xhr({ url, data, headers, method: 'post' })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => reject(err))
    })
}

// get请求,needHeader参数用于判断是否需要token认证
const getData = (url, params, needHeader) => {
    let headers = {};
    if (needHeader) {
        headers = {
            token: localStorage.getItem('token')
        }
    }
    return new Promise((resolve, reject) => {
        xhr({ url, params, headers })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

// 获取配置
const getConfig = (reqData) => {
    const url = '/config/get_config';
    const data = reqData;
    return getData(url, data);
}

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

//快速转换数字
let number = '10';
number = ~~number;
number = +number;
console.log(number); // 10

//取整
console.log(-10.9 | 0);//-10
console.log(~~10.9);//10

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
