# react native
 ##  环境配置
  ### [JAVA JDK]()
java的jdk 需要jdk 8版本  官网下8版本即可</br>
我之前的环境都是 jdk-8u241-windows-x64 版本的  </br>
8u241版本的下载地址如下 下windows 64位即可</br>
https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html</br>
  ### [Android-SDK]()
从studio里面安装安卓的SDK 需要翻墙</br>
我用的SDK版本 一个8.0 8.1 这两个</br>
studio里面SDK存放的路径</br>
C:\Users\Administrator\AppData\Local\Android\Sdk</br>
SDK存放在 C:\Users\Administrator\AppData\Local\Android\Sdk\platforms</br>
SDK命名都是以API等级为命名的，从微云下载的话，需改名 android-27(8.0)，去掉括号</br>
  ### [Android-NDK]()
NDK NDK-r10e版本的:下载地址</br>
https://developer.android.google.cn/ndk/downloads/older_releases</br>
腾讯微云也有r10e的</br>
需要有ndk不然无法打包,好像是必须r10e版本的</br>
  ### [gradle]()
gradle 打包用的，好像也要翻墙</br>
  ### [python]()
下载python 2版本的即可 我用的是 python-2.7.2.amd64 版本</br>
  ### [资源]()
都存在腾讯微云了

## [配套框架]()
  **redux**
  - react-redux
  - redux

  **Ant Design Mobile RN**

  网址 https://rn.mobile.ant.design/components/flex-cn/

  - @ant-design/react-native


  **路由 react navigation**
  - @react-navigation/native

  
## [报错踩坑]()
  ### [红屏报错]()
报错提示：Unable to load script.Make sure you're either running a metro server（ run 'react-native start' ） or that your bundle 'index.android.bundle' is packaged correctly for release.</br>
1、 项目中在android/app/src/main/创建文件夹  assets</br>
2、项目中执行命令</br>
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res </br>
*注意：查看自己项目是否有 index.android.js这个文件，如果有回车执行命令即可，否则会会报错，找不到这个index.android.js文件；把index.android.js改为index.js</br>
执行这句命令后会在新建的assets文件夹下生成一个index.android.bundle文件</br>
3、 项目中执行react-native run-android，成功启动</br>

## 打包
  正常流程肯定是没错的
  cd android
  gradlew assembleRelease
  打包后的release 版本只能在手机上安装，模拟器安装会闪退
 ### 启动页设置
 切分辨率图标: https://makeappicon.com/
 启动页插件 react-native-splash-screen  

## [运行]()
首先npm start 开启服务
使用安卓Android adb命令
adb reverse tcp:8081 tcp:8081
查看是否连接模拟器
adb devices
模拟器上运行开启
react-native run-android

## [注意事项]()
使用定时器一定要手动清除

## [Animated 动画]()
组合动画 动画还可以使用组合函数以复杂的方式进行组合：</br>
  Animated.delay()在给定延迟后开始动画。</br>
  Animated.parallel()同时启动多个动画。</br>
  Animated.sequence()按顺序启动动画，等待每一个动画完成后再开始下一个动画。</br>
  Animated.stagger()按照给定的延时间隔，顺序并行的启动动画。</br>
配置动画</br>
  Animated.decay()以指定的初始速度开始变化，然后变化速度越来越慢直至停下。</br>
  Animated.spring()提供了一个基础的弹簧物理模型.</br>
  Animated.timing()使用easing 函数让数值随时间动起来</br>
  ### [普通例子]()
```js
import Animated from 'react-native'
const FadeInView = (props) => {
  // 使用hook 设置初始值设为0
  const [fadeAnim] = useState(new Animated.Value(0))  
  // hook生命周期开始动画
  React.useEffect(() => {
    // 顺序执行 Animated.sequence
    Animated.sequence([
      //Animated.spring 弹性模型动画 会弹一下
      Animated.spring(fadeAnim, {
        toValue: 200, //设置值 fadeAnim的值变为设置值
        friction: 7,  //弹性系数
        tension: 40, //速度系数
      }),
      //Animated.timing 随着缓动函数的动画 ，不给缓动函数，就是持续速度动画
      Animated.timing(fadeAnim,{
        toValue: 100,  //设置值 fadeAnim的值变为设置值                  
        duration: 1000,  //动画持续时间           
      }),        
      // 同时执行 Animated.parallel
      Animated.parallel([
        // Animated.decay 推动一个值以一个初始的速度和一个衰减系数逐渐变为 0。
        Animated.decay(fadeAnim,{
          velocity: -.5,     //初始速度
          deceleration: 0.997, //衰减速度 貌似不可更改 不填写默认为0.997
        }),              
        Animated.decay(fadeAnim,{
          velocity: 1,
          deceleration: 0.997,
        }),              
      ])
    ]).start(); //start()开始动画咯
  }, [])
  return (
    <Animated.View                 // 使用专门的可动画化的View组件
      style={{
        ...props.style,
        opacity: fadeAnim,         // 将透明度绑定到动画变量值
        top: fadeAnim,         // 将透明度绑定到动画变量值
      }}
    >
      {props.children}    {/* react的组合 默认给子组件 */}
    </Animated.View>
  );
}
export default class Test extends Component {
  render() {
    return (
      <View style={{flex: 1,flexDirection: 'row',justifyContent: 'center',}}>
        <FadeInView>
          <View style={{top:0,width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </FadeInView>
      </View>
    )
  }
}
```
### [Easing 缓动函数]()
``` js
import React from "react";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const App = () => {
  let opacity = new Animated.Value(0);
  const animate = easing => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      easing
    }).start();
  };
  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80]
  });
  const animatedStyles = [
    styles.box,
    {
      opacity,
      width: size,
      height: size
    }
  ];
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.title}>
        Press rows below to preview the Easing!
      </Text>
      <View style={styles.boxContainer}>
        <Animated.View style={animatedStyles} />
      </View>
      <SectionList
        style={styles.list}
        sections={SECTIONS}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => animate(item.easing)}
            style={styles.listRow}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.listHeader}>{title}</Text>
        )}
      />
    </View>
  );
};
const SECTIONS = [
  {
    title: "Predefined animations",
    data: [
      { title: "Bounce", easing: Easing.bounce },
      { title: "Ease", easing: Easing.ease },
      { title: "Elastic", easing: Easing.elastic(4) }
    ]
  },
  {
    title: "Standard functions",
    data: [
      { title: "Linear", easing: Easing.linear },
      { title: "Quad", easing: Easing.quad },
      { title: "Cubic", easing: Easing.cubic }
    ]
  },
  {
    title: "Additional functions",
    data: [
      {
        title: "Bezier",
        easing: Easing.bezier(0, 2, 1, -1)
      },
      { title: "Circle", easing: Easing.circle },
      { title: "Sin", easing: Easing.sin },
      { title: "Exp", easing: Easing.exp }
    ]
  },
  {
    title: "Combinations",
    data: [
      {
        title: "In + Bounce",
        easing: Easing.in(Easing.bounce)
      },
      {
        title: "Out + Exp",
        easing: Easing.out(Easing.exp)
      },
      {
        title: "InOut + Elastic",
        easing: Easing.inOut(Easing.elastic(1))
      }
    ]
  }
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a"
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    color: "#61dafb"
  },
  boxContainer: {
    height: 160,
    alignItems: "center"
  },
  box: {
    marginTop: 32,
    borderRadius: 4,
    backgroundColor: "#61dafb"
  },
  list: {
    backgroundColor: "#fff"
  },
  listHeader: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#f4f4f4",
    color: "#999",
    fontSize: 12,
    textTransform: "uppercase"
  },
  listRow: {
    padding: 8
  }
});
export default App;
```
 ## [点击触摸]()
```js
export default class Test extends Component {
  render() {
    return (
      <TouchableHighlight  
        onPressIn={() => console.log('点击开始')}
        onPressOut={() => console.log('点击结束或者离开')}
        onPress={() => console.log('单击事件回调')}
        onLongPress={() => console.log('长按事件回调')}
      >
        <View></View>
      </TouchableHighlight>  
    );
  }
}
```
 ## [单组件触摸事件]()

evt是一个合成事件
  evt.nativeEvent有以下字段:
|         |            |   
| ------------- |:-------------:| 
|changedTouches | 在上一次事件之后，所有发生变化的触摸事件的数组集合（即上一次事件后，所有移动过的触摸点）|
|identifier | 触摸点的 ID
|locationX  | 触摸点相对于当前元素的横坐标           |
|locationY  | 触摸点相对于当前元素的纵坐标           |
|pageX      | 触摸点相对于根元素的横坐标             |
|pageY      | 触摸点相对于根元素的纵坐标             |
|target     | 触摸点所在的元素 ID                   |
|timestamp  | 触摸事件的时间戳，可用于移动速度的计算  |
|touches    | 当前屏幕上的所有触摸点的集合           |
  gestureState有一下字段:
|         |            |   
| ------------- |:-------------:| 
|stateID | 触摸状态的 ID。在屏幕上有至少一个触摸点的情况下，这个 ID 会一直有效 |
|moveX   | 最近一次移动时的屏幕横坐标                   |
|moveY   | 最近一次移动时的屏幕纵坐标                   |
|x0      | 当响应器产生时的屏幕坐标                     |
|y0      | 当响应器产生时的屏幕坐标                     |
|dx      | 从触摸操作开始时的累计横向路程                |
|dy      | 从触摸操作开始时的累计纵向路程                |
|vx      | 当前的横向移动速度                           |
|vy      | 当前的纵向移动速度                           |
|numberActiveTouches | 当前在屏幕上的有效触摸点的数量    |
```js
  export default class Test extends Component {
  componentWillMount(){
    // 设置触摸事件 封装成一个函数  PanResponder 创建
    this._panResponder = PanResponder.create({
        // 开始触摸的时候是否愿意成为响应者，返回true成为响应者
        onStartShouldSetPanResponder: (evt, gestureState) => {
          return true;
        },
        // 开始移动的时候是否愿意成为响应者，返回true成为响应者
        onMoveShouldSetPanResponder:  (evt, gestureState) => {
            return true;
        },
        // View 现在要开始响应触摸事件了
        onPanResponderGrant: (evt, gestureState) => {

        },
        // 用户正在屏幕上移动手指时（没有停下也没有离开屏幕）
        onPanResponderMove: (evt, gestureState) => {

        },
        // 触摸操作结束时触发，比如"touchUp"（手指抬起离开屏幕）。
        onPanResponderRelease: (evt, gestureState) => {

        },
        // 有其他组件请求接替响应者，当前的 View 是否“放权”？返回 true 的话则释放响应者权力。
        onPanResponderTerminate: (evt, gestureState) => {
          
        },
    });
  }

  render() {
    return (
        <View style={styles.container}>
                <View 
                  // 将写好的手势函数放到需要监控的组件内
                  {...this._panResponder.panHandlers}
                >
                </View>
        </View>
    );
  }
}
```
## ant Design Mobile RN
``` js
  // icon 为antd react的图标 名字小写，再去掉后面的标识就行了
  import { Icon } from '@ant-design/react-native';
  <Icon name={'wechat'} color = {'#69c0ff'}/>
```
## native组件
| native组件                      |               |   
| -------------                   |:-------------:| 
| ActivityIndicator               |   圆形的 loading 提示符号           |
| Button                          |   按钮           |
| DatePickerIOS                   |   ios平台的日期/时间选择器          |
| DrawerLayoutAndroid             |   抽屉侧边栏            |
| FlatList                        |   高性能的简单列表组件            |
| Image                           |   图片            |
| ImageBackground                 |   背景图片容器            |
| KeyboardAvoidingView            |   在里面的内容,在键盘弹出会时会调整自身位置            |
| MaskedView                      |   安卓 - 蒙版元素，给元素披上一层颜色            |
| MaskedViewIOS                   |   IOS - 蒙版元素,给元素披上一层颜色            |
| Modal                           |   覆盖在其他视图之上显示内容的容器。            |
| Picker                          |   安卓 - 一个下拉选择器            |
| PickerIOS                       |   IOS - 一个下拉选择器            |
| ProgressBarAndroid              |   安卓 - 静态或者动态,条形或者圆形进度条,            |
| ProgressViewIOS                 |   IOS - 静态或者动态,条形或者圆形进度条,            |
| RefreshControl                  |   在ScrollView或ListView内部,添加下拉刷新的功能            |
| SafeAreaView                    |   在一个安全的可视区域内渲染内容,因为水滴屏，异形屏问题            |
| ScrollView                      |   滚动视图组件容器            |
| SectionList                     |   高性能的分组列表组件            |
| SegmentedControlIOS             |   IOS - 上的切换按钮            |
| Slider                          |   IOS -滑块组件            |
| StatusBar                       |   设置手机上方的状态栏,就是时间 网络提示哪里。实现真正的全屏功能            |
| StyleSheet                      |   JS设置样式            |
| Switch                          |   开关组件,一个开关按钮            |
| Text                            |   显示文本            |
| TextInput                       |   input组件,给用户输入信息            |
| TouchableHighlight              |   触摸容器,简单动画            |
| TouchableNativeFeedback         |   触摸容器,可以做水波纹动画            |
| TouchableOpacity                |   触摸容器,简单动画,透明度为主            |
| View                            |   基础组件            |
| VirtualizedList                 |   懒加载的列表            |

## native API
| native API              |               |   
| ------------- |:-------------:| 
| AccessibilityInfo                          |   询屏幕阅读器的当前状态           |
| Animated                          |   创建动画           |
| AppState                          |   区分前台后台           |
| AsyncStorage                          |   持久化的Key-Value存储系统代替LocalStorage           |
| BackHandler                           |   监听设备上的后退按钮事件           |
| CameraRoll                          |   访问本地相册的功能           |
| Clipboard                          |   控制剪贴板,读写剪贴板中的内容           |
| Dimensions                          |   获取设备屏幕的宽高           |
| Easing                          |   动画缓动函数,配合动画           |
| Geolocation                          |   地理位置API 需要翻墙，国内无法使用           |
| ImageEditor                          |   安卓 - 裁剪图片           |
| ImagePickerIOS                          |   IOS - 裁剪图片           |
| Keyboard                          |   可以监听原生键盘事件           |
| LayoutAnimation                          |   布局动画 感觉没啥用           |
| Linking                          |   提供通用的接口来与传入和传出的App进行交互            |
| PanResponder                          |   封装好的手势函数           |
| PixelRatio                          |   可以获取到设备的像素密度和字体缩放比           |
| Share                          |   打开一个对话框来共享文本内容。           |
| Vibration                          |   手机震动API           |
| Button                          |   按钮           |

## native API组件
|  native API组件             |               |   
| ------------- |:-------------:| 
| Alert                          |   创建一个弹窗           |
| AlertIOS                          |   IOS专属弹窗           |
| ActionSheetIOS                          |   IOS底部弹出框           |
| DatePickerAndroid                          |   安卓 - 日历组件,颜值很高           |
| TimePickerAndroid                          |   打开一个时间选择的对话框           |
| ToastAndroid                          |   toast提示 - 非常有用           |
| Button                          |   按钮           |
| Button                          |   按钮           |


    










