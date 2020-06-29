package main

import (
	// "net/http"
	// "strings"

	// "github.com/gin-gonic/gin"
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
	// "github.com/jmoiron/sqlx"
)

var Db *sql.DB

type User struct {
	name   string 
	title  string 
	author string 
	date   string 
}

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
	var users []User

	rows, err := Db.Query("select name, title, author, date from D_tb")
	defer rows.Close()
	for rows.Next() {
		t := User{}
		err = rows.Scan(&t.name, &t.title, &t.author, &t.date)
		users = append(users, t)
	}
	err = rows.Err()
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
		return
	}
	fmt.Printf("users:%#v\n", users)
}
