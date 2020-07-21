package test

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "testing"
)

func HandleError(err error, why string) {
    if err != nil {
        fmt.Println(why, err)
    }
}

func TestReptileImg(t *testing.T)  {
    DownloadFile("http://i1.shaodiyejin.com/uploads/tu/201909/10242/e5794daf58_4.jpg", "1.jpg")    
    DownloadFile("http://m10.music.126.net/20200721175309/b16e5402e731496ccf696d79bd064d71/ymusic/cf08/d74d/0472/072065b82ad26e328c87090cee47fe18.mp3", "1.mp3")    
}
// 下载图片，传入的是图片叫什么
func DownloadFile(url string, filename string) (ok bool) {
    resp, err := http.Get(url)
    HandleError(err, "http.get.url")
    defer resp.Body.Close()
    bytes, err := ioutil.ReadAll(resp.Body)
	HandleError(err, "resp.body")
	filename = "./" + filename
    // 写出数据
    err = ioutil.WriteFile(filename, bytes, 0666)
    if err != nil {
        return false
    } else {
        return true
    }
}