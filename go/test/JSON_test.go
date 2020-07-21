package test

import (
	"encoding/json"
	"fmt"
	"testing"
)


type Server struct {
	ServerName string
	ServerIP   string
}

type Serverslice struct {
	Servers []Server
}

func TestJSON(t *testing.T){
	var s Serverslice
	
	// 解析JSON文件
	str := `{"servers":[{"serverName":"Shanghai_VPN","serverIP":"127.0.0.1"},{"serverName":"Beijing_VPN","serverIP":"127.0.0.2"}]}`
	// UnMarshal函数解析成结构体
	json.Unmarshal([]byte(str), &s)
	fmt.Println(s)

	// 结构体数组转JSON文件
	s.Servers = append(s.Servers, Server{ServerName: "Shanghai_VPN", ServerIP: "127.0.0.1"})
	s.Servers = append(s.Servers, Server{ServerName: "Beijing_VPN", ServerIP: "127.0.0.2"})
	// Marshal函数转换为JSON文件
	b, err := json.Marshal(s)
	if err != nil {
		fmt.Println("json err:", err)
	}
	fmt.Println(string(b))
}


