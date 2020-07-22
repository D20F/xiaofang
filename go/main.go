package main

import (
	"fmt"

	"github.com/gin-gonic/gin"

	"net/http"
)

var router *gin.Engine

func init() {
	router = gin.Default()
}

func ping(c *gin.Context) {
	// 数据接口
	c.JSON(200, gin.H{
		"message": "pong",
	})
}

func welcome(c *gin.Context) {
	// get请求
	name := c.Query("name")
	lastname := c.Query("lastname")
	fmt.Println("Hello %s", name)
	fmt.Println("Hello %s", lastname)
}

func form(c *gin.Context) {
	// 表单
	typ := c.PostForm("typ")
	msg := c.PostForm("msg")
	title := c.PostForm("title")
	fmt.Println("typ is %s, msg is %s, title is %s", typ, msg, title)
}

func upload(c *gin.Context) {
	// 单文件上传
	file, _ := c.FormFile("file")
	fmt.Println(file.Filename)
	// 上传文件到指定的路径
	err := c.SaveUploadedFile(file, file.Filename)
	if err != nil {
		fmt.Println(err)
	} else {
		c.JSON(200, gin.H{
			"message": "成功",
		})
	}
}

func log(c *gin.Context) {
	// 全局中间件
	fmt.Println("1111111111111111111111111")
}

func Redirect1(c *gin.Context) {
	// 内部路由重定向
	c.Request.URL.Path = "/Redirect2"
	router.HandleContext(c)
}
func Redirect2(c *gin.Context) {
	// 外链重定向
	c.Redirect(http.StatusMovedPermanently, "http://www.google.com/")
}

func main() {
	// use注册中间件
	router.Use(log)

	router.GET("/ping", ping)
	router.GET("/welcome", welcome)
	router.GET("/form", form)
	router.POST("/upload", upload)

	router.GET("/Redirect1", Redirect1)
	router.GET("/Redirect2", Redirect2)

	// 托管静态目录
	router.StaticFS("/more_static", http.Dir("./"))
	// 托管单个文件
	// router.StaticFile("/logo.png", ".././express/dist/logo.png")

	router.Run(":8080") // 监听并在 0.0.0.0:8080 上启动服务
}

// <form action="http://127.0.0.1:8080/upload" method="post" enctype="multipart/form-data">
// <form action="http://http://106.55.6.193:8080/upload" method="post" enctype="multipart/form-data">
//  <div>
//    <label for="file">Choose file to upload</label>
//    <input type="file" id="file" name="file" multiple>
//  </div>
//  <div>
//    <button>Submit</button>
//  </div>
// </form>

// var xmlhttp;
// xmlhttp=new XMLHttpRequest()
// xmlhttp.onreadystatechange=function()
// {
// 	if (xmlhttp.readyState==4 && xmlhttp.status==200)
// 	{
// 	  console.log(xmlhttp.responseText)
// 	}
// }
// xmlhttp.open("POST","/form",true);
// xmlhttp.send();
