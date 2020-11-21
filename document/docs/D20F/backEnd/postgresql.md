# 

## 账号 
postgres账号 750411
d账号 750411
## 安装
使用yum进行安装     yum install postgresql-server

查看版本            psql --version

安装完成不能直接启动数据库初始化一波        postgresql-setup initdb

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
本地ip测试    进入d用户的 
psql -h 127.0.0.1 -U d -d postgres -W

启动 停止
service postgresql start
service postgresql stop

pg是否还在运行
netstat -a | grep PGSQ

切换到数据库用户
su - postgres  切换到原始用户
su - d         切换到自己创建的d账户
登录 psql

创建普通用户test                        create user test encrypted password 'test';
创建超级用户test                        create user test superuser;
修改 用户postgres 的密码为 750411       alter role postgres with password '750411'
将超级用户test修改为普通用户             alter user test nosuperuser;
修改test用户为超级用户                   alter user test superuser;




退出pg命令行 \q  然后exit
查看所有数据库   \l
查看所有角色 \du
选择数据库 \c 数据库名
查看当前数据库所有表 \d  查看表结构 \d 表名

删除表
DROP TABLE table_name;


查询表    查询用户表pg_roles
select * from pg_roles;

root账户创建的表，其他用户访问需要public
其他用户创建的表不需要public





