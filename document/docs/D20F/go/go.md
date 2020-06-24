# go
## 配置git config
[http]
	proxy = socks5://127.0.0.1:1080
## 谷歌提供的一个环境变量
GOPROXY="https://goproxy.cn,direct"
## Go mod
go mod 命令

## 并发
主进程死亡，并发进程也死亡

## defer 栈
defer被压进栈,会后进先出

## go http get

```go
package main
import (
    "fmt"
    "io"
    "net/http"
)
func main() {
    //resp, _ := http.Get("http://www.baidu.com")
    //fmt.Println(resp)
    resp, _ := http.Get("http://106.55.6.193:8085/")
    defer resp.Body.Close()
    // 200 OK
    fmt.Println(resp.Status)
    fmt.Println(resp.Header)

    buf := make([]byte, 1024)
    for {
        // 接收服务端信息
        n, err := resp.Body.Read(buf)
        if err != nil && err != io.EOF {
            fmt.Println(err)
            return
        } else {
            fmt.Println("读取完毕")
            res := string(buf[:n])
            fmt.Println(res)
            break
        }
    }
}
```


