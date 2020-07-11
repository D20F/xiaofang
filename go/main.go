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
	// test "D_page/test"
	
)

type User struct {
	NAME   string `json:"NAME"`
	nickname  string `json:"nickname"`
	createdate string `json:"createdate"`
}

func main() {
	mysql.Connection("D", "123456", "106.55.6.193:3306", "D")
	ar := []string{"USER","NAME='北京'"}
	us := []string{"NAME","nickname","createdate"}
	es := []string{"NAME","nickname","createdate"}
	au :=mysql.Getrow(ar,us,es)
	fmt.Println(au)

}


