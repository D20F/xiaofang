// 基本类型：undefined、null、string、number、boolean、symbo（ES6）
// 引用类型：Object、Array、RegExp、Date、Function
// 区别：引用类型值可添加属性和方法，而基本类型值则不可以。

//                   prototype
//                -------------->   
// 构造函数person                   person.prototype原型
//       |        <--------------          ↗
//       |           constructor         ⁄
//      new                         _proto_
//       |                           ⁄
//       ↓                         ⁄
//   实例对象p  ----------------- ⁄



// JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
// JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串
// 深拷贝方法一    var obj2=JSON.parse(JSON.stringify(obj1)) 
// 深拷贝方法二    var obj2=[...obj1]
// 深拷贝方法三
function copy(obj) {
    if(typeof obj == "object") { //判断是否复杂类型
       var result = obj.constructor == Array ? [] : {};//判断数组类型或是object，数组即result=[]，object即result={}
        for(let i in obj) {
            result[i] = typeof obj[i] == "object" ? copy(obj[i]) : obj[i]//判断数据每一项是否是object
        }
    } else {
        var result = obj //基本类型直接拷贝
    }
  return result;
}
