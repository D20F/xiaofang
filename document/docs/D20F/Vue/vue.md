# Vue
## 组件
 ### 全局注册组件
 ```js
   // 导入写好的组件
   import pursecard from './pursecard'
   // 注册成组件
   function plugins(Vue) {
      Vue.component("pursecard", pursecard);
   }
   // 集体导出
   export default plugins;
   
   // 导入导出的组件函数
   import component_plugins from './component/plugins'
   // 全局注册
   Vue.use(component_plugins);

 ```
 ### 组件传值
   父传子 :直接属性传值，或者用ref注册，然后直接调用</br>
   子传父 :使用v-on定义时间，子组件再使用$emit来触发</br>
 ``` js
 //父组件
    <div >
        <you data='data'  @father='child' ref='you'/>
        <button @click="callchild">调用子组件函数</button>
    </div>

export default {
    methods:{
      //  调用子组件函数
       callchild(){
        this.$refs.you.childfun("我是子组件里面的方法哦");  
       },
      //  子组件调用父组件响应的函数
       child(val){
        console.log('子组件调用父组件函数进行传值',val)
       }
    },
}
```
``` js
//  子组件
    <div >
        <p>{{data}}</p>        
        <button @click="callfather">调用父组件函数</button>        
    </div>

export default {
    props:['data'],
    methods:{
      //  去调用父组件的函数
       callfather(){
            this.$emit('father', '调用父组件函数')
       },
      //  父组件调用的子组件函数
       childfun(val){
           console.log('父组件调用子组件函数',val)
       }
    }
}
 ```
 ### slot 插槽
插槽用来放在组件内
 组件使用插槽分发内容，使用具名插槽使用的话需要标注name。匿名无需标注，或标注default
```js
// 组件
<div>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

// 在外面使用
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```
 ### :is 切换组件
   使用 component 组件配合is来切换组件 data为组件名
 ``` js
   <component :is='data'></component>
 ```
 ### keep-alive
用来缓存组件的，想保持组件的状态，可以用他

 ## 生命周期
|    生命周期      |   描述         |   
| -------------   | :-------------:| 
|beforeCreate     |组件实例被创建之初，组件的属性生效之前|
|created          |组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用|
|beforeMount      |在挂载开始之前被调用：相关的 render 函数首次被调用|
|mounted          |el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子|
|beforeUpdate     |组件数据更新之前调用，发生在虚拟 DOM 打补丁之前|
|update           |组件数据更新之后|
|beforeDestory    |组件销毁前调用|
|destoryed        |组件销毁后调用|

 ## Css
 ``` js
    <style scoped>  scoped锁定css
    <style scoped lang='scss'>  开启sass
 ```
 ## vue双向绑定原理
   Vue 内部通过 Object.defineProperty方法属性拦截的方式，把 data 对象里每个数据的读写转化成 getter/setter，当数据变化时通知视图更新

   具体流程 我们会通过实现以下 4 个步骤，来实现数据的双向绑定：</br>
   1、实现一个监听器 Observer ，用来劫持并监听所有属性，如果属性发生变化，就通知订阅者

   2、实现一个订阅器 Dep，用来收集订阅者，对监听器 Observer 和 订阅者 Watcher 进行统一管理

   3、实现一个订阅者 Watcher，可以收到属性的变化通知并执行相应的方法，从而更新视图

   4、实现一个解析器 Compile，可以解析每个节点的相关指令，对模板数据和订阅器进行初始化。

 ## Vue怎么实现对象和数组的监听
通过遍历数组 和递归遍历对象，从而达到利用 Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听。

 ## mvc和mvvm
 mvc指view视图 model数据模型 Controller控制器组成

 视图给用户看的，模型处理逻辑数据的，控制器读入视图的数据，控制用户输入，并向模型发送数据

 mvvm 指 view视图 model数据模型 viewmodel视图模型

 MVVM 框架实现了双向绑定，这样 ViewModel 的内容会实时展现在 View 层，开发者不必低通过操纵 DOM 去更新视图，开发者只需要处理和维护 ViewModel，更新数据视图就会自动得到相应更新。这样 View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环。

 ## 虚拟DOM
   虚拟 DOM 的实现原理主要包括以下 3 部分：

   用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象

   diff 算法 — 比较两棵虚拟 DOM 树的差异

   pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树
 ## key在vue里面作用
 key 是为 Vue 中 vnode 的唯一标记，通过这个 key，我们的 diff 操作可以更准确、更快速。
 ## 你有对 Vue 项目进行哪些优化
（1）代码层面的优化</br>
v-if 和 v-show 区分使用场景</br>
computed 和 watch  区分使用场景</br>
v-for 遍历必须为 item 添加 key，且避免同时使用 v-if</br>
长列表性能优化</br>
事件的销毁</br>
图片资源懒加载</br>
路由懒加载</br>
第三方插件的按需引入</br>
优化无限列表性能</br>
服务端渲染 SSR or 预渲染</br>

（2）Webpack 层面的优化
Webpack 对图片进行压缩</br>
减少 ES6 转为 ES5 的冗余代码</br>
提取公共代码</br>
模板预编译</br>
提取组件的 CSS</br>
优化 SourceMap</br>
构建结果输出分析</br>
Vue 项目的编译优化</br>

（3）基础的 Web 技术的优化
开启 gzip 压缩</br>
浏览器缓存</br>
CDN 的使用</br>

 ## 为什么 v-for 和 v-if 不建议用在一起
当 v-for 和 v-if 处于同一个节点时，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。如果要遍历的数组很大，而真正要展示的数据很少时，这将造成很大的性能浪费



## vue-config
在vue-config设置
lintOnSave: false,  可以取消eslint检测






    










