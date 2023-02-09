# 疑难杂症


### MYSQL的版本为8.0+的时候 ， 用NODEJS查询数据库报错:

```sh
ER_NOT_SUPPORTED_AUTH_MODE
```

解决方法: [stackoverflow](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)

```sh
$ cd /usr/local/mysql/bin
$ mysql -u root -p
Enter password: (enter your root password)

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
mysql> FLUSH PRIVILEGES;
mysql> quit
```

::: warning
Access denied for user 'XX'@'localhost' (using password: NO)
:::
### 

```sh
$ cd /usr/local/mysql/bin
$ mysql -u root -p
Enter password: (enter your root password)

mysql> select user from user;
+------------------+
| user             |
+------------------+
| mysql.infoschema |
| mysql.session    |
| mysql.sys        |
| root             |
+------------------+
5 rows in set (0.00 sec)
```

```sh
$ cd /usr/local/mysql/bin
$ mysql -u xx -p

Enter password: (enter your root password)

mysql>
```

### MySQL 修改账户名与密码


::: danger 注意
操作之前切记先关闭数据库的服务！
:::

```sh
net stop mysql
```


```sh{15,18}
NidhoggDJokingdeMacBook-Pro:~ joking$ cd /usr/local/mysql/bin/ 
NidhoggDJokingdeMacBook-Pro:bin joking$ ./mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3
Server version: 5.7.25 MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.03 sec)

mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('1234');
Query OK, 0 rows affected, 1 warning (0.01 sec)

mysql>
```

[MySQL 版本的不同，执行命令有所差异](https://dev.mysql.com/doc/refman/5.7/en/resetting-permissions.html)

<!-- ```sh
MySQL 5.7.6 and later:
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass'; 

MySQL 5.7.5 and earlier:
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('MyNewPass');
``` -->

::: code-group

```sh [MySQL 5.7.5 and earlier]
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('MyNewPass');
```

```sh [MySQL 5.7.6 and later]
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass'; 
```
:::



重启服务

```sh
net start mysql
```




