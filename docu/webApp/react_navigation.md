# react native
## 事前准备
::: tip
  **路由 react navigation**
  - @react-navigation/native

  1. **配套的库**
  - react-native-reanimated
  - react-native-gesture-handler
  - react-native-screens
  - react-native-safe-area-context
  - @react-native-community/masked-view

  2. **堆栈导航器**
  - @react-navigation/stack

  3. **底部导航器**
  - @react-navigation/bottom-tabs
  
  4. **抽屉导航器**
  - @react-navigation/drawer

  5. **水平滑动导航器**
  - @react-navigation/material-top-tabs 
  - react-native-tab-view

 
:::

## 导航器
``` js
// 创建堆栈导航器
const Stack = createStackNavigator();
// 创建底部标签导航器
const Tab = createBottomTabNavigator();
```


## 入门结构页面
``` js
// 创建堆栈导航器
const Stack = createStackNavigator();
// HomeScreen为页面组件
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## 路由跳转
``` js
  // 返回上一层
  <Button title="Go back" onPress={() => navigation.goBack()} />
  // 返回堆栈的顶端 第一个页面
  <Button title="Go back" onPress={() => navigation.popToTop()} />
  // push跳转 可传参
  <Button
    title="Go to Details... again"
    onPress={() =>
      navigation.push('Details', {
        itemId: Math.floor(Math.random() * 100),
      })
    }
  />
  // navigate 导航跳转 可传参
  <Button
    title="Go to Details"
    onPress={() => {
      navigation.navigate('Details', {
        itemId: 86,
      });
    }}
  />
```

## 路由传参
``` js
  // 传参方式在路由跳转上有
  // 接受参数
function DetailsScreen({ route, navigation }) {
  // itemId 使用?语法判断空值避免报错  route.params?.itemId
  // otherParam 也可解构获取路由参数
  const { otherParam } = route.params;
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>itemId: {route.params?.itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
    </View>
  );
}
// 组件也可以用 initialParams 设置默认的路由参数
function App() {
  return (
    <NavigationContainer>
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          initialParams={{ itemId: 42, otherParam: 'here'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## 堆栈导航器 - 标题栏
::: tip
setOptions 可以在组件内再次设置标题栏属性
:::
|  标题栏属性        |             |                           |
| :-----            | :--:        | :-------                  |
|   title           |   标题题目   |                           |
|   headerStyle     |  标题样式    |backgroundColor: '#f4511e' |
|   headerTintColor |   字体颜色   |headerTintColor: '#fff'    |
|   headerTitleStyle|   字体样式   |fontWeight: 'bold',        |
|   headerTitle     |   中间内容   | 可用组件整个替换            |
|   headerRight     |    右边内容  | 可用组件整个替换            |
|   headerLeft      |    左边内容  | 可用组件整个替换            |
``` js
import * as React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/stack';
function CreatePostScreen({ navigation, route }) {
  return (
    <View>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ 
          title: 'Updated!',
          headerRight: () => (
            <Button onPress={() => setCount(c => c + 1)} title="Update count" />
          )
        })}
      />
    </View>
  );
}
// 自定义标题栏组件
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./src/assets/ic_launcher_round.png')}
    />
  );
}
const Stack = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          initialParams={{ itemId: 42, otherParam: 'here'}}
          options={({ route }) => ({ 
            title: route.params.name,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: props => <LogoTitle {...props} />,
            headerLeft: props => <LogoTitle {...props} />,
          })}
        />
        <Stack.Screen name="Home" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## 底部导航器 - 标题栏
::: tip
setOptions 可以在组件内再次设置标题栏属性
:::
|  标题栏属性        |             |                                                       |
| :-----            | :--:        | :-------                                              |
|   tabBarIcon      |   底部栏样式 |     整个修改底部栏样式                                  |
|   tabBar   |  自定义标题栏    |  |

``` js
import * as React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function LogoTitle(props) {
  let url;
  let data = {
    phone:[require('./src/assets/phones.png'), require('./src/assets/phone.png')],
    computer:[require('./src/assets/computers.png'),require('./src/assets/computer.png')]
  }
  url = data[props.name][props.index];
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={url}
    />
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let index;
            if (route.name === 'Home') {
              iconName = 'phone';
              focused ? index = 0 : index = 1;
            } else if (route.name === 'Settings') {
              iconName = 'computer';
              focused ? index = 0 : index = 1;
            }
            return <LogoTitle name={iconName} index={index}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
```
## 抽屉导航器 - 标题栏
::: tip
setOptions 可以在组件内再次设置标题栏属性
:::
|  标题栏属性        |             |                                                       |
| :-----            | :--:        | :-------                                              |
|    openDrawer     |  打开       |                                       |
|  closeDrawer      |  关闭       |                                     |
|  toggleDrawer     |  切换       |                                     |
|  drawerContent     |  自定义侧边栏       |                                     |

``` js
import * as React from 'react';
import { Button, View , Text, Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.openDrawer()} title="Go back home" />
      <Button onPress={() => navigation.closeDrawer()} title="Go back home" />
      <Button onPress={() => navigation.toggleDrawer()} title="Go back home" />
      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} title="Go back home" />
      <Button onPress={() => navigation.dispatch(DrawerActions.closeDrawer())} title="Go back home" />
      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} title="Go back home" />
    </View>
  );
}
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./src/assets/ic_launcher_round.png')}
    />
  );
}
function CustomDrawerContent({ progress, ...rest }) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <DrawerItemList {...rest} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        <LogoTitle />
      </Animated.View>
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```
## 水平滑动导航器 - 标题栏
::: tip
setOptions 可以在组件内再次设置标题栏属性
:::
|  标题栏属性        |             |                                                       |
| :-----            | :--:        | :-------                                              |
| tabBarPosition     |  设置标题栏位置       |  top, bottom                             |
|  closeDrawer      |  关闭       |                                     |
|  toggleDrawer     |  切换       |                                     |
|  drawerContent     |  自定义侧边栏       |                                     |

``` js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, TouchableOpacity,Text } from 'react-native';
import Animated from 'react-native-reanimated';

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Animated.Text style={{ opacity }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

## 嵌套导航器
  **暂时不会用到 文档让尽量别用**

## 导入库范例
``` js

// 创建堆栈导航器
const Stack = createStackNavigator();
// 创建底部标签导航器
const Tab = createBottomTabNavigator();

```