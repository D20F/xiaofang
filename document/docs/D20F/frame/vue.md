# Vue
 ##  设置图片
 ``` js
  createPattern()	在指定的方向上重复指定的元素
  var pat=ctx.createPattern(img,"repeat");
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fillStyle=pat;
  ctx.fill();
 ```

 ##  组件传值
 
 ``` js
    // 组件传值
    $emit('enlarge-text', 0.1)" 子组件绑定的函数调用父组件的函数
    this.$parent.fatherMethod();调用父级的函数
    this.$refs.mychild.parentHandleclick("嘿嘿嘿");注册ref然后通过ref调用他的函数

 ```

 ##  Css
 ``` js
    <style scoped>  scoped锁定css
    <style scoped lang='scss'>  开启sass
 ```
 ##  vue双向绑定原理
 ``` js
    vue双向绑定原理 根据defineproperty实现 
 ```







    










