## docker
## 安装
就按照官网安装

## Docker Hub
使用现成的官方镜像白嫖

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

## 我们也可以使用 -p 标识来指定容器端口绑定到主机端口。
1. -P :是容器内部端口随机映射到主机的高端口。
2. -p : 是容器内部端口绑定到指定的主机端口。
    docker run -d -p 5000:5000 training/webapp python app.py 33e4523d30aaf0258915c368e66e03b49535de0ef20317d3f639d40222ba6bc0
3.  我们可以指定容器绑定的网络地址，比如绑定 127.0.0.1。
    docker run -d -p 127.0.0.1:5001:5000 training/webapp python app.py

## 查询容器端口映射
docker port bf08b7f2cd89



## 新建docker网络互连容器 实现容器互通
## 给容器配置dns

##  Compose 是用于定义和运行多容器 Docker 应用程序的工具。
通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。

## Docker Swarm 是 Docker 的集群管理工具。
它将 Docker 主机池转变为单个虚拟 Docker 主机。 Docker Swarm 提供了标准的 Docker API，所有任何已经与 Docker 守护程序通信的工具都可以使用 Swarm 轻松地扩展到多个主机。

## docker -v 挂载本机目录到容器内
譬如我要启动一个centos容器，宿主机的/test目录挂载到容器的/soft目录，可通过以下方式指定：
docker run -it -v /test:/soft centos /bin/bash

## 使用Dockerfile创建自己的镜像


## Portainer
管理docker镜像 安装Portainer镜像后投射到网页管理 
账号 admin  密码 7504116aaA