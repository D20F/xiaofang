package test

import (
	"fmt"

	"testing"

	_ "github.com/go-sql-driver/mysql"
	"xorm.io/xorm"
)

var engine *xorm.Engine

func TestXorm(t *testing.T) {
	var err error
	engine, err = xorm.NewEngine("mysql", "D:123456@tcp(106.55.6.193:3306)/D?charset=utf8")
	if err != nil {
		fmt.Println(err)
	}
}
