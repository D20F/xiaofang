#### 让一行多个不同高的元素垂直方向居中

#### 简述下px,em,rem的含义
    答：em是相对单位，是以浏览器的默认字体大小来定的，也可以是父元素与自己定义的字号来定
        rem是跟着html来算的，如果他说vh和vn的话，就换种方式问吧
        
#### 列举几个flex的css属性
    
#### box-sizing(bokesaijin)有哪些值，有什么区别
    content-box 如果你设置一个元素宽度100 那么这个元素的内容区也会有100,并且任何边框
    和内边框都会加进来
    border-box 你想设置的边框和内边距的值是包含在width内的。也就是说你将一个元素的宽
    设为100px，那么这100px会包含他的border和padding，内容区的实际宽度是宽度减去
    边框和padding的值
    
#### 什么是事件传播
    如果答上来，那么问捕获阶段是怎么样，冒泡阶段是怎么样
    捕获阶段：事件从window开始向下到每个元素，直到目标元素
    目标阶段：事件到达目标元素
    冒泡阶段：事件从目标元素向上冒泡，途径每一个元素直到到达window

#### http的流程
    1.域名解析
    2.发起tcp三次握手
    3.建立tcp连接后发起http请求
    4.服务端响应http请求，

#### 如何实现前端防抖

#### 如果事件未触发如何检查
    1、可能有元素遮挡
    2、可能输入框被disabled禁用了
    3、可能输入框聚焦时执行了其他元素的聚焦，导致此组件瞬间失焦
    4、可能父级阻止了聚焦事件向下传播
    5、可能有pointer-events:none导致无法响应事件
    6、可能从父级开始就无法响应此事件了

#### Chrome浏览器能够显示的最小字体大小为多少，如何做到更小
    看他如何回答，可以缩放
    
#### 已知某子元素宽度为25%，如何做到使其宽高比为1:1
    可以将子元素的高设为0后，然后使用padding来撑他容器，因为padding是按照视图的宽度来计算的

#### 已知 !any === true，那么any可能为哪些值
    undefined,0,null,’’

#### 简述Object浅拷贝的常用方法有哪些
    Object.assion({},obj)

#### 数组常用的原型方法有哪些
    sort
    push
    splie
    find
    findIndex
    map

#### 什么是闭包，闭包的特征

#### 如何解决跨域
    
#### 对象的属性描述符有哪几个
    如果他弄不清楚在提醒下原形链
    set 写入属性触发
    get 读取属性触发
    writable 可写
    enumerable 可枚举
    configurable 可配置性
    value 数据属性
    
#### 现有某Get请求，请求地址为”http://test.com/api/something/get”，需要附加名为”list”的参数，假设当前此参数值为[“item1”, “item2”, “item3”]，那么，在添加参数后请求地址应该是什么
    list[]=item1&list[]=item2    

#### 其余js答案
    function basicTypeConversion() {
        let s = '1' + 3

        let d = 1 + +'3'

        let v = typeof null == "object"
    }
    13 4 true
        
#### 宏任务与微任务的优先级 
   
        function promiseAndSetTimePriority() {
            let str = ''

            str += 'a'

            setTimeout(() => {
                str += 'b'
                new Promise( resolve => {
                    str += 'c'
                    resolve()
                    str += 'd'
                }).then(res => {
                    str += 'e'
                })
                str += 'f'
            }, 0)

            str += 'g'


            setTimeout(() => {
                console.log(str)
            }, 1000)
        }
   'agbcdfe' 
   
#### 简述阐明一下mvvm
    m 数据模型
    v 视图
    vm 监听模型数据的改变和控制视图行为，连接m与v
#### vuex是啥
    全局的状态管理
    state 状态
    mution 

#### vue插槽有哪几种，他们的区别
    单个插槽：没有属性的插槽，只是替换插槽本身
    命名插槽：solt元素可以用一个特殊的特性name来进一步分发内容
    作用域插槽：可以访问组件内部数据的可复用插槽，在父级中具有特殊特性的slot-scope元素必须存在，表示他是作用域的模板，此变量接受自组件传递过来的prop对象

#### vue的生命周期总共有几个阶段
    8个阶段
    创建前/后，载入前后，更新前后，销毁前后

#### 简述vue中父子组件如何通信
    或许他会说.sync

#### 简述vue中$nextTick(neikesiteite)的作用，列举一个典型应用场景

#### .vue中，为什么data是函数返回对象，而不是直接使用对象

#### vue-router跳转路由时，如果跳转的路由与当前路由路径相同仅仅是参数不同，组件将不会重新装载，如何避免这种组件重用的情况

#### 如果我在组件中添加了一个全局的滚动事件，然后我点击路由切换了，发现它还是在运作，因为我是用了keep-alive，beforeDestory是失效的如何解决让它在其他组件不触发

#### .至少列举4个常用的设计模式

#### php了解吗 React & Redux了解吗

#### microtask是啥
    tasks和macrotask
    tasks是为了让浏览器能够从内部获取js与dom内容 并确保执行栈顺利执行
    macrotask 执行脚本结束之后会发生的事
    这也就是vue 虚拟dom    

#### 微信小程序生命周期
    onLoad()：页面加载时触发。
    onShow()：页面显示/切入前台时触发。
    onReady()：页面初次渲染完成时触发。
    onHide()：页面隐藏/切入后台时触发。
    onUnload()：页面卸载时触发。  

#### 小程序优化加载性能方法
    1、通过 this.$preload() 预加载用户可能点击的第二个页面
    2、组件化页面，出现两次以上的部分都进行封装成组件
    3、提取共用的 CSS 样式
    4、优化图片：TinyPNG 

#### 在工作中遇到过那一些问题，解决方法是

#### 你是怎么学习前端的

