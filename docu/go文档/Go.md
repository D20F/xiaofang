# go

## 谷歌提供的一个环境变量
GOPROXY="https://goproxy.cn,direct"

## Go mod
用go mod 命令初始化项目
go mod init 项目名 来初始化
go mod tidy拉取没有的模块

## 并发
主进程死亡，并发进程也死亡

## defer 栈
defer被压进栈,会后进先出

## 包管理
go mod init 初始化主包名
同级目录下同包,不需要导入
不同级目录,不同目录,主main入口下,在主包名/包导入
_ "主包名/次包名" 

## go tag
go Json tag语法 来显示

## Abs 返回当前文件夹绝对路径 
func Abs(path string) (string, error)
filepath.Abs("/helleeo")

## 静态资源托管 go
http.Handle("/", http.FileServer(http.Dir("C:/Users/Administrator/Desktop/test/react/build")))
http.Handle("/", http.FileServer(http.Dir("./dist")))

## 静态资源托管 gin
 托管静态目录
 router.StaticFS("/more_static", http.Dir("./"))
 托管单个文件
 router.StaticFile("/logo.png", ".././express/dist/logo.png")

## 可变参数
func sum(nums ...int) {
    fmt.Println(nums...)
}
func main() {
    sum([1,2,3])
}

## import 的特殊用法
```go
import (
	_ "fmt"      // 只调用init
	. "net/http" // 默认导入全部
	"github.com/gin-gonic/gin"
)
```

