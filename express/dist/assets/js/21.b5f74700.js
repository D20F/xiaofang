(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{371:function(s,t,a){"use strict";a.r(t);var e=a(43),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装mysql-liunx系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql-liunx系统"}},[s._v("#")]),s._v(" 安装mysql  liunx系统")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("```\n安装过程原地址\nhttps://blog.csdn.net/wohiusdashi/article/details/89358071?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase\n```\n")])])]),a("h2",{attrs:{id:"_1-安装yum-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装yum-repo"}},[s._v("#")]),s._v(" 1. 安装YUM Repo")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1、由于CentOS 的yum源中没有mysql，需要到mysql的官网下载yum repo配置文件。\n下载命令：\n按照自己需求修改版本号\nwget https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm\n\n2、然后进行repo的安装：\nrpm -ivh mysql57-community-release-el7-9.noarch.rpm\n\n执行完成后会在/etc/yum.repos.d/目录下生成两个repo文件mysql-community.repo mysql-community-source.repo\n")])])]),a("h2",{attrs:{id:"_2-使用yum命令即可完成安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用yum命令即可完成安装"}},[s._v("#")]),s._v(" 2.使用yum命令即可完成安装")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("注意：必须进入到 /etc/yum.repos.d/目录后再执行以下脚本\n1、安装命令：\nyum install mysql-server\n2、启动msyql：\nsystemctl start mysqld #启动MySQL\n3、获取安装时的临时密码（在第一次登录时就是用这个密码）：\ngrep 'temporary password' /var/log/mysqld.log\n4、倘若没有获取临时密码，则\n4.1、删除原来安装过的mysql残留的数据\nrm -rf /var/lib/mysql\n再次获取临时密码\ngrep 'temporary password' /var/log/mysqld.log\n4.2.再启动mysql\nsystemctl start mysqld #启动MySQL\n")])])]),a("h2",{attrs:{id:"_3-登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-登录"}},[s._v("#")]),s._v(" 3.登录")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1、方式一（已验证）：\nmysql -u root -p\n然后输入密码（刚刚获取的临时密码）\n2、方式二（未验证）：\n进入mysql数据库\nroot@test:/home# mysql -uroot -proot   <uroot是用户名，proot是密码>\n如：\nroot@test:/home# mysql -root -XXXX\n")])])]),a("h2",{attrs:{id:"_4-若登录不了，则进行以下配置，跳过登录验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-若登录不了，则进行以下配置，跳过登录验证"}},[s._v("#")]),s._v(" 4.若登录不了，则进行以下配置，跳过登录验证")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("3.1、重置密码的第一步就是跳过MySQL的密码认证过程，方法如下：\n3.2、vim /etc/my.cnf(注：windows下修改的是my.ini)\n在文档内搜索mysqld定位到[mysqld]文本段：\n/mysqld(在vim编辑状态下直接输入该命令可搜索文本内容)\n在[mysqld]后面任意一行添加“skip-grant-tables”用来跳过密码验证的过程，\n")])])]),a("h2",{attrs:{id:"_5-登录成功后修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-登录成功后修改密码"}},[s._v("#")]),s._v(" 5.登录成功后修改密码")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("查看 mysql 初始的密码策略，\n输入语句 “ SHOW VARIABLES LIKE 'validate_password%'; ” 进行查看。\n设置密码强度\n输入设值语句 “ set global validate_password_policy=LOW; ” 进行设值\n设置密码长度\n输入设值语句 “ set global validate_password_length=6; ” 进行设值\n1、方式一（已验证）：\nALTER USER 'root'@'localhost' IDENTIFIED BY '@abcd123456'; \n2、方式二（未验证）\nset password=password(\"yourpassword\"); \n")])])]),a("h2",{attrs:{id:"_6-其他配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他配置"}},[s._v("#")]),s._v(" 6.其他配置")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("七、其他配置\n1、设置安全选项：\nmysql_secure_installation\n2、关闭MySQL\nsystemctl stop mysqld \n3、重启MySQL\nsystemctl restart mysqld \n4、查看MySQL运行状态\nsystemctl status mysqld \n5、设置开机启动\nsystemctl enable mysqld \n6、关闭开机启动\nsystemctl disable mysqld \n7、配置默认编码为utf8：\nvi /etc/my.cnf #添加 [mysqld] character_set_server=utf8 init_connect='SET NAMES utf8'\n其他默认配置文件路径： \n配置文件：/etc/my.cnf 日志文件：/var/log//var/log/mysqld.log 服务启动脚本：/usr/lib/systemd/system/mysqld.service socket文件：/var/run/mysqld/mysqld.pid\n8、查看版本\nselect version();\n")])])]),a("h1",{attrs:{id:"安装cordova"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装cordova"}},[s._v("#")]),s._v(" 安装cordova")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    自己看官网啦\n    \n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);