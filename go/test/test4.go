package test

import (
	"fmt"
	"regexp"
)

// 使用regexp包  三个函数的输入源分别是byte slice、RuneReader和string。
// func Match(pattern string, b []byte) (matched bool, error error)
// func MatchReader(pattern string, r io.RuneReader) (matched bool, error error)
// func MatchString(pattern string, s string) (matched bool, error error)



func init() {

	fmt.Println(IsNumber("asda"))	

}


func IsNumber(ip string) (b bool) {
	if m, _ := regexp.MatchString("/^[a-zA-Z]*$/", ip); !m {
		return false
	}
	return true
}