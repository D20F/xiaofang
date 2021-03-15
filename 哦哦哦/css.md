# 样式
## box-sizing
border-box 有边框和内边距的
content-box  内容包括内边距和边框

## 移动端1px
伪元素after transform 缩放解决 或者 设置viewport头解决 
``` css
    .border-line:after {
        position: absolute;
        width: 200%;
        height: 200%;
        left: 0;
        top: 0;
        border: 1px solid #999;
        transform:scale(0.5);
        content: ' ';
    }
```

## href和src的区别
href </br>
href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系</br>
若在文档中添加href ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式。</br>
src </br>
src表示引用资源，替换当前元素，用在img，script，iframe上，src是页面内容不可缺少的一部分。</br>
当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等也如此，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因。</br>

## nth-child 选择器
``` css
选择第2个 到第4个
div:nth-child(n+2):nth-child(-n+4) {
    margin-right: calc((100% - 500px) / 4);
}
选择 倍数为5的
div:nth-child(5n) {
    margin-right: 0;
}
```

## calc 动态计算 
``` css
div:first-child {
    margin-right: calc((100% - 500px) / 4);
}
```
## 镜像倒影
-webkit-box-reflect: below 2px linear-gradient(transparent, rgba(0, 0, 0, .5)); 方向 边距 渐变值

## mask 使用遮罩属性来实现特殊的效果 很强大
-webkit-mask: linear-gradient(45deg, #000 50%, transparent 50%); 

## 实现文字超出省略号
``` css
{
    text-overflow: ellipsis;
    overflow: hidden;
}
```

## 滚动平滑 
使用 scroll-behavior: smooth 让滚动丝滑

## css 智能设置滚动效果
scroll-snap-type: none | [ x | y | block | inline | both ] [ mandatory | proximity ]?
scroll-snap-align: start | center | end;
scroll-margin / scroll-padding

## 选择系统默认字体
font-family: system-ui 能够自动选择本操作系统下的默认系统字体。

## 粘性定位   用来做滑动粘性置顶粘粘很好
position: -webkit-sticky; position: sticky;

## 九宫格 border边框写法
使用 margin 负边距让每个块向右下位移 使用 nth-child选择最上边和最左边那两列 那两列不需要位移 
hover的时候使用 z-index 使得被遮住的border 出现