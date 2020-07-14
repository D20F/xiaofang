package test

import (
	"d_page/mysql"
	"testing"
	"fmt"
)

// go test -v test/mysql_test.go
// Test为前缀名
// 输入 t *testing.T 自动导入测试包

func TestGetRow(t *testing.T) {
	mysql.Connection("D", "123456", "106.55.6.193:3306", "D")
	defer mysql.Db.Close()

	type User struct {
		Name       string `json:"name"`
		Nickname   string `json:"nickname"`
		CreateDate string `json:"create_date"`
	}
	var user User

	table := "user"
	where := "name='北京' AND nickname='昵称'"
	colunms := []string{"name", "nickname", "createdate"}
	if err := mysql.GetRow(colunms, where, table,
		&user.Name, &user.Nickname, &user.CreateDate); err != nil {
		t.Fatal("db error:", err)
	}
	fmt.Println("user:",user)
}
