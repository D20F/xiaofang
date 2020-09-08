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
    










