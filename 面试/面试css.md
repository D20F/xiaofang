# 样式
## box-sizing
border-box 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。


## 移动端1px
伪元素解决 或者 设置viewport头解决
```css
  .setOnePx{
    position: relative;
    width: 10rem;
    height: 10rem;
  }
  .setOnePx::after{
    content: " ";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    border: 1px solid black;
  }
```


## href和src的区别
href </br>
href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系</br>
若在文档中添加href ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式。</br>
src </br>
src表示引用资源，替换当前元素，用在img，script，iframe上，src是页面内容不可缺少的一部分。</br>
当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等也如此，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因。</br>





