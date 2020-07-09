package main

import (
	"fmt"
	// "html/template"
	// "log"
	// "net/http"
	// "strings"
	// "os"
	// "path/filepath"
	mysql "D_page/mysql"
)

func main() {
	mysql.Connection("D", "123456", "106.55.6.193:3306", "D")
	// var ccc mysql.Pra
	// ccc = mysql.Pra{
	// 	{"NAME", "北2京"},
	// 	{"nickname", "标题嗷"},
	// 	{"createdate", "NOW()"},
	// }
	// fmt.Println(ccc)
	// mysql.InsertsKeyValue("USER",ccc)
	mysql.Getrow("USER","NAME,nickname,createdate","NAME='北京'")
	fmt.Println("asda")
}
