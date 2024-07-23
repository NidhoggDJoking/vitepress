
【SVG】路径＜Path＞标签详解

path的所有命令如下，除了M、L和Z 非常简单外，我会在这篇文章中对剩下的命令的用法进行详细介绍。

M = moveto 起始

L = lineto 连线

H = horizontal lineto 水平线

V = vertical lineto 垂直线

C = curveto 三次贝塞尔曲线

S = smooth curveto 三次贝塞尔曲线

Q = quadratic Bézier curve 二次贝塞尔曲线

T = smooth quadratic Bézier curveto 二次贝塞尔曲线

A = elliptical Arc 椭圆弧

Z = closepath 闭合（从最后一个点连直线到起始点）

使用大写字母表示绝对位置，小写字母表示相对位置（相对于起点的位置，向右向下为正）。