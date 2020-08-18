# Go 交叉编译

> https://blog.csdn.net/xingwangc2014/article/details/65013892
>
> https://www.jianshu.com/p/0cf26a0c7e19
>
> 2017年03月22日

Go在1.5版本中改进了对交叉编译的支持，包括统一了编译器、链接器等。从版本1.5开始，对你开发的应用程序进行夸平台交叉编译就变得相当简单了。只需要设置两个环境变量就可以搞定，分别是`GOOS`和`GOARCH`。

## 环境变量

- **GOOS**：你的应用程序将要运行平台的操作系统（darwin、freebsd、linux、windows）
- **GOARCH**：你的应用程序将要运行平台的处理器架构（386、amd64、arm） 。

- **CGO_ENABLED**：交叉编译不支持 CGO 所以要禁用它。

有效的 `$GOOS` 和 `$GOARCH` 组合如下：

|   `$GOOS`	   |  `$GOARCH`    |
|--------------|---------------|
|   android    | arm           |
|   darwin     | 386           |
|   darwin     | amd64         |
|   darwin     | arm           |
|   darwin     | arm64         |
|   dragonfly  | amd64         |
|   freebsd    | 386           |
|   freebsd    | amd64         |
|   freebsd    | arm           |
|   linux      | 386           |
|   linux      | amd64         |
|   linux      | arm           |
|   linux      | arm64         |
|   linux      | ppc64         |
|   linux      | ppc64le       |
|   linux      | mips          |
|   linux      | mipsle        |
|   linux      | mips64        |
|   linux      | mips64le      |
|   netbsd     | 386           |
|   netbsd     | amd64         |
|   netbsd     | arm           |
|   openbsd    | 386           |
|   openbsd    | amd64         |
|   openbsd    | arm           |
|   plan9      | 386           |
|   plan9      | amd64         |
|   solaris    | amd64         |
|   windows    | 386           |
|   windows    | amd64         |


## 编译方式

如果要对应用程序进行跨平台编译，首先需要设置`GOOS`和`GOARCH`两个环境变量。然后编译方式同本平台编译方式相同。

所以进行夸平台编译，为便于理解拆分开来需要执行两个步骤：

1. 设置 `GOOS` 和 `GOARCH` 两个环境变量
2. 执行 `go build`

## 示例

鉴于你可能需要编译多个平台的可执行程序，所以不建议你将GOOS和GOARCH两个环境变量在bashrc之类的文件中进行设置。

分两步操作也可能有点麻烦，你可以直接在一条命令中执行。如下：

```bash
env GOOS=linux GOARCH=arm go build -v github.com/constabulary/gb/cmd/gb
```


你也可以进入到project的根目录下，而不用在命令行中指定需要编译的project：

```bash
env GOOS=linux GOARCH=arm go build .
```

默认情况下go build会生成你package（project）名相同的可执行文件。如果你想指定生成的可执行文件的名字，需要使用-o选项：

```bash
env GOOS=linux GOARCH=arm go build -o test.bin .
```

## 其他平台的示例

Mac 下编译 [Linux](https://link.jianshu.com/?t=http://lib.csdn.net/base/linux) 和 Windows 64 位可执行程序

```bash
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build 
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build 
```

[linux](https://link.jianshu.com/?t=http://lib.csdn.net/base/linux) 下编译 Mac 和 Windows 64 位可执行程序

```bash
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build 
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build 
```

Windows 下编译 Mac 和 Linux 64 位可执行程序

```bash
SET CGO_ENABLED=0SET GOOS=darwinSET GOARCH=amd64 go build main.go
SET CGO_ENABLED=0SET GOOS=linuxSET GOARCH=amd64 go build main.go
```

```bash
https://github.com/golang/go/blob/master/src/go/build/syslist.go#L8:31
package build
const goosList = "android darwin dragonfly freebsd js linux nacl netbsd openbsd plan9 solaris windows zos "
const goarchList = "386 amd64 amd64p32 arm armbe arm64 arm64be ppc64 ppc64le mips mipsle mips64 mips64le mips64p32 mips64p32le
```



## 参考链接：
[Go Optional environment variables](https://golang.org/doc/install/source#environment)
[Cross Compile with Go 1.5](https://dave.cheney.net/2015/08/22/cross-compilation-with-go-1-5)




## 自己的liunx平台
```bash
    CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main-linux-amd64 main.go
```