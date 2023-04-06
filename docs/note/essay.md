---
outline: 'deep'
---

# 八股文

---

::: details 有空写点
<ruby>
    <span>想</span>
    <rp>(</rp>
    <rt> jiu </rt>
    <rp>)</rp>
</ruby>
<ruby>
    <span>到</span>
    <rp>(</rp>
    <rt> shi </rt>
    <rp>)</rp>
</ruby>
<ruby>
    <span>啥</span>
    <rp>(</rp>
    <rt> bu </rt>
    <rp>)</rp>
</ruby>
<ruby>
    <span>写</span>
    <rp>(</rp>
    <rt> xiang </rt>
    <rp>)</rp>
</ruby>
<ruby>
    <span>啥</span>
    <rp>(</rp>
    <rt> xie </rt>
    <rp>)</rp>
</ruby>

:::




### `null` 和 `undefined`

首先 `null` 和 `undefined` 都表示空，但是存在差异

`null`的含义是空对象，一般用于赋值给那些可能会返回对象的变量作为初始化。

`undefined` 代表的含义是未定义，一般变量声明了，但是没有赋值的时候会返回`undefined`。

```js
typeof null
'object'

typeof undefined
'undefined'
```

::: details ChatGDP：
ECMAScript 定义的标准类型包括 Undefined、Null、Boolean、String、Symbol、Number、对象（Object）。

其中，Undefined 表示未定义或无值，Null 表示空值，并且 Undefined 和 Null 都是只有一个值的数据类型。Boolean 表示 true 或 false 的逻辑值，String 表示字符串类型，Symbol 表示唯一的标识符，Number 表示数字类型。

除此之外，对象（Object）也是 ECMAScript 的标准类型之一。对象用于封装一组属性和方法，可以存储数据，并且可以通过属性名访问数据，也可以通过方法操作数据。对象可以分为原始对象（primitive object）和复杂对象（complex object），前者包括 Boolean、Number、String 等基本对象类型，而后者包括数组、函数、正则表达式、日期等等。

另外，在 ECMAScript 中还存在一种特殊类型的数据：引用类型。引用类型是一种数据结构，结构中存放的是指向另一个内存地址的指针，它与基本数据类型不同，引用类型的值是可以被修改的。常用的引用类型包括数组、函数、正则表达式、DOM元素等。

总之，ECMAScript 中定义了多种标准类型和数据类型，这些类型和数据类型在开发过程中起着重要的作用，开发者需要根据具体的场景和需求选择合适的类型和数据类型。
:::


### 判断变量类型

- `toString`

```js
console.log(Object.prototype.toString.call('5'))
console.log(Object.prototype.toString.call(5))
console.log(Object.prototype.toString.call(555555555n))
console.log(Object.prototype.toString.call(new Function()))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(null))

[object String]
[object Number]
[object BigInt]
[object Function]
[object Undefined]
[object Null]
undefined
```

- `constructor`

```js
'5'.__proto__.constructor === String 
true
[5].__proto__.constructor === Array 
true
```

每一个实例对象都可通过constructor 来访问它的构造函数 undefined和null是无效的对象，因此是没有constructor属性的,这两个值不能用这种方法判断.

- `instanceof`

```js
[] instanceof Array
true
[] instanceof String
false
```

`[].proto` 的原型是指向 `Array.prototype`,说明两个对象属于同一条原型链，返回true
person(函数) instanceof Object 也为true
参数使用了`null`。也就是说将`null`设置成了新创建对象的原型，自然就不会有原型链上的属性

- `typeof`

对于基本数据类型来说，除了null返回的是object，其他都可返回正确的类型


---

### `Label`标签的作用

`label` 标签是用来定义表单控件的关系，当用户选择`label`标签时，浏览器会自动将聚焦点转到和la标签相关的表单控件上，

关联方式：

1. 可以通过`label`标签的`for`属性来指定表单的控件`id`
2. 把表单控件作为`label`标签的子元素



### jwt

::: details ChatGDP：
JSON Web Token (JWT) 是一种轻量级的、基于JSON的身份验证和授权机制，被广泛应用于Web应用程序和服务之间的安全传输。当用户成功登录并获得令牌后，令牌将被发送到应用程序，并包含有关用户身份的信息。在后续的请求中，该令牌将作为身份验证凭证，发送到应用程序，以确保用户已经被认证并且具有所需的访问权限。

JWT的一个重要特点是它是在本地生成的，而不需要发送到服务器进行验证。它由三个部分组成：头部、负载和签名。头部通常包含算法、类型等元信息；负载包含有关用户或其他实体的声明，例如用户名、角色等；签名则是对于头部和负载的加密结果，以确保数据的完整性和安全性。

JWT可以使用HMAC算法，或采用公钥/私钥对进行签名，以提供更高的安全性和可靠性。

另外，由于JWT使用JSON格式存储数据，因此可以进行轻松的解析和处理。与传统的Session相比，JWT具有更好的可伸缩性和跨域应用支持。它还可以用于单点登录（SSO），以及为移动应用程序和API提供安全身份验证和授权。

以上内容参考自[1](https://jwt.io/)和[2](https://en.wikipedia.org/wiki/JSON_Web_Token)。
:::

### diff算法

::: details ChatGDP：

Diff算法是一种用于计算两个文本之间差异的算法。在前端领域中，Diff算法被广泛应用于处理虚拟DOM的更新，以避免频繁操作真实DOM带来的性能问题。

Diff算法的本质是比较两个文本之间的差异，通俗来说，就是找出它们之间最小的编辑距离。它有三个基本操作：插入、删除和替换。通过比较源文本和目标文本之间的这三种基本操作，我们就可以确定它们之间的差异，并进行相应的处理。

在前端开发中，Diff算法常常被应用于处理虚拟DOM的更新。虚拟DOM通过JS对象模拟真实DOM的结构和属性，利用Diff算法计算出新旧虚拟DOM之间的差异，从而减少实际DOM的操作次数，提高页面性能。Diff算法主要包括两个过程：生成虚拟DOM树和比较虚拟DOM树。

在生成虚拟DOM树时，首先将HTML代码解析为DOM树，然后再将DOM树转换为JS对象表示的虚拟DOM树。在比较虚拟DOM树时，将新旧虚拟DOM树之间的差异计算出来，并进行相应的修改操作，最终将新的虚拟DOM树渲染到页面上。

总之，Diff算法是前端开发中一个非常重要的算法，它可以帮助我们优化应用的性能，提升用户体验。

:::

### Vue组件为什么只能有一个根元素？

::: details ChatGDP：
Vue组件为什么只能有一个根元素？

Vue组件只能有一个根元素是因为Vue在渲染组件时，会将组件模板转换为一个虚拟DOM树，而虚拟DOM树必须是唯一的，因此一个组件模板只能有一个根元素。

根据[2](https://juejin.cn/post/7182825490279825467)所述，“根元素”是Vue应用实例挂载的起点，也就是组件模板最外层的元素。Vue应用实例在挂载时只能有一个起点，所以组件模板只能有一个根元素。

举个例子，如果一个组件模板中同时有div和p两个根元素，那么在渲染这个组件时，Vue应该挂载哪个元素？这就会导致渲染错误或不符合预期的结果。因此，为了保证组件能够正常渲染，Vue要求组件只能有一个根元素。

参考来源：
[1](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)[2](https://juejin.cn/post/7182825490279825467)
:::



### 域名解析过程是怎样的

::: details ChatGDP:
域名解析是将域名转换为IP地址的过程，使人们更容易地访问使用域名的网站或服务。域名解析通常是由DNS（Domain Name System，域名系统）服务器完成的，其大致过程如下：

1.首先，在客户端发起访问请求时，会先在本地缓存中查找DNS记录，如果找到匹配的记录，则直接返回对应的IP地址。

2.如果在本地缓存中没有找到DNS记录，则向本地ISP（Internet Service Provider，互联网服务提供商）的DNS服务器发送请求，该DNS服务器通常由ISP提供，并保存着一些常用的DNS记录。此时，客户端向DNS服务器发送一个DNS查询请求，其中包括要访问的域名信息。

3.如果本地ISP的DNS服务器没有找到与该域名匹配的DNS记录，则会向根DNS服务器发送请求，请求获取该域名所对应的顶级域（比如.com、.org等）的DNS服务器的IP地址。这个过程需要递归进行，从根DNS服务器开始，依次向下查找，直到找到对应的DNS服务器为止。

4.接下来，本地ISP的DNS服务器向对应的顶级域的DNS服务器发送请求，获取该域名所在的域的DNS服务器的IP地址。

5.之后，本地ISP的DNS服务器向该域的DNS服务器发送请求，获取该域名对应的IP地址。

6.最后，本地ISP的DNS服务器将获取到的IP地址返回给客户端，客户端通过该IP地址连接到相应的网站或服务。

需要注意的是，域名解析过程中，每一个DNS服务器都可能拥有一份缓存的DNS记录，如果在其中找到了匹配的记录，则会直接返回结果，而不需要向更高级别的DNS服务器发送请求。此外，由于DNS服务器的数量很多，所以DNS解析过程中需要经过多次网络交互，因此可以采用CDN（Content Delivery Network，内容分发网络）等技术来优化访问速度。
:::



堆、栈:
栈：自动分配内存空间，系统自动释放,一级缓存，被调用时处于存储空间，调用完释放 堆：动态内存分配，大小不定不会自动释放，存放二级缓存，生命周期由垃圾回收算法决定。


### 手写一个 Promise 方法

Promise是一种异步编程的解决方案，用于处理异步任务的状态（进行中、成功、失败）。下面是一个手写的简化版Promise方法的示例：

::: details ChatGDP:

```js
// 封装一个Promise构造函数
function MyPromise(fn) {
  var self = this;
  self.value = null; // 保存异步操作成功的结果值
  self.error = null; // 保存异步操作失败的错误信息
  self.status = 'pending'; // 初始化Promise的状态为等待中
  self.onSuccessCallbacks = []; // 保存then方法中传入的成功回调函数
  self.onErrorCallbacks = []; // 保存then方法中传入的失败回调函数

  function resolve(value) { // 成功时的回调函数
    self.value = value; // 保存异步操作的结果值
    self.status = 'fulfilled'; // 将Promise的状态改为成功
    self.onSuccessCallbacks.forEach(function(callback) { // 执行所有成功回调函数
      callback(self.value);
    });
  }

  function reject(error) { // 失败时的回调函数
    self.error = error; // 保存异步操作的错误信息
    self.status = 'rejected'; // 将Promise的状态改为失败
    self.onErrorCallbacks.forEach(function(callback) { // 执行所有失败回调函数
      callback(self.error);
    });
  }

  fn(resolve, reject); // 调用传入的回调函数并传入resolve和reject函数
}

// Promise原型上的方法then，用于添加回调函数
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  var self = this;
  if (self.status === 'pending') { // 如果Promise的状态仍然未处理完成
    self.onSuccessCallbacks.push(function() { // 将成功回调函数保存起来
      onFulfilled(self.value);
    });
    self.onErrorCallbacks.push(function() { // 将失败回调函数保存起来
      onRejected(self.error);
    });
  }
  if (self.status === 'fulfilled') { // 如果Promise的状态已经是成功，则直接执行成功回调函数
    onFulfilled(self.value);
  }
  if (self.status === 'rejected') { // 如果Promise的状态已经是失败，则直接执行失败回调函数
    onRejected(self.error);
  }
}

// 测试代码，使用Promise封装一个异步操作
var promise = new MyPromise(function(resolve, reject) {
  setTimeout(function() {
    if (Math.random() >= 0.5) {
      resolve('success');
    } else {
      reject('failed');
    }
  }, 1000);
});

// 添加成功/失败回调函数并输出结果
promise.then(function(value) {
  console.log('异步操作成功：', value);
}, function(error) {
  console.log('异步操作失败：', error);
});
```
:::

上面的示例只是一个简化版的Promise方法，真正的Promise规范还包括更多的细节和规则，如：Promise.all、Promise.race等方法的使用、异步任务的嵌套等等。需要注意的是，在实际开发中建议使用原生的Promise对象，因为原生的Promise对象具有更好的兼容性和稳定性。



### 项目中的跨域如何处理的？

::: details ChatGDP:
在Web开发中，跨域是指当一个网页的文档、脚本或样式表等资源来自于不同的域名、协议或端口时，就产生了跨域问题。这是由于浏览器的安全机制所导致的，其目的是为了防止恶意攻击者通过跨域请求来窃取用户的信息或执行恶意代码。

常见的处理跨域的方法包括：

JSONP：利用script标签可以加载外部资源的特性，通过动态创建script标签并设置src属性来解决跨域问题。但是JSONP只支持GET请求，并且需要服务端配合相应的回调函数。

CORS：CORS（Cross-Origin Resource Sharing，跨域资源共享）是一种服务器端的解决方案，通过在服务器端设置Access-Control-Allow-Origin头信息来告诉浏览器允许跨域请求。具体来说，客户端向服务端发送请求时，会先发送一个OPTIONS请求，在该请求中携带跨域请求的相关信息和预检请求头信息。服务端接收到该请求后，通过Access-Control-Allow-*相关头信息做出响应，告知客户端是否允许跨域请求。

代理服务：通过配置代理服务器来实现跨域请求。具体来说，客户端向同源的代理服务器发送请求，然后代理服务器向目标服务器发送请求，最后将目标服务器的响应返回给客户端。这种方法需要消耗更多的服务器资源，并且需要服务器有一定的编程能力。

总之，跨域是Web开发中常见的问题，需要通过适当的手段来解决。不同的方法具有不同的优点和限制，开发者可以根据实际情况选择合适的处理方式。
:::

### HTTP协议 的理解

::: details ChatGDP:
HTTP（HyperText Transfer Protocol，超文本传输协议）是用于Web服务的应用层协议，它是互联网上使用最广泛的一个标准协议之一。HTTP协议通常被用于浏览器和Web服务器之间的通信，其主要目的是在客户端与服务端之间传递HTML页面、图片、音频、视频等资源。

HTTP协议的基本工作原理如下：

1.客户端（例如Web浏览器）发送HTTP请求到Web服务器。

2.Web服务器收到请求后，会根据请求的内容进行处理，并返回HTTP响应。

3.客户端接收到HTTP响应后，根据响应里的内容进行渲染或执行其他操作。

HTTP请求由以下几部分组成：

1.请求方法：GET、POST、PUT、DELETE等。

2.请求头部：包括Accept、Accept-Encoding、User-Agent等信息。

3.请求体：对于POST请求，请求体中可以携带参数，用来传递数据。

HTTP响应由以下几部分组成：

1.状态码：用来标识请求的处理结果，如200表示成功，404表示找不到请求的资源，500表示服务器内部错误。

2.响应头部：包括Content-Type、Content-Length等信息。

3.响应体：返回给客户端的内容，可以是HTML、图片、音频、视频等资源。

总之，HTTP协议是Web开发中必不可少的一部分，它负责处理客户端和服务器之间的通信，并且提供了请求和响应的各种标准格式。了解HTTP协议的原理和特性对于Web开发者来说是非常重要的。
:::

### BFC

::: details ChatGDP:

BFC（Block Formatting Context，块级格式化上下文）是Web页面中的一个CSS渲染规则，并且是一种独立的渲染区域，具有自己的渲染规则和特性。

BFC可以理解为一个封闭的盒子，它内部的元素按照一定的规则进行布局和渲染，而与外部的元素互不干扰。具体来说，以下几种情况可以触发BFC：

1.根元素或包含根元素的父元素

2.浮动元素（float不为none）

3.绝对定位元素（position为absolute或fixed）

4.display属性值为inline-block、table-cell、table-caption、flex、inline-flex

5.overflow不为visible的块级盒子

BFC具有以下特性：

1.BFC内部的所有元素会在垂直方向上一个接一个地放置，两个相邻块级盒子之间的距离由margin决定，两个相邻的行框之间也同样受到margin影响。

2.在BFC中，每个元素的左外边缘都紧贴着包含块的左边缘，即使存在浮动元素也是如此。

3.BFC内部的浮动元素不会超出其容器，而是在容器边缘处停留。

4.在BFC中，每个盒子的左边缘最多接触着包含块的左边缘或者其它BFC的右边缘，即在一个BFC中不会发生margin重叠的现象。

5.BFC具有隔离性，BFC内部的元素只能通过清除浮动、设置满足条件的display属性、使用绝对定位三种方法改变其自身布局表现，而不会影响到外部元素。

总之，BFC是一种CSS渲染规则，它可以用来解决一些常见的布局问题，并且具有一些特殊的属性和效果。了解BFC的特性对于Web页面的布局和渲染都是非常有帮助的.

:::


<style>
    ruby > span{
        margin: 0 3px;
        font-size: 18px;
    }
</style>