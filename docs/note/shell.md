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


## if 语句

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

condition 一般为条件表达式，如果返回值为 false，则继续执行循环体内的语句，否则跳出循环。

以下实例我们使用 until 命令来输出 0 ~ 9 的数字：

```sh
#!/bin/bash

a=0

until [ ! $a -lt 5 ]
do
   echo $a
   a=`expr $a + 1`
done
```

::: details 运行脚本，输出：
```
0
1
2
3
4
```
:::


## case ... esac

case ... esac 为多选择语句，与其他语言中的 switch ... case 语句类似，是一种多分支选择结构，每个 case 分支用右圆括号开始，用两个分号 `;;` 表示 break，即执行结束，跳出整个 case ... esac 语句，esac（就是 case 反过来）作为结束标记。

可以用 case 语句匹配一个值与一个模式，如果匹配成功，执行相匹配的命令。

case ... esac 语法格式如下：

```sh
case 值 in
模式1)
    command1
    command2
    ...
    commandN
    ;;
模式2)
    command1
    command2
    ...
    commandN
    ;;
esac
```

case 工作方式如上所示，取值后面必须为单词 in，每一模式必须以右括号结束。取值可以为变量或常数，匹配发现取值符合某一模式后，其间所有命令开始执行直至 `;;`。

取值将检测匹配的每一个模式。一旦模式匹配，则执行完匹配模式相应命令后不再继续其他模式。如果无一匹配模式，使用星号 * 捕获该值，再执行后面的命令。

下面的脚本提示输入 1 到 4，与每一种模式进行匹配：

```sh
echo '输入 1 到 4 之间的数字:'
echo '你输入的数字为:'
read aNum
case $aNum in
    1)  echo '你选择了 1'
    ;;
    2)  echo '你选择了 2'
    ;;
    3)  echo '你选择了 3'
    ;;
    4)  echo '你选择了 4'
    ;;
    *)  echo '你没有输入 1 到 4 之间的数字'
    ;;
esac
```



## 跳出循环

在循环过程中，有时候需要在未达到循环结束条件时强制跳出循环，`Shell` 使用两个命令来实现该功能：`break` 和 `continue`。

### break 命令

`break` 命令允许跳出所有循环（终止执行后面的所有循环）。

下面的例子中，脚本进入死循环直至用户输入数字大于5。要跳出这个循环，返回到shell提示符下，需要使用`break`命令。

```sh
#!/bin/bash
while :
do
    echo -n "输入 1 到 5 之间的数字:"
    read aNum
    case $aNum in
        1|2|3|4|5) echo "你输入的数字为 $aNum!"
        ;;
        *) echo "你输入的数字不是 1 到 5 之间的! 游戏结束"
            break
        ;;
    esac
done
```

::: details 运行脚本，输出：
```
输入 1 到 5 之间的数字:3
你输入的数字为 3!
输入 1 到 5 之间的数字:7
你输入的数字不是 1 到 5 之间的! 游戏结束
```
:::

输入不同的内容，会有不同的结果，例如：


```
输入 1 到 4 之间的数字:
你输入的数字为:
3
你选择了 3
```


下面的脚本匹配字符串：

```sh
#!/bin/sh

site="google"

case "$site" in
   "gitee") echo "码云"
   ;;
   "google") echo "Google"
   ;;
   "overflowstack") echo "栈爆网"
   ;;
esac
```

::: details 运行脚本，输出：
```
Google
```
:::


### continue

continue 命令与 break 命令类似，只有一点差别，它不会跳出所有循环，仅仅跳出当前循环。

对上面的例子进行修改：

```sh
#!/bin/bash
while :
do
    echo -n "输入 1 到 5 之间的数字: "
    read aNum
    case $aNum in
        1|2|3|4|5) echo "你输入的数字为 $aNum!"
        ;;
        *) echo "你输入的数字不是 1 到 5 之间的!"
            continue
            echo "游戏结束"
        ;;
    esac
done
```

运行代码发现，当输入大于5的数字时，该例中的循环不会结束，语句 echo "游戏结束" 永远不会被执行。

