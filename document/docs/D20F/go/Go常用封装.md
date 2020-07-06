# go

## go basepath 封装
dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
if err != nil {
	log.Fatal(err)
}
fmt.Println(dir)

## 连接地址
distAbs, _ := filepath.Abs(filepath.Join(filepath.Dir(os.Args[0]), "dist"))
fmt.Println("distAbs:", distAbs) 
