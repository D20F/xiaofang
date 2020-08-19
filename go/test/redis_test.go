package test

import (
	"fmt"

	"testing"

	"github.com/garyburd/redigo/redis"
)

func TestRedis(t *testing.T) {
	c, err := redis.Dial("tcp", "106.55.6.193:6379")
	if err != nil {
		fmt.Println("Connect to redis error", err)
		return
	}
	fmt.Println("12121")
	defer c.Close()
}

