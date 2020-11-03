# 
在go目录下
 go test -v test/mysql_test.go
 Test为前缀名
 输入 t *testing.T 自动导入测试包

- mysql
 1. mysql 增删改查mysql
- test 
 1. mysql_test              mysql语句
 2. struct_test             遍历结构体
 3. server_test             网页接口以及静态资源服务器
 4. JSON_test               解析JSON和转换为JSON文件
 5. regexp_test             正则
 6. websocket_test          websocket 
 7. mkdir_test              mkdir 创建文件夹
 8. timer_test              timer 定时器
 8. reptile_test            爬虫
 9. gorm_test               gorm 操作数据库
 9. xorm_test               xorm 操作数据库








<form action="http://localhost:8080/upload/" enctype="multipart/form-data" method="POST"> 
    <input type="file" name="file" id="pic" accept="*" />
    <button type="submit">提交</button>
</form>



## liunx平台
```bash
    CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main-linux-amd64 main.go
```
