package test

import (
	"fmt"
	"log"
	"net/http"
	"strings"
)



func login(w http.ResponseWriter, r *http.Request) {
	//注意:如果没有调用ParseForm方法，下面无法获取表单的数据
    //解析url传递的参数，对于POST则解析响应包的主体（request body）
    r.ParseForm() 
    //这些信息是输出到服务器端的打印信息
    fmt.Println("网页端信息 form :", r.Form) 
    //地址路由
    fmt.Println("地址 path :", r.URL.Path)
    // 解析出传给服务端的参数 
	for k, v := range r.Form {
		fmt.Println("%v:%v", k,strings.Join(v, ""))
	}


	// 返回给网页端的数据  JSON形式
	data := `{"servers":[{"serverName":"Shanghai_VPN","serverIP":"127.0.0.1"},{"serverName":"Beijing_VPN","serverIP":"127.0.0.2"}]}`
	fmt.Fprintf(w, data) //这个写入到w的是输出到客户端的
}



func testtwo() {
	http.HandleFunc("/login", login)      //设置访问的路由

	// 绝对路径和相对路径 映射出来的静态资源的路径是以dist包里面的文件名为准的
	// http.Handle("/", http.FileServer(http.Dir("C:/Users/Administrator/Desktop/test/react/build")))
	// http.Handle("/", http.FileServer(http.Dir("./dist")))

	err := http.ListenAndServe(":9090", nil) //设置监听的端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}

}
