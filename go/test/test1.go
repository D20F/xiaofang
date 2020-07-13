package test

// 遍历结构体
import (
	"fmt"
	"reflect"
)

type User struct {
	NAME   string `json:"NAME"`
	nickname  string `json:"nickname"`
	createdate string `json:"createdate"`
}

func test(){
    ss := User{
		NAME:"asfsa",
		nickname:"北京",
	}
    RangeStruct(ss, func(k, v string) {
        fmt.Printf("range:%s,%s\n", k, v)
    })
}

func RangeStruct(in interface{}, h func(k, v string)) {
    rType, rVal := reflect.TypeOf(in), reflect.ValueOf(in)
    if rType.Kind() == reflect.Ptr { // 传入的in是指针,需要.Elem()取得指针指向的value
        rType, rVal = rType.Elem(), rVal.Elem()
    }
    if rType.Kind() != reflect.Struct {
        return
    }
    for i := 0; i < rType.NumField(); i++ { // 遍历结构体
        t, f := rType.Field(i), rVal.Field(i)
        // fmt.Printf("%v,%v\n", t, f)
        // 此处可以参照f.String(),f.Int(),f.Float()源码,处理不同类型,我这里统一转成string类型了
        if f.Kind() != reflect.Struct { // 不深入遍历结构体了,有需要自己实现吧
            h(t.Name, fmt.Sprint(f))
        }
	}
}