 # vuex
  导入vue vuex 注册vuex</br>
  state 用来数据共享数据存储</br>
  mutation 用来注册改变数据状态, store.commit()来操作数据</br>
  getters 用来对共享数据进行过滤操作, 跟computed计算属性差不多的作用</br>
  action 用来操作mutation, 即解决mutation同步问题，可以改为异步操作 store.dispatch()操作</br>
``` js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count : '',   
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    countFun (state, data) { 
      state.count = data;
    },
  },
  getters: {
    doneTodos: state => {
      // filter函数，添加符合条件的数值
      return state.todos.filter((todo) => {todo.done})
    }
  }
  actions: {
    increment (context) {
      context.commit('countFun','')
    }
  },
})

```
# modules
store分块，用来合并store的
```js
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
```




    










