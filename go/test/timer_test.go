package test

import (
	"fmt"
	"testing"
	"time"
)

func TestTimer(t *testing.T) {
	
	//单次阻塞3s
	tt := time.After(time.Second * 3)
	fmt.Printf("t type=%T\n", tt)
	fmt.Println("t=", <-tt)

	// 循环执行条件退出
	var a int
	for {
		a++
		tt := time.After(time.Second * 1)
		fmt.Println("t=", <-tt)
		if a == 10 {
			break
		}
	}



	ch1 := make(chan int)
	// 并发执行
	go func() {
		ch1 <- 1
	}()

	for {
		select {
		case e1 := <-ch1:
			//如果ch1通道成功读取数据，则执行该case处理语句
			fmt.Printf("1th case is selected. e1=%v\n", e1)
		case <-time.After(time.Second * 2):
			fmt.Println("Timed out")
		}
	}

}
