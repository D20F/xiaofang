 # vuerouter

 ## 例子
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"My",
    explain:"我的",
    component:() => import("../views/My.vue")
  },
]

const router = new VueRouter({
  // 路由模式改为 history
  // mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
// to: Route: 即将要进入的目标 路由对象

// from: Route: 当前导航正要离开的路由

// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
// next(name: 'Login')还可以用来重定向
})

export default router

```
 ## 路由懒加载有什么意义
路由懒加载的含义：把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件

 ## 路由模式
  vue-router 路由模式有 
|    模式         |   介绍         |   
| -------------   | :-------------:| 
|    hash         |      使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器      |   
|    history      |     依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式       |   
|    abstract     |     支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式       |   
hash 一句话总结 使用地址栏的hash来实现，通过 hashchange事件来监听hash值变化，实现对页面的跳转

history 一句话总结 使用h5的API History来实现，通过pushState和repalceState操控history 使用popstate事件来监听 history值变化，实现对页面的跳转
1. hash 模式的实现原理
早期的前端路由的实现就是基于 location.hash 来实现的。

URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；

hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；

使用 JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；

我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。



2. history 模式的实现原理
HTML5 提供了 History API 来实现 URL 的变化。使用history.pushState() 和 history.repalceState()。

API 来操作实现 URL 的变化

我们可以使用 popstate  事件来监听 url 的变化，从而对页面进行跳转（渲染）；

## 路由增加
router.addRoutes([标准路由])




    










