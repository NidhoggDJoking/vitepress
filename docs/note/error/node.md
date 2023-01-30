### MYSQL的版本为8.0+的时候 ， 用NODEJS查询数据库报错:

```sh
ER_NOT_SUPPORTED_AUTH_MODE
```
[stackoverflow](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)

解决方法:

```sh
$ cd /usr/local/mysql/bin
$ mysql -u root -p
Enter password: (enter your root password)

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
mysql> FLUSH PRIVILEGES;
mysql> quit
```