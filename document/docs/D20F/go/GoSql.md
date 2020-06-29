# go sql
## 
``` go
package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

var Db *sql.DB  // 定义数据库对象 

//定义数据结构体
type User struct {
	name   string 
	title  string 
	author string 
	date   string 
}
// 初始化打开数据库
func init() {
	var err error
	Db, err = sql.Open("mysql", "D:123456@tcp(106.55.6.193:3306)/d_data")
	if err != nil {
		fmt.Println("open mysql failed,", err)
		return
	}
	fmt.Println("连接成功")
}
func main() {
	// 定义user类型的切片
	var users []User
	// query查询
	rows, err := Db.Query("select name, title, author, date from D_tb")
	// defer 完成后关闭
	defer rows.Close()
	// next方法遍历
	for rows.Next() {
		// 定义一个t接受数据
		t := User{}
		// Scan将该行查询结果各列分别保存进参数指定的值中
		err = rows.Scan(&t.name, &t.title, &t.author, &t.date)
		// 将赋值好的数据t拍进去切片里
		users = append(users, t)
	}
	err = rows.Err()
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
		return
	}
	fmt.Printf("users:%#v\n", users)
}
```



