package main

import (
	"database/sql/driver"
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

const (
	TIME_FORMAT string = "2006-01-02 15:04:05"
)

type MyTime struct {
	time.Time
}

func (t MyTime) MarshalJSON() ([]byte, error) {
	formatted := fmt.Sprintf("\"%s\"", t.Format(TIME_FORMAT))
	return []byte(formatted), nil
}

func (t MyTime) Value() (driver.Value, error) {
	var zeroTime time.Time
	if t.Time.UnixNano() == zeroTime.UnixNano() {
		return nil, nil
	}
	return t.Time, nil
}

func (t *MyTime) Scan(v interface{}) error {
	value, ok := v.(time.Time)
	if ok {
		*t = MyTime{Time: value}
		return nil
	}
	return fmt.Errorf("can not convert %v to timestamp", v)
}

// 结构体映射表
type User struct {
	ID         int       `gorm:"primary_key;AUTO_INCREMENT;column:id"`
	Name       string    `json:"name" gorm:"column:name"`
	Nickname   string    `json:"nickname" gorm:"column:nickname"`
	CreateDate time.Time `json:"create_date"  gorm:"column:datetime"`
}

func main() {
	// 指定字符集
	db, err := gorm.Open("mysql", "D:123456@tcp(106.55.6.193:3306)/D?charset=utf8&parseTime=True&loc=Local")
	defer db.Close()
	if err != nil {
		panic(fmt.Sprint("failed to connect database: %v", err))
	}
	// 关闭默认表名复数形式
	db.SingularTable(true)

	var user User
	fmt.Println(db.HasTable(user))

	var Name = "北京"
	//条件查询
	err = db.Where("Name = ?", Name).Find(&user).Error
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(user)
	fmt.Println(user.CreateDate.Format(TIME_FORMAT))
	// time, _ := MarshalJSON()
	// fmt.Println(time)

}
