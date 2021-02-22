# Git
 ##  git
1. 添加到缓存区 git add *
2. 缓存区内容提交到本地分支 git commit -m "本地提交的是巴拉巴拉"
3. 仓库连接到某个远程服务器 git remote add origin <server>
4. 拉取分支   git pull origin master  已经关联远程分支可以省下origin master分支名也可以省下
5. 推送到分支 git push origin master  已经关联远程分支可以省下origin master分支名也可以省下
6. 合并分支  git merge master
7. 创建切换分支 git checkout -b iss53
8. 创建分支  git branch iss53
9. 切换分支 git checkout iss53
10. 将本地分支与远程保持同步 git fetch 




## 切换一个本地没有但是远程有的分支
拉取最新的内容到本地,但是不会merge
git fetch
创建一个本地分支和远程的分支关联起来
git checkout -b 本地分支名 origin/远程分支名

## git bash 生成sshkey
ssh-keygen -o
使用公钥进行git操作

## git 设置代理
git config --global http.proxy 'http://127.0.0.1:10809'





