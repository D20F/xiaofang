# Mysql
 ## 数据库基础操作
  ### 登陆数据库 
   需要输密码
   mysql -u root -p
  ### 退出数据库 
   exit
 ## 数据库操作
  ### 显示已有数据库
    show databases;
  ### 创建数据库
    创建数据库 数据库名为D_data
    CREATE DATABASE d_data DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
  ### 删除数据库
    删除数据库 数据库名为D_data
    drop database D_data;
  ### 选择数据库
    选择数据库 数据库名为D_data
    use D_data;
 

 
 ## 表操作 
  ### 创建表
  ```sql
CREATE TABLE D_tb(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(40) NOT NULL,
  date DATE,
  PRIMARY KEY ( id, name)
);
```

    创建表 表名为D_tb

    INT VARCHAR DATE 都是定义表内数据的类型

    字段使用NOT NULL属性，是因为我们不希望这个字段的值为NULL。

    字段的AUTO_INCREMENT属性告诉MySQL自动增加id字段下一个可用编号。

    关键字PRIMARY KEY用于定义此列作为主键。可以使用逗号分隔多个列来定义主键。
  ### 删除表
    删除表 表名为D_tb
    DROP TABLE D_tb ;
  
## 数据操作
  ### INSERT 插入数据
    INSERT INTO D_tb (name, title, author, date) VALUES ( '名字嗷', '标题嗷', '内容嗷' , NOW());

    在表名为D_tb的表里 按照key对应value的方式插入数据

  ### SELECT 获取数据
    SELECT field1, field2,...fieldN table_name1, table_name2...
    [WHERE Clause]
    [OFFSET M ][LIMIT N]
    规则:
    fieled 字段key   table_name1 表名   

    可以使用分隔的一个或多个逗号从多个表，以及使用WHERE子句包括各种条件，但WHERE子句是SELECT命令的可选部分

    可以在一个SELECT命令指定读取一个或多个字段、可以指定星号(*)代替选择的字段。在这种情况下，将返回所有字段

    可以指定任意的条件在 WHERE 子句后面

    可以使用OFFSET指定一个偏移量，SELECT从那里开始返回记录。默认情况下 offset 的值是 0，可以使用LIMIT属性限制返回的数量

    在D_tb查询所有的字段  

    SELECT * from D_tb;

  ### UPDATE 更新数据
    UPDATE table_name SET field1=new-value1, field2=new-value2 [WHERE Clause]
    下面的例子将更新表名为D_tb， 字段D_id为3的纪录中的 D_title 字段。
    UPDATE D_tb SET D_title='嗷' WHERE D_id=3;

  ### DELETE 删除数据
    DELETE FROM table_name [WHERE Clause]
    如果WHERE子句没有指定，则所有MySQL表中的记录将被删除。

    可以指定使用任何条件在WHERE子句中。

    下面的例子将删除 tutorial_tbl表中 tutorial_id为3的一条记录。

    DELETE FROM tutorials_tbl WHERE tutorial_id=3;

  ### ALTER 命令
    当想改变表名，MySQL的ALTER命令非常有用, 在添加或删除任何表字段到现有列在表中。
    重命名表名
    testalter_tbl重命名为alter_tbl
    ALTER TABLE testalter_tbl RENAME TO alter_tbl;

    从testalter_tbl表中删除 i 列
    ALTER TABLE testalter_tbl DROP i;

    从testalter_tbl表中添加 l 列
    ALTER TABLE testalter_tbl ADD l INT;

    用MODIFY 从testalter_tbl表中更改 c 的类型为CHAR(10)
    ALTER TABLE testalter_tbl MODIFY c CHAR(10);

    用CHANGE 从testalter_tbl表中修改j 为 a 并将类型改为 INT
    ALTER TABLE testalter_tbl CHANGE j a INT;

  ### 索引
  

  ### WHERE子句 
  WHERE可同时查找多个条件
  |操作符    |	描述	                                                             示例               |
  |-------------   |       :-------------:                                           |      :-------------:    |
  | =	       | 检查两个操作数的值是否相等，如果是，则条件变为真。	                 |  (A = B) 不为 true.      |
  | !=	   | 检查两个操作数的值是否相等，如果值不相等，则条件变为真。	          |  (A != B) 为 true.       |
  | >	       | 检查左操作数的值是否大于右操作数的值，如果是，则条件为真。	          |  (A > B) 不为 true.      |
  | <	       | 检查左操作数的值是否小于右操作数的值，如果是，则条件为真。	          |  (A < B) 为 true.        |
  | >=	   | 检查左操作数的值是否大于或等于右操作数的值，如果是，则条件为真。      |	 (A >= B) 不为 true.  |
  | <=	   | 检查左操作数的值是否小于或等于右操作数的值，如果是，则条件变为真。	   |  (A <= B) 为 true.       |
    SELECT field1, field2,...fieldN table_name1, table_name2...
    [WHERE condition1 [AND [OR]] condition2.....

    在D_tb查询所有的字段 ，但是D_name的值需等于标题嗷 

    SELECT * from D_tb WHERE D_name='名字嗷';

  ### LIKE子句
    SELECT field1, field2,...fieldN table_name1, table_name2...
    WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'

    可以指定使用任何条件在WHERE子句中，可以使用LIKE子句在WHERE子句中，可以使用LIKE子句代替等号(=)

    当LIKE连同%符号使用，那么它就会像一个元字符的搜索，可以指定一个以上的条件使用AND或OR运算符

    WHERE... LIKE子句可以使用SQL命令的DELETE 或 UPDATE ，也可以指定一个条件

    从 tutorials_tbl 表中所有字段搜索 tutorial_author字段以 aul 结尾的所有记录：

    SELECT * from tutorials_tbl WHERE tutorial_author LIKE '%aul';

  ###  ORDER BY子句
    SELECT field1, field2,...fieldN table_name1, table_name2...
    ORDER BY field1, [field2...] [ASC [DESC]]

    可以排序返回所列出提供的任何字段的结果，可以在多个字段排序结果

    可以使用关键字ASC或DESC 决定执行升序或降序排序。

    ASC升序 DESC降序 默认情况下，按升序排列  

    可以使用WHERE ... LIKE子句以通用的方式放置条件

    从 tutorials_tbl 表中搜索所有字段 以tutorial_author字段为标升序排列

    SELECT * from tutorials_tbl ORDER BY tutorial_author ASC;

  ### Join联接
    似乎是把几个表连接在一起

  ### NULL值 
    涉及NULL的条件是特殊的。不能使用= NULL或！= NULL来匹配查找列的NULL值
    IS NOT NULL: 如果列的值不为NULL，运算结果返回 true
    IS NULL: 如果列的值为NULL，运算结果返回 true
    <=>: 运算符比较值，(不同于=运算符)即使两个空值它返回 true

    我们应当使用 IS NULL 来判断值是否为NULL

    SELECT * FROM tcount_tbl WHERE tutorial_count IS NULL;

  ### 正则表达式 
  |模式	    |什么样的模式匹配                   |   
  |-------------   |       :-------------:    | 
  |^	        |开始的一个字符串                   |
  |$	        |结束的一个字符串                   |
  |.	        |任意单个字符                       |
  |[...]	    |方括号中列出的任何字符              |
  |[^...]	    |任何字符方括号之间不会被列出         |
  |p1|p2|p3	|交替;匹配的任何模式 p1, p2, 或 p3   |
  |*	        |前一个元素的零个或多个实例           |
  |+	        |前面元素的一或多个实例              |
  |{n}	    |前一个元素的n个实例                 |
  |{m,n}	    |前一个元素的 m 到 n 个实例          |
    现在根据上面的表格，可以在不同的设备类型用SQL查询来满足要求。在这里，列出一些的理解。考虑有一个表称为 person_tbl，它是有一个 name 字段：

    查询查找所有以 “st” 开头的名字：
    mysql> SELECT name FROM person_tbl WHERE name REGEXP '^st';

    查询找到所有以 'ok' 结尾的名字
    mysql> SELECT name FROM person_tbl WHERE name REGEXP 'ok$';

    查询查找其中包含 'mar' 所有的名字
    mysql> SELECT name FROM person_tbl WHERE name REGEXP 'mar';

    查询查找以元音 'ok' 结尾的所有名称
    mysql> SELECT name FROM person_tbl WHERE name REGEXP '^[aeiou]|ok$';





## 用户权限
### 添加用户
1. 允许本地访问的用户（127.0.0.1）</br>
create user zhrt@localhost identified by '123456';  
2. 允许外网IP访问的用户</br>
create user 'zhrt'@'%' identified by '123456'; 


## 用户授权
GRANT privileges ON databasename.tablename TO 'username'@'host';
|               |               |   
| ------------- |:-------------:| 
| privileges      |   用户的操作权限,如SELECT , INSERT , UPDATE  等(详细列表见该文最后面).如果要授予所 的权限则使用ALL说明: | 
| databasename    |   数据库名                                                                                          | 
| tablename       |   表名                                                                                          | 
| username        |   账号名                                                                                          | 
| host            |   准许那个网址访问 %表示所有                                                                        | 

tablename-表名,如果要授予该用户对所有数据库和表的相应操作权限则可用* 表示, 如*.*

例子:
1. 给 查询 插入 的权限 test库的user表 账号为javacui 所有地址访问权限

GRANT SELECT, INSERT ON test.user TO 'javacui'@'%'; 

2. 给所有权限 所有库 表 账号为D 所有地址访问权限 

GRANT ALL ON *.* TO 'D'@'%';



### 刷新权限
1. flush privileges;  

## 数据库管理工具
```
 navcat
```








