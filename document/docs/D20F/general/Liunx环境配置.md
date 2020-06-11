# liunx环境配置
 ## yum
      yum下载不成功，试着更新最新yum或者换yum的源
      去阿里云看操作
      替换yun源为阿里源

      mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
      wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
      yum makecache
 ## Git
yum直接下载


手动下载最新版本git:</br>
卸载低版本git</br>
yum remove git</br>
安装以下依赖包</br>
yum install gcc</br>
yum install gcc-c++</br>
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel</br>
yum install  gcc perl-ExtUtils-MakeMaker</br>
下载git压缩包 </br>
wget https://github.com/git/git/archive/v2.27.0.tar.gz</br>
解压</br>
tar zxf v2.27.0.tar.gz</br>
进入文件夹</br>
cd git-2.27.0</br>
::: warning
这两行命令貌似没用</br>
make prefix=/usr/local/git all</br>
make prefix=/usr/local/git install</br>
:::
添加到环境变量</br>
echo "export PATH=$PATH:/usr/local/git/bin" >> /etc/bashrc</br>
source /etc/bashrc</br>

 ## Node
   yum直接下载
   yum install nodejs -y 安装node

   下载liunx版本node</br>
   wget https://nodejs.org/dist/v12.18.0/node-v12.18.0-linux-x64.tar.xz</br>
   解压</br>
   tar xvf node-v12.18.0-linux-x64.tar.xz</br>
   软连接 连接</br>
   ln -s /root/node-v12.18.0-linux-x64/bin/node /usr/local/bin/node</br>
   ln -s /root/node-v12.18.0-linux-x64/bin/npm /usr/local/bin/npm</br>


    按照腾讯云的文档做
 ## Mysql
    参照我的文档
 ## Nginx
    yum install nginx -y 安装nginx 服务器
    修改nginx配置文件
    vi /etc/nginx/nginx.conf 
 ## redis
    yum install redis -y  按照redis



