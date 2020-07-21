package test

import (
	// "fmt"
	"os"
	"testing"

)


func TestMkdir(t *testing.T) {


	os.Mkdir("../../abc", os.ModePerm) 
	
	// 创建单级目录
	os.Mkdir("abc", os.ModePerm) 

	// 创建多级目录
	os.MkdirAll("dir1/dir2/dir3", os.ModePerm)


}


