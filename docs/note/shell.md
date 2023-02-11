# Shell

<!-- https://www.cnblogs.com/fengliu-/p/9999854.html -->

## 开始

```sh
#!/bin/bash
echo "Hello World !"
```

` #! ` 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。

echo 命令用于向窗口输出文本。

## 变量

### 使用变量

使用一个定义过的变量，只要在变量名前面加美元符号即可，如：

```sh
your_name="joking"
echo $your_name
echo ${your_name}
```

变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界


### 只读变量

使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。

下面的例子尝试更改只读变量，结果报错：

```sh
#!/bin/bash

myUrl="https://github.com/NidhoggDJoking/vitepress"
readonly myUrl
myUrl="https://github.dev/NidhoggDJoking/vitepress"
```

运行脚本，结果如下：

```sh
/bin/sh: NAME: This variable is read only.
```

### 删除变量

使用 unset 命令可以删除变量。语法：

```sh
#!/bin/sh
myUrl="https://github.com/NidhoggDJoking/vitepress"
unset myUrl
echo $myUrl
```

变量被删除后不能再次使用。unset 命令不能删除只读变量。


## 流程控制

```php
<?php
if (isset($_GET["myUrl"])) {
    echo '做了事'
}
else {
    // 不做任何事情
}
```

::: warning 注意
与 JavaScript、PHP 等语言不一样，sh 的流程控制不可为空.
:::

在 `sh/bash` 里可不能这么写，如果 `else` 分支没有语句执行，就不要写这个 `else`。


### if 语句语法格式

```sh
if condition
then
    command1 
    command2
    ...
    commandN 
fi
```

`if`  的 `[...]` 判断语句中大于使用 `-gt`，小于使用 `-lt`。

```sh
if [ "$a" -gt "$b" ]; then
    ...
fi
```

如果使用 `((...))` 作为判断语句，大于和小于可以直接使用 `>` 和 `<`。

```sh
if (( a > b )); then
    ...
fi
```

- 大于 `-gt`  ( greater than )
- 小于 `-lt`  ( less than )
- 大于或等于 `-ge`  ( greater than or equal )
- 小于或等于 `-le`  ( less than or equal )
- 不相等 `-ne`  ( not equal )
- 相等 `-eq`  ( equal )


::: warning 注意
Shell 是没有 '===' 那是 JavaScript 别搞混了.
:::

```sh
a=10
b=20
if [ $a == $b ]
then
   echo "a 等于 b"
elif [ $a -gt $b ]
then
   echo "a 大于 b"
elif [ $a -lt $b ]
then
   echo "a 小于 b"
else
   echo "没有符合的条件"
fi
```

::: details 运行脚本，输出：
```
a 小于 b
```
:::

### if else 语句语法格式

```sh
if condition
then
    command1 
    command2
    ...
    commandN
else
    command
fi
```

### if else-if else 语句语法格式

```sh
if condition1
then
    command1
elif condition2 
then 
    command2
else
    commandN
fi
```

末尾的 `fi` 就是 `if` 倒过来拼写, 我理解的是这即为`if` 语句的结束符如同 `(` 和 `)` 一样


## for 循环

### for循环一般格式

```sh
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done
```

终端推荐

```sh
for var in item1 item2 ... itemN; do command1; command2… done;
```

就把 `do` `done` 当做 `(` 和 `)` 吧


```sh
for loop in 1 2 3 4 5
do
    echo "The value is: $loop"
done
```


::: details 运行脚本，输出：
```
The value is: 1
The value is: 2
The value is: 3
The value is: 4
The value is: 5
```
:::


### while 语句

while 循环用于不断执行一系列命令，也用于从输入文件中读取数据。其语法格式为：

```sh
while condition
do
    command
done
```

```sh
#!/bin/bash
int=1
while(( $int<=5 ))
do
    echo $int
    let "int++"
done
```

::: details 运行脚本，输出：
```
1
2
3
4
5
```
:::


无限循环

::: code-group

```sh [无限循环一]
while :
do
    command
done
```

```sh [无限循环二]
while true
do
    command
done
```

```sh [无限循环三]
for (( ; ; ))



```
:::

### until 循环

until 循环执行一系列命令直至条件为 true 时停止。

until 循环与 while 循环在处理方式上刚好相反。

一般 while 循环优于 until 循环，但在某些时候—也只是极少数情况下，until 循环更加有用。

until 语法格式:

```sh
until condition
do
    command
done
```