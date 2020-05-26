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
 ## Node
    yum直接下载
    yum install nodejs -y 安装node
    按照腾讯云的文档做
 ## Mysql
    参照我的文档
 ## Nginx
    yum install nginx -y 安装nginx 服务器
    修改nginx配置文件
    vi /etc/nginx/nginx.conf 
 ## redis
    yum install redis -y  按照redis



