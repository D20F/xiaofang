package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	// "os"
	// "path/filepath"
	"strings"
)

func sayhelloName(w http.ResponseWriter, r *http.Request) {
	r.ParseForm() //解析url传递的参数，对于POST则解析响应包的主体（request body）
	//注意:如果没有调用ParseForm方法，下面无法获取表单的数据
	fmt.Println("网页端信息 form :", r.Form) //这些信息是输出到服务器端的打印信息
	fmt.Println("地址 path :", r.URL.Path)
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}

	fmt.Fprintf(w, "Hello astaxie!") //这个写入到w的是输出到客户端的
}

func login(w http.ResponseWriter, r *http.Request) {
	fmt.Println("method:", r.Method) //获取请求的方法
	if r.Method == "GET" {
		t, _ := template.ParseFiles("login.gtpl")
		log.Println(t.Execute(w, nil))
	} else {
		//请求的是登录数据，那么执行登录的逻辑判断
		fmt.Println("username:", r.Form["username"])
		fmt.Println("password:", r.Form["password"])
	}
}



func main() {
	http.HandleFunc("/say", sayhelloName) //设置访问的路由
	http.HandleFunc("/login", login)   //设置访问的路由
	
	
	http.Handle("/", http.FileServer(http.Dir("C:/Users/Administrator/Desktop/test/react/build")))
	
	err := http.ListenAndServe(":9090", nil) //设置监听的端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}

}
