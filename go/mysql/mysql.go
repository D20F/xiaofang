package mysql

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

/** 数据定义
 *  @Title Db 								定义数据指针
 *  @Title Parameter 						定义key - value 查询的结构体
 *  @Title Pra 								数组形式的 Parameter结构体 方便放在一起查询
**/
// type User struct {
// 	Name   string `json:"name"`
// 	Title  string `json:"title"`
// 	Author string `json:"author"`
// 	Date   string `json:"date"`
// }

// Db   定义数据指针
var Db *sql.DB

// Parameter   定义key - value 查询的结构体
type Parameter struct {
	Key   string
	Value string
}

// Pra 数组形式的 Parameter结构体 方便放在一起查询
type Pra []Parameter

/** 函数
 *  @Title Connection 连接数据库
 *  @Title InsertStatement 插入数据 --- SQL语句插入模式
 *  @Title InsertsKeyValue 插入数据 --- Key-Value 模式插入
 *  @Title Delete 删除数据 --- 填写WHERE子句选择删除
 *  @Title Update 更新数据 --- 填写SET WHERE子句更新
**/

func init() {}

func Connection(name, password, address, database string) string {
	// Db, err = sql.Open("mysql", "D:123456@tcp(106.55.6.193:3306)/d_data")
	var err error
	var data string
	data = fmt.Sprintf("%v:%v@tcp(%v)/%v", name, password, address, database)
	Db, err = sql.Open("mysql", data)
	if err != nil {
		fmt.Println("open mysql failed,", err)
		return "连接失败"
	}
	fmt.Println("连接成功")
	return "连接成功"
}

func InsertStatement(sql string) string {
	// INSERT INTO USER (NAME, nickname, createdate) VALUES ( '名字嗷', '标题嗷' , now())
	var err error
	result, err := Db.Exec(sql)
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
	} else {
		fmt.Printf("成功: %v", result)
	}
	return "成功"
}

func InsertsKeyValue(n string, i Pra) string {
	var list string
	var key string
	var data string
	for index, v := range i {
		if len(i)-1 == index && v.Key == "createdate" {
			key += v.Key
			data += v.Value
		} else if v.Key == "createdate" {
			key += v.Key + ","
			data += v.Value + ","
		} else {
			key += v.Key + ","
			data += "'" + v.Value + "',"
		}
	}
	list = fmt.Sprintf("INSERT INTO %v (%v) VALUES ( %v);", n, key, data)
	var err error
	result, err := Db.Exec(list)
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
		return "失败"
	} else {
		fmt.Printf("成功: %v", result)
	}
	return "成功"
}

func Delete(n, sql string) string {
	var err error
	var list string
	list = fmt.Sprintf("DELETE FROM %v WHERE %v;", n, sql)
	result, err := Db.Exec(list)
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
		return "删除失败"
	} else {
		fmt.Printf("成功: %v", result)
	}
	return "成功"
}

func Update(n, i, l string) string {
	// "UPDATE USER SET NAME='北京' WHERE nickname='昵称'"
	var err error
	var list string
	list = fmt.Sprintf("UPDATE %v SET %v WHERE %v;", n, i, l)
	result, err := Db.Exec(list)
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
		return "更新失败"
	} else {
		fmt.Printf("更新成功: %v", result)
	}
	return "更新成功"
}


func Getrow(args, arr, dest []string) map[string]string{
	// select NAME from USER where NAME='北京'
	var list string
	var arrstring string
	for index, v := range arr {
		if len(arr)-1 == index {
			arrstring += v
		}else {
			arrstring += v + ","
		}
	}
	list = fmt.Sprintf("select %v from %v where %v;", arrstring, args[0], args[1])
	rows := Db.QueryRow(list)
	err := rows.Scan(&dest[0],&dest[1],&dest[2])
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
	}
	scoreMap := make(map[string]string)
	for i, v := range arr {
		scoreMap[v] = dest[i]
    }
	// fmt.Println(scoreMap)
	return scoreMap
}


// func getrows() string {
// 	var users []User

// 	rows, err := Db.Query("select name, title, author, date from D_tb")
// 	defer rows.Close()
// 	for rows.Next() {
// 		t := User{}
// 		err = rows.Scan(&t.Name, &t.Title, &t.Author, &t.Date)
// 		users = append(users, t)
// 	}
// 	err = rows.Err()
// 	if err != nil {
// 		fmt.Printf("get failed, err: %v\n", err)
// 	}
// 	fmt.Printf("users:%#v\n", users)
// 	return "成功"
// }

// type User struct {
// 	NAME   string `json:"NAME"`
// 	nickname  string `json:"nickname"`
// 	createdate string `json:"createdate"`
// }

// func main() {
// 	mysql.Connection("D", "123456", "106.55.6.193:3306", "D")
// 	ar := []string{"USER","NAME='北京'"}
// 	us := []string{"NAME","nickname","createdate"}
// 	es := []string{"NAME","nickname","createdate"}
// 	au :=mysql.Getrow(ar,us,es)
// 	fmt.Println(au)

// }