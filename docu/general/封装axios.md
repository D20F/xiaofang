# axios
## axios
```js
//导入axios
import axios from 'axios';
    //设置基础接口地址
    var baseURL = 'http://172.81.224.11/api';
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

```
























