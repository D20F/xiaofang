# liunx目录

## 目录操作
```
删除目录
rm -rf data 

创建目录
mkdir $HOME/testFolder

移动目录
mv $HOME/testFolder /var/tmp
```
## 文件操作
```
删除文件
rm -r data.js 

使用 touch 命令创建文件
touch ~/testFile

使用 cp 命令复制文件
cp ~/testFile ~/testNewFile

使用 rm 命令删除文件, 输入 y 后回车确认删除
rm ~/testFile

使用 cat 命令查看 .bash_history 文件内容
cat ~/.bash_history
```
## 过滤, 管道与重定向
```
过滤出 /etc/passwd 文件中包含 root 的记录
grep 'root' /etc/passwd
递归地过滤出 /var/log/ 目录中包含 linux 的记录
grep -r 'linux' /var/log/

管道写法，比如, 我们可以将 cat 和 grep 两个命令用管道组合在一起
cat /etc/passwd | grep 'root'
```
## shell模式
```
进入shell模式
sh
退出shell模式
exit
```
## 文件编辑
```
vi编辑法
进入文件
vi test.txt，
编辑模式选择
按a或i进入编辑模式
退出
esc键退出编辑模式，输入:wq保存并退出。输入:q!不保存退出
```
