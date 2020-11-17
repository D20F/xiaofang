# 

## 账号 
postgres账号 750411
d账号 750411
## 安装
使用yum进行安装
yum install postgresql-server

查看版本 psql --version

安装完成不能直接启动数据库初始化一波
postgresql-setup initdb

启动 停止
service postgresql start
service postgresql stop

pg是否还在运行
netstat -a | grep PGSQ

切换到数据库用户
su - postgres  切换到原始用户
su - d         切换到自己创建的d账户
登录 psql

修改用户密码
修改 用户postgres 的密码为 750411
alter role postgres with password '750411'

退出pg命令行
\q  然后exit

查询表    查询用户表pg_roles
select * from pg_roles;

修改监听地址
进入 /var/lib/pgsql/data/postgresql.conf
#listen_addresses='localhost'
#将上面这行改成如下
listen_addresses='*'

进入 vi /var/lib/pgsql/data/pg_hba.conf
host    all         all         0.0.0.0/0      ident
修改 ident 为 trust
host    all         all         0.0.0.0/0      md5

进入验证一波密码
su - postgres
进入 本地的 d用户的 
psql -h 127.0.0.1 -U d -d postgres -W