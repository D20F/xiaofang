# 
## 安装
使用yum进行安装
yum install postgresql-server
查看版本 psql --version
安装完成不能直接启动数据库初始化一波
postgresql-setup initdb
pg配置文件
/var/lib/pgsql/data/pg_hba.conf
启动 停止
service postgresql start
service postgresql stop