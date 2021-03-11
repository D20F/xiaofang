# webpack

```js

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');      //HTML模板设置
let { CleanWebpackPlugin } = require('clean-webpack-plugin');  //更新dist文件夹

//package.json配置解释
// "scripts": {
//   "build": "webpack --config webpack.config.js",  //打包文件   --config使用哪个配置JS文件
//   "watch": "webpack --watch",                     //观察模式
//   "start": "webpack-dev-server --open",           //启动webpack服务器
//   "server": "node server.js"                      //启动express服务器
// },

module.exports = {
  entry: {                      //入口
    app: './src/index.js',      //入口一   app为入口一名          
    print: './src/print.js'     //入口二   print为入口二名
  },
  output: {                                 //出口
    filename: '[name].main.js',             //出口JS [name]为入口名
    path: path.resolve(__dirname, 'dist'),  //打包文件夹
    publicPath: '/'                         //express服务器脚本路径 
  },
  plugins: [                        //设置
    new CleanWebpackPlugin(),       //更新dist文件夹
    new HtmlWebpackPlugin({         //HTML模板设置
      title: 'Output Management'    //设置HTML title内容
    }),
    new webpack.DefinePlugin({      //指定环境变量
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

  ],
  mode: "production",               //精简JS删除不需要的JS代码
  devtool: 'inline-source-map',     //设置error模式，会直接跳转到源文件error
  devServer: {                      //设置web服务器设置
    contentBase: './dist',          //设置web服务器的文件夹
    host: "localhost",              //设置host 默认localhost
    port: 8082,                     //设置端口号 默认8080
    hot: true,                      //热更新 默认true
    open: true                      //设置开启服务是否自动打开网页

  },
  module: {
     rules: [
       {                            //打包css
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {                            //打包图片
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {                            //打包字体
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
       {                            //打包资源文件
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {                            //打包资源文件
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       }
     ]
  }
};
```