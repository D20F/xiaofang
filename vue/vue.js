// 组件传值
// $emit('enlarge-text', 0.1)" 子组件绑定的函数调用父组件的函数
// this.$parent.fatherMethod();调用父级的函数
// this.$refs.mychild.parentHandleclick("嘿嘿嘿");注册ref然后通过ref调用他的函数

// <style scoped>  锁定css

//vue双向绑定原理 根据defineproperty实现
let Person = {}
let temp = null
Object.defineProperty(Person, 'name', {
  get: function () {
    return 
  },
  set: function (val) {
    temp = val
  }
})
Person.name=1;//Person.name 1
console.log(temp)//1