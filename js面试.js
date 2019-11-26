// 基本类型：undefined、null、string、number、boolean、symbo（ES6）
// 引用类型：Object、Array、RegExp、Date、Function
// 区别：引用类型值可添加属性和方法，而基本类型值则不可以。

//                   prototype
//                -------------->   
// 构造函数person                   person.prototype原型
//       |        <--------------          ↗
//       |           constructor         ⁄
//      new                         _proto_
//       |        ⁄                  ⁄
//       ↓       ⁄                 ⁄
//   实例对象p  ----------------- ⁄
