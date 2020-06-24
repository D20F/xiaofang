# 面试模拟
## 什么是虚拟dom，如何实现的
虚拟dom是用js对象来表示真实的dom结构

生成一棵虚拟DOM树：一棵表示当前的DOM结构，另一棵在状态变更将要重新渲染时生成。通过比较这两棵树的差异，决定需要修改那些DOM结构，以及如何修改。

## 写出常用的dom bom window 方法 每个至少五个
<span style="color:green;">BOM是浏览器对象模型,一共有6个</span>
1. window对象 ，是JS的最顶层对象，其他的BOM对象都是window对象的属性
2. document对象，文档对象
3. location对象，浏览器当前URL信息
4. navigator对象，浏览器本身信息
5. screen对象，客户端屏幕信息
6. history对象，浏览器访问历史信息

<span style="color:green;">一般可以直接调用的方法,都是window方法,如</span>
1. getElementById() querySelector() querySelectorAll() getElementsByClassName 获取dom结构的
1. document.open() close() write()  打开写入流 关闭写入流 写入 

<span style="color:green;">一般可以直接调用的方法,都是window方法,如</span>
1. window.console.log() 最常用的log就是window对象啊 \\(•ิ_•ิ\\)(/•ิ_•ิ)/
2. window.open() 打开一个新的网页 
3. window.alert() window.confirm() 两个提示的也是winodw对象
4. window.setTimeout() window.clearTimeout()  
5. window.setInterval() window.clearInterval() 定时器都是window对象  

## react创建组件的几种方式，如何创建
1. 类组件 用extends React.Component 继承创建。 或者用React.createClass来创建
2. 函数式组件 就是一个函数 
2. 高阶组件 就是用组件当做参数的组件

## DOCTYPE干嘛的
用来规定网页文档类型的 一共2种模式
1. 混杂模式
2. 标准模式 

## vue双向绑定
使用Object.defineProperty的来实现
使用Object.defineProperty的来实现,get,set来劫持数据,



    










