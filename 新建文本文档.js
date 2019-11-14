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
      array[i]={s:ccc}
      array[i][b]=ccc
      delete array[i].s;
    }
    console.log(array)

//封装axios
import axios from 'axios';

// var baseURL = 'http://172.81.224.11/api';

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

