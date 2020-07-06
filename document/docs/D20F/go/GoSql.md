# go sql
## 
``` go
package main

import (
	// "net/http"
	// "strings"

	// "github.com/gin-gonic/gin"
	"database/sql"
	"encoding/json"
	"fmt"
	"strings"

	_ "github.com/go-sql-driver/mysql"
	// "github.com/jmoiron/sqlx"
)

var Db *sql.DB

type User struct {
	Name   string `json:"name"`
	Title  string `json:"title"`
	Author string `json:"author"`
	Date   string `json:"date"`
}

func JsonDump(v interface{}, indent int) string {
	var b []byte
	var err error
	if indent > 0 {
		b, err = json.MarshalIndent(v, " ", strings.Repeat(" ", indent))
	} else {
		b, err = json.Marshal(v)
	}

	if err != nil {
		return ""
	}
	return string(b)
}

// fmt.Sprintf("%s,%s", hello, world)

func init() {

}
func connection(name, password, address, database string) string {
	var err error
	var data string
	// Db, err = sql.Open("mysql", "D:123456@tcp(106.55.6.193:3306)/d_data")
	data = fmt.Sprintf("%v:%v@tcp(%v)/%v", name, password, address, database)
	Db, err = sql.Open("mysql", data)
	if err != nil {
		fmt.Println("open mysql failed,", err)
	}
	fmt.Println("连接成功")
	return "成功"
}

func insert() string {
	var err error
	result, err := Db.Exec("INSERT INTO D_tb (name, title, author, date) VALUES ( '名字嗷', '标题嗷', '内容嗷' , now())")
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
	} else {
		fmt.Printf("成功: %v", result)
	}
	return "成功"
}
func delete() string {
	var err error
	result, err := Db.Exec("DELETE FROM D_tb WHERE name='名字嗷'")
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
	} else {
		fmt.Printf("成功: %v", result)
	}
	return "成功"
}
func update() string {
	var err error
	result, err := Db.Exec("UPDATE D_tb SET title='作者' WHERE name='test'")
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
	} else {
		fmt.Printf("成功: %v", result)
	}
	return "成功"
}
func getrow() string {
	var users User
	rows := Db.QueryRow("select name, title, author, date from D_tb")

	err := rows.Scan(&users.Name, &users.Title, &users.Author, &users.Date)

	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
	}
	fmt.Printf("users:%+v\n", users)
	return "成功"

}

func getrows() string {
	var users []User

	rows, err := Db.Query("select name, title, author, date from D_tb")
	defer rows.Close()
	for rows.Next() {
		t := User{}
		err = rows.Scan(&t.Name, &t.Title, &t.Author, &t.Date)
		users = append(users, t)
	}
	err = rows.Err()
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
	}
	fmt.Printf("users:%#v\n", users)
	return "成功"
}
func main() {

	connection("D", "123456", "106.55.6.193:3306", "d_data")

}

```



