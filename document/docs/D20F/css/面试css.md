# 样式

## 移动端1px
``` js  
    // 伪元素解决方案 
    .setOnePx::after{
        content:" ";  /* 伪元素的内容 */
        position:absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        transform: scale(0.5);
        transform-origin: 0 0; /* 移动基准起点 */
        border: 1px solid seagreen;
        border-radius: 20px;
    }
    
    // 设置页面的视图比例   兼容性最好
    var viewport = document.querySelector("meta[name=viewport]");
    //下面是根据设备像素设置viewport
    if (window.devicePixelRatio == 1) {
      viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
    }
    if (window.devicePixelRatio == 2) {
      viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');
    }
    if (window.devicePixelRatio == 3) {
      viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');
    }
    var docEl = document.documentElement;
    var fontsize = 32* (docEl.clientWidth / 750) + 'px';
    docEl.style.fontSize = fontsize;  
```

## 居中为什么要用transform而不是top,marginleft
``` js
因为transform是合成属性,不会引起重绘重排,而top,marginleft会引起

```
## href和src的区别
``` js
href 
href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系
若在文档中添加href ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式。
src 
src表示引用资源，替换当前元素，用在img，script，iframe上，src是页面内容不可缺少的一部分。
当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等也如此，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因。

```




