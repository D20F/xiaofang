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
      // delete array[i].s;
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
