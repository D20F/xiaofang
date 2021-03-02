## docker
## 安装
就按照官网安装

### 镜像
## 查看当前本地镜像列表
   docker images

## 查看远程相关镜像镜像
   docker search 镜像名字

## 拉取镜像到本地
   docker pull 镜像名字

## 删除镜像（当存在多个名字一样的镜像时候，可以通过指定tag方式来操作，如ubuntu:16.04）
   docker rmi 镜像名字


### 容器
## 创建一个docker容器，返回容器的id
   docker create 镜像名字

## 运行docker容器
   docker start 容器id

## 启动容器 
 1. 启动 ubuntu 容器 然后执行 /bin/echo "Hello world" 命令
   docker run ubuntu:15.10 /bin/echo "Hello world"  

## 启动容器 进入镜像交互模式
    -i: 交互式操作。
    -t: 终端。
    ubuntu: ubuntu 镜像。
    /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。
    docker run -i -t ubuntu:15.10 /bin/bash 

## 进入容器
1. docker attach 如果从这个容器退出，会导致容器的停止。
docker attach 1e560fca3906 
2. docker exec 因为此退出容器终端，不会导致容器的停止。
docker exec -it 243c32535da7 /bin/bash




## docker -v 挂载本机目录到容器内
譬如我要启动一个centos容器，宿主机的/test目录挂载到容器的/soft目录，可通过以下方式指定：
docker run -it -v /test:/soft centos /bin/bash

## 停止容器
   docker stop 容器id

## 查看docker容器
  1. 查看当前运行的docker容器 
    docker ps
  2. 查看全部的docker容器
    docker ps -a

## 删除容器
docker rm -f 1e560fca3906

## 导出入容器 
1. 导出容器 
docker export 1e560fca3906 > ubuntu.tar
2. 导入本地容器 
$ cat docker/ubuntu.tar | docker import - ubuntu
此外，也可以通过指定 URL 或者某个目录来导入，例如：
$ docker import http://example.com/exampleimage.tgz exampleimage


### 容器与镜像间的操作
## 终端连接到容器
   docker exec -i -t 容器id bash
## 复制文件到容器里面
   docker cp index.html 镜像id://usr/share/nginx/html
## 保存更改并生成为一个新的image文件
   docker commit -m "mess" 镜像id 镜像名字


## 查询容器端口映射
 docker port bf08b7f2cd89

## 使用Dockerfile创建自己的镜像


## Portainer
管理docker镜像 安装Portainer镜像后投射到网页管理 
账号 admin  密码 7504116aaA