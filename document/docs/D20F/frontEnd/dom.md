# Dom
 ## 缩小搜索范围  局部搜索  
 ``` js
   const container = document.querySelector('#container')
   container.querySelector('#target')
 ```

 ##  快速缩写
 ``` js
   const $ = document.querySelector.bind(document)
   $('#id')
 ```

 ##  增加dom元素
 ``` js
   document.body.insertAdjacentHTML(
   'beforeend',
   '<a href="/home" class="active">首页</a>'
   )
   // beforebegin : 元素之前
   // afterbegin  : 元素内，位于现存的第一个子元素之前
   // beforeend   : 元素内，位于现存的最后一个子元素之后
   // afterend    : 元素之后
   // 更舒服的是，它还有两个好兄弟，让开发者可以快速地插入 HTML 元素和字符串：
   // 插入 HTML 元素
   document.body.insertAdjacentElement(
   'beforeend',
   document.createElement('a')//body最后面插入了一个a标签
   )
   // 插入文本
   document.body.insertAdjacentText('afterbegin', 'cool!')//body最前面插入了一个cool文本
 ```

 ##  移动DOM
 ``` js
 <div class="first">       然后操作一下，把 <h2> 搞到 <h1> 的后面去          <div class="first">
    <h1>Title</h1>          const h1 = document.querySelector('h1')           <h1>Title</h1>
  </div>                    const h2 = document.querySelector('h2')           <h2>Subtitle</h2>
  <div class="second">      h1.insertAdjacentElement('afterend', h2)        </div>
    <h2>Subtitle</h2>       于是我们就得到了这样的结果：                       <div class="second">
  </div>
                                                                             
 ```

 ##  替换dom元素
 ``` js
 oldElement.replaceWith(newElement)
  // 新元素是dom元素的话。新元素会移动到旧元素位置，旧元素会直接消失
  // 新元素是字符串话。字符串会直接替代旧元素。
 ```
 
 ##  删除dom元素
 ``` js
   const target = document.querySelector('#target')
   target.remove()    //直接remove()
 ```
 ##  dom关系判断
 ``` js
  // matches 方法可以判断出一个元素是否匹配一个确定的选择器：
  <div class="say-hi">Hello DOM!</div>
  const div = document.querySelector('div')
  div.matches('div')      // true
  div.matches('.say-hi')  // true
  div.matches('#hi')      // false
  
  // contains 方法可以检测出一个元素是否包含另一个元素（或者：一个元素是否是另一个元素的子元素）：
  <div><h1>Title</h1></div>
  <h2>Subtitle</h2>
  const $ = document.querySelector.bind(document)
  const div = $('div')
  const h1 = $('h1')
  const h2 = $('h2')
  div.contains(h1)   // true
  div.contains(h2)   // false
 ```










    










