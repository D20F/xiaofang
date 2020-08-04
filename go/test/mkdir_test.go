package test

import (
	"fmt"
	// "fmt"
	"os"
	"testing"
)

//检查路径下是否有此文件夹
func checkPath(path string) bool {
	_, err := os.Stat(path)
	if err != nil {
		return false
	} else {
		return true
	}
}

func TestMkdir(t *testing.T) {

	ccc := checkPath("../test")
	fmt.Println(ccc)

	//os.Mkdir("../../abc", os.ModePerm)
	//
	//// 创建单级目录
	//os.Mkdir("abc", os.ModePerm)
	//
	//// 创建多级目录
	//os.MkdirAll("dir1/dir2/dir3", os.ModePerm)

}
