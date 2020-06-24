# react_router
## 例子 
react-transition-group 过渡。 需要传入location不然无法定位，不能实现动画效果</br>
react-router-dom 路由 </br>
``` js
    import { TransitionGroup, CSSTransition } from "react-transition-group";
    import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
    import Home from './Home';
    import Friend from './Friend';
    import Users from './Users';
    ReactDOM.render(
            <Router>
                <Route render={({ location }) => (               
                    <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={300}>
                            <Switch location={location}>
                                <Route path="/" exact component={Home} />
                                <Route path="/friend/" component={friend} />
                                <Route path="/users/" component={Users} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup> 
                )}/>
            </Router>
    , document.getElementById('root'));
```
## 跳转
获取到外部传入的props参数
用history来进行跳转和传参
```js
class Jump extends React.Component {
  constructor(props) {
      super(props);
  }
  componentDidMount(){
    let { history } = this.props
    history.push({pathname: '/',query:{a:1}})
    // 或者
    // this.props.history.push({pathname: '/',query:{a:1}})
    // 获取路由参数
    console.log(this.props.location.query)
  }
}
```
## 过渡CSS
和vue格式一样
``` css
    .fade-enter {
        opacity: 0;  z-index: 1;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;  transition: opacity 250ms ease-in;
    }
```




 ##  路由守卫呢?
 ``` js
    没有
 ```



 








    










