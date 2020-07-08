package mysql

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

var Db *sql.DB

type User struct {
	Name   string `json:"name"`
	Title  string `json:"title"`
	Author string `json:"author"`
	Date   string `json:"date"`
}
type parameter struct {
	Sql  string
	Data []string
}

func init() {
	fmt.Println("连接成功")
}

func Connection(name, password, address, database string) string {
	// Db, err = sql.Open("mysql", "D:123456@tcp(106.55.6.193:3306)/d_data")
	var err error
	var data string
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

func Inserts(sql string, args ...interface{}) string {
	var err error
	// stmt, err := Db.Prepare("INSERT INTO userinfo SET username=?,department=?,created=?")
	stmt, err := Db.Prepare(i.Sql)
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
	}
	// res, err := stmt.Exec("astaxie", "研发部门", "2012-12-09")
	res, err := stmt.Exec(sql, args...)
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
	}
	fmt.Printf("成功 %v\n", res)
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
func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
func main() {

}
