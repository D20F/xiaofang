# taro
 ##  微信小程序获取信息
 ``` js
uni.getProvider({
    service: 'oauth',
    success: function (res) {
        console.log(res.provider)
        if (~res.provider.indexOf('weixin')) {
        uni.login({
            provider: 'weixin',
            success: function (loginRes) {
                console.log(loginRes.authResult);
                uni.getUserInfo({
                    provider: 'weixin',
                    success: function (res) {
                        let data = JSON.parse(JSON.stringify(res))
                        console.log('用户信息为：' + data);
                        console.log('用户昵称为：' + res.userInfo.nickName);
                        console.log('用户头像为：' + res.userInfo.avatarUrl);
                    }
                });
            }
        });
        }
    }
});
 ```
# 框架
安装vuex 无异常
sass 安装 node-sass 和 sass-loader即可


s() {
    // 竖屏
    plus.screen.lockOrientation("portrait-primary");
},
h() {
    // 横屏
    plus.screen.lockOrientation("landscape-primary");
},
f() {
    // 翻转屏幕
    plus.screen.lockOrientation("landscape-secondary");
},

# 获取用户信息以及拿到seeion_key
```js
        uni.login({
            provider: "weixin",
            success: function (res) {
                console.log("res code", res);
                uni.getUserInfo({
                    provider: "weixin",
                    success: function (infoRes) {
                        console.log("用户昵称为：", infoRes);
                    },
                    fail: (err) => {
                        console.log("未授权", err);
                    },
                });
                if (res.code) {         //微信登录成功 已拿到code
                    uni.request({
                        url: 'https://api.weixin.qq.com/sns/jscode2session',
                        method:'GET',
                        data: {
                            appid: appid,        //你的小程序的APPID
                            secret: secret,       //你的小程序的secret,
                            js_code: res.code,              //wx.login 登录成功后的code
                            grant_type: "authorization_code"
                        },
                        success: (cts) => {
                            console.log("cts",cts);
                            // 换取成功后 暂存这些数据 留作后续操作
                            that.wx.openid=cts.data.openid     //openid 用户唯一标识
                            that.wx.unionid=cts.data.unionid     //unionid 开放平台唯一标识
                            that.wx.session_key=cts.data.session_key     //session_key  会话密钥
                            uni.request({
                                url: 'https://api.weixin.qq.com/cgi-bin/token',
                                method:'GET',
                                data: {
                                    grant_type: "client_credential",
                                    appid: appid,        //你的小程序的APPID
                                    secret: secret,       //你的小程序的secret,
                                },
                                success: (cts) => {
                                    console.log("cts",cts);
                                    // 获取access_token
                                    that.wx.access_token=cts.data.access_token;
                                    // 获取用户信息  接口，包括其他微信接口，都是需要该用户（即openid）关注了公众号后，才能调用成功的。
                                    uni.request({
                                        url: 'https://api.weixin.qq.com/cgi-bin/user/info',
                                        method:'GET',
                                        data: {
                                            access_token: that.wx.access_token, //access_token wx指定token
                                            openid: that.wx.openid,     //openid 用户唯一标识
                                            lang: "zh_CN",              //语言,
                                        },
                                        success: (cts) => {
                                            console.log("cts",cts);

                                        }
                                    });
                                }
                            });
                        }
                    });
                } else {
                    uni.showToast({
                        icon: "none",
                        title: "登陆失败",
                    });
                }
            },
        });
```
## 角标设置
plus.runtime.setBadgeNumber(0);

项目名全部未更换
app id未更换
证书别名:未知
证书密码:未知

## 打开手机其他app
plus.runtime.launchApplication(  
    {  
        pname: 'com.tencent.mobileqq'    //包名
    },  
    function(e) {  
        console.log('err'+'Open system default browser failed: ' + e.message);  
    }  
);










