# axios
导入axios 然后定义基础接口地址 </br>
创建请求实例</br>
promise封装一下，把url请求地址 par请求参数 cookie 放进去 then catch 调用 </br>
``` js
    import axios from 'axios'
    let BaseUrl = 'http';
    let xhr = axios.create({
        baseURL:BaseUrl,
        timeout:10000
    })
    let post= (url,par,cookei) =>{
        return new Promise((resolve,reject)=>{
            xhr({url,par,cookei,method:'post'}).then(res => resolve(res.data)).catch(err => reject(err))
        })
    }
    let get= (url,par,cookei) =>{
        return new Promise((resolve,reject)=>{
            xhr({url,par,cookei,method:'get'}).then(res => resolve(res.data)).catch(err => reject(err))
        })
    }
```

 ## 拦截器
请求</br>
axios.interceptors.request.use(fun(),fun());</br>
响应</br>
axios.interceptors.response.use(fun(),fun());</br>
取消</br>
axios.interceptors.request.eject()</br>
 ``` js
    // 在请求或响应被 then 或 catch 处理前拦截它们。

    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    // 如果你想在稍后移除拦截器，可以这样：
    const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
    axios.interceptors.request.eject(myInterceptor);
    
    // 为自定义 axios 实例添加拦截器
    const instance = axios.create();
    instance.interceptors.request.use(function () {/*...*/});

 ```

## axios get请求
``` js
       axios({
            method: "get",
            url: "http://localhost:8080/get",
            params: {
                token: cookie,
            },
        }).then(function (res) {
            console.log(res);
        });

```





















