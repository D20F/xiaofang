# react_redux
 ##  介绍redux
数据为基础 行为action控制 由reducers合并统一控制</br>

 ## store数据
定义各种基础数据
 ``` js 
// actions.js
/**
 * APP_UI    app界面控制
 * @param {string}  SHOW_PURSECARD                遮罩动画显示
**/
export const SHOW_PURSECARD = 'SHOW_PURSECARD'

export const APP_UI = {
    SHOW_PURSECARD: SHOW_PURSECARD,
}
/**
 * APP_DATA    app界面控制
 * @param {object}  DATA_BASE                       数据库对象
**/
export const DATA_BASE = 'DATA_BASE'

export const APP_DATA = {
    DATA_BASE: DATA_BASE,
}
 ```
 ## action行为
定义各种行为操作，用来控制数据的状态</br>
``` js
// actions.js
// 控制SHOW_PURSECARD
export function pursecardFun(data) {
  return { type: SHOW_PURSECARD, data }
}
// 控制DATA_BASE
export function dataBaseFun(data) {
  return { type: DATA_BASE, data }
}
```
 ## reducers减速器
定义各种行为操作，用来控制数据的状态</br>
``` js
// reducers.js

// 导入combineReducers合并
import { combineReducers } from 'redux'
// 导入文件
import {
    APP_UI,
    APP_DATA,
    SHOW_PURSECARD,
    DATA_BASE,
} from './actions'

function APP_UI_TREE(state = APP_UI, action) {
    switch (action.type) {
        case SHOW_PURSECARD:
            return  Object.assign({}, state, {
                        SHOW_PURSECARD: action.data
                    })
        default:
            return state
    }
}

function APP_DATA_TREE(state = APP_DATA, action) {
    switch (action.type) {
        case DATA_BASE:
            return  Object.assign({}, state, {
                        DATA_BASE: action.data
                    })
        default:
            return state
    }
}
// 两个数据树合并
const todoApp = combineReducers({
    APP_UI_TREE,
    APP_DATA_TREE,
})

export default todoApp
```
 
  ##  store导出写法
 ``` js
   // store.js

      import { createStore } from 'redux'
      import todoApp from './reducers'
      // 创建store
      let store = createStore(todoApp);
      // 导出，再index.js文件导入即可使用
      export default store
 ```
  ##  index页面创建store
 ``` js
   // index.js

   // redux 导入
   import { Provider } from 'react-redux'
   import { createStore, applyMiddleware } from 'redux'
   import { createLogger } from 'redux-logger'
   import thunk from 'redux-thunk'
   import reducer from './redux/reducers'

   // thunk中间件使用
   const middleware = [ thunk ];
   if (process.env.NODE_ENV !== 'production') {
      middleware.push(createLogger());
   }

   // 创建store
   const store = createStore(
      reducer,
      applyMiddleware(...middleware)
   )
   ReactDOM.render(
      <Provider store={store}>
         </APP>
      </Provider>
   , document.getElementById('root'));
 ```
  ##  组件内使用redux

 ``` js
   // Home.js
   import React from "react";
   import ReactDOM from 'react-dom';
   // connect将组件连接到reudx
   import { connect } from 'react-redux'
   // 导入行为函数
   import { pursecardFun } from '../../redux/actions'

   class App extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount(){
      // 绑定之后 redux数据会被绑定到this.props
      console.log(this.props.APP_UI_TREE.SHOW_PURSECARD)
   }
   handleAddTodo = () => {
      this.props.inclick()
   }
   render() {
         return (
            <div>
            <button className="add-todo" onClick={this.handleAddTodo}>
               Add Todo
            </button>
            {this.props.APP_UI_TREE.SHOW_PURSECARD}
            </div>
         )
      }
   }
   // connect绑定 接受函数
   const mapStateToProps = (state) => {
     return state
   }
   // connect绑定 输出函数 
   给组件内绑定action
   const mapDispatchToProps = dispatch => {
      return {
         inclick: () => dispatch(pursecardFun('CCC')),
      }
   }
export default connect( mapStateToProps, mapDispatchToProps)(App)

 ```
 
 ### []()
 





 ##  路由守卫呢?
 ``` js
    console.log(1)
 ```









    










