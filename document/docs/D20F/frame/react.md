# React
 ##  常识
   JSX函数的名称必须大写，负责render函数无法识别
   不使用箭头写法，需要自己手动绑定this
 ##  JSX
   ``` js
   使用map来实现列表渲染，可以用index做key，key必须为唯一
   this.state.data.map((item, index) =>
      <li key={index}>{item}</li>
   )
   ```

 ##  Class类组件
   ### 组件内数据改变函数
      this.setState()
      分别写入后，和minxis差不多浅合并
      只可在this.setState()里改变
      this.setState((state, props) => {
         timesVisited: state.timesVisited + props.count
      });
   ``` js
      this.setState({count:this.state.count + 1});
      console.log('1',this.state.count)
      this.setState({count:this.state.count + 1});
      console.log('2',this.state.count)
      setTimeout(() => {
      console.log('3',this.state.count)
      this.setState({count:this.state.count + 1});
      console.log('33',this.state.count)
      }, 1000);
      setTimeout(() => {
      console.log('4',this.state.count)
      this.setState({count:this.state.count + 1});
      console.log('44',this.state.count)
      }, 1000);
      this.setState({count:this.state.count + 1});
      console.log('5',this.state.count)
      // 结果
       1    0
       2    0
       5    0
       3    1
       33   2
       4    2
       44   3


   ```
   ### 生命周期
   <img :src="$withBase('/reactCycle.png')" alt="">
   <span style="color:green;">挂载</span>

   1. 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
   - constructor()
   - static getDerivedStateFromProps()
   - render()
   - componentDidMount()

   2. 更新   
   - 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
   - static getDerivedStateFromProps()
   - shouldComponentUpdate()
   - render()
   - getSnapshotBeforeUpdate()
   - componentDidUpdate()

   3. 卸载
   - 当组件从 DOM 中移除时会调用如下方法：
   - componentWillUnmount()

   4. 错误处理
   - 当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：
   - static getDerivedStateFromError()
   - componentDidCatch()

   ### 事件
   ``` js
      普通写法，需手动绑定this
      在constructor手动绑定 this.handleClick = this.handleClick.bind(this);
      handleClick() {
         console.log(1)
      }
      箭头函数写法，无需手动绑定this
      handleClick = () => {
         console.log(1)
      }
      普通写法，但使用箭头函数调用，无需手动绑定this
      <button onClick={() => this.handleClick()}>

   ```
   ### 组件参数
      给组件赋值，默认的给算到props里面去了
      
   ### 常识
      类组件里面使用this来获取类组件
      事件使用小驼峰结构
 
 ## 组合 - 继承 
   ### 简单组合
   ``` js
      这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中：
      function FancyBorder(props) {
         return (
            <div>
               {props.children}
            </div>
         );
      }
      这使得别的组件可以通过 JSX 嵌套，将任意组件作为子组件传递给它们
      function WelcomeDialog() {
         return (
            <FancyBorder color="blue">
               <h1 className="Dialog-title">
                  Welcome
               </h1>
            </FancyBorder>
         );
      }
   ```
   ### 复杂组合
   ``` js
      将子组件进行命名 
      function SplitPane(props) {
         return (
            <div className="SplitPane">
               <div className="SplitPane-left">
                  {props.left}
               </div>
               <div className="SplitPane-right">
                  {props.right}
               </div>
            </div>
         );
      }
      在标签内 用命名的组件加入进去
      function App() {
         return (
            <SplitPane
               left={
                  <Contacts />
               }
               right={
                  <Chat />
               }
            />
         );
      }
   ```
 ##  代码分割
  ### 懒加载JS
   ``` js
      普通加载
      import OtherComponent from './OtherComponent';
      懒加载
      const OtherComponent = React.lazy(() => import('./OtherComponent'));
   ```
 ##  Context组件传值
   首先创建一个Context,可以给他一个默认的值
   const ThemeContext = React.createContext(data);
   在父节点使用 Provider 来传递信息 value来初始化信息
   用contextType赋值了Context对象就可以接受信息
   contextType = ThemeContext;  接受信息 this.context来进行调用赋值
   ``` js
      // Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
      const ThemeContext = React.createContext();

      class ThemedButton extends React.Component {
      static contextType = ThemeContext;
         render() {
            return <p >{this.context}</p>;
         }
      }

      function Toolbar() {
         return (
            <div>
               <ThemedButton />
            </div>
         );
      }

      class Calculator extends React.Component {
         constructor(props) {
            super(props);
         }
         render() {
            // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
            // 无论多深，任何组件都能读取这个值。
            // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
            return (
               <ThemeContext.Provider value="dark">
                  <Toolbar />
                  <ThemedButton />
               </ThemeContext.Provider>
            );
         }
      }
   ```
 ##  Fragments
 ``` js
   用来使组件返回多个元素节点
   render() {
      return (
         <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
         </React.Fragment>
      );
   }
 ```
 ##  Portal 
   ``` js
      没搞懂
   ```
 ##  Render Props
 
 ``` js
    没搞懂
 ```
 ##  Hook
 
 ``` js
   一个专门的Hook函数
   function useFriendStatus(friendID) {
      初始化一下
      const [isOnline, setIsOnline] = useState(friendID);
      
      里面可以执行一下需要的操作，后面的[]可以规定只对特定的数值更新
      useEffect(() => {
         setIsOnline(friendID);    
         return console.log(1)
      },[friendID]);

      输出数值和改变函数
      return {
         isOnline,
         setIsOnline,
      }

   }
 ```








    










