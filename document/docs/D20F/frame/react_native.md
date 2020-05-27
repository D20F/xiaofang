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
  ### [gradle]()
gradle 打包用的，好像也要翻墙</br>
  ### [python]()
下载python 2版本的即可 我用的是 python-2.7.2.amd64 版本</br>
  ### [资源]()
都存在腾讯微云了

## [报错踩坑]()
  ### [红屏报错]()
报错提示：Unable to load script.Make sure you're either running a metro server（ run 'react-native start' ） or that your bundle 'index.android.bundle' is packaged correctly for release.</br>
1、 项目中在android/app/src/main/创建文件夹  assets</br>
2、项目中执行命令</br>
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res </br>
*注意：查看自己项目是否有 index.android.js这个文件，如果有回车执行命令即可，否则会会报错，找不到这个index.android.js文件；把index.android.js改为index.js</br>
执行这句命令后会在新建的assets文件夹下生成一个index.android.bundle文件</br>
3、 项目中执行react-native run-android，成功启动</br>

## [adb]()
使用安卓Android adb命令调试
adb devices
adb reverse tcp:8081 tcp:8081


    










