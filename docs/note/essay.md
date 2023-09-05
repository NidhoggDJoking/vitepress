---
outline: 'deep'
---

# 八股文<Badge type="tip" text="ChatGDP" />

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

另外，由于JWT使用JSON格式存储数据，因此可以进行轻松的解析和处理。与传统的`Session`相比，JWT具有更好的可伸缩性和跨域应用支持。它还可以用于单点登录（SSO），以及为移动应用程序和API提供安全身份验证和授权。

以上内容参考自[1](https://jwt.io/)和[2](https://en.wikipedia.org/wiki/JSON_Web_Token)。
:::

### Diff算法

::: details ChatGDP：

Diff算法是一种用于计算两个文本之间差异的算法。在前端领域中，Diff算法被广泛应用于处理虚拟DOM的更新，以避免频繁操作真实DOM带来的性能问题。

Diff算法的本质是比较两个文本之间的差异，通俗来说，就是找出它们之间最小的编辑距离。它有三个基本操作：插入、删除和替换。通过比较源文本和目标文本之间的这三种基本操作，我们就可以确定它们之间的差异，并进行相应的处理。

在前端开发中，Diff算法常常被应用于处理虚拟DOM的更新。虚拟DOM通过JS对象模拟真实DOM的结构和属性，利用Diff算法计算出新旧虚拟DOM之间的差异，从而减少实际DOM的操作次数，提高页面性能。Diff算法主要包括两个过程：生成虚拟DOM树和比较虚拟DOM树。

在生成虚拟DOM树时，首先将HTML代码解析为DOM树，然后再将DOM树转换为JS对象表示的虚拟DOM树。在比较虚拟DOM树时，将新旧虚拟DOM树之间的差异计算出来，并进行相应的修改操作，最终将新的虚拟DOM树渲染到页面上。

总之，Diff算法是前端开发中一个非常重要的算法，它可以帮助我们优化应用的性能，提升用户体验。

:::

### Vue2组件为什么只能有一个根元素？

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

上面的示例只是一个简化版的`Promise`方法，真正的`Promise`规范还包括更多的细节和规则，如：`Promise.all`、`Promise.race`等方法的使用、异步任务的嵌套等等。需要注意的是，在实际开发中建议使用原生的`Promise`对象，因为原生的`Promise`对象具有更好的兼容性和稳定性。



### 项目中的跨域如何处理的？

::: details ChatGDP:
在Web开发中，跨域是指当一个网页的文档、脚本或样式表等资源来自于不同的域名、协议或端口时，就产生了跨域问题。这是由于浏览器的安全机制所导致的，其目的是为了防止恶意攻击者通过跨域请求来窃取用户的信息或执行恶意代码。

常见的处理跨域的方法包括：

JSONP：利用script标签可以加载外部资源的特性，通过动态创建script标签并设置src属性来解决跨域问题。但是`JSONP`只支持`GET`请求，并且需要服务端配合相应的回调函数。

CORS：CORS（Cross-Origin Resource Sharing，跨域资源共享）是一种服务器端的解决方案，通过在服务器端设置`Access-Control-Allow-Origin`头信息来告诉浏览器允许跨域请求。具体来说，客户端向服务端发送请求时，会先发送一个OPTIONS请求，在该请求中携带跨域请求的相关信息和预检请求头信息。服务端接收到该请求后，通过Access-Control-Allow-*相关头信息做出响应，告知客户端是否允许跨域请求。

代理服务：通过配置代理服务器来实现跨域请求。具体来说，客户端向同源的代理服务器发送请求，然后代理服务器向目标服务器发送请求，最后将目标服务器的响应返回给客户端。这种方法需要消耗更多的服务器资源，并且需要服务器有一定的编程能力。

总之，跨域是Web开发中常见的问题，需要通过适当的手段来解决。不同的方法具有不同的优点和限制，开发者可以根据实际情况选择合适的处理方式。
:::

### HTTP协议 的理解

::: details ChatGDP:
HTTP（HyperText Transfer Protocol，超文本传输协议）是用于Web服务的应用层协议，它是互联网上使用最广泛的一个标准协议之一。HTTP协议通常被用于浏览器和Web服务器之间的通信，其主要目的是在客户端与服务端之间传递HTML页面、图片、音频、视频等资源。

HTTP协议的基本工作原理如下：

1.客户端（例如Web浏览器）发送HTTP请求到Web服务器。

2.Web服务器收到请求后，会根据请求的内容进行处理，并返回HTTP响应。

3.客户端接收到`HTTP`响应后，根据响应里的内容进行渲染或执行其他操作。

HTTP请求由以下几部分组成：

1.请求方法：`GET`、`POST`、`PUT`、`DELETE`等。

2.请求头部：包括`Accept`、`Accept-Encoding`、`User-Agent`等信息。

3.请求体：对于`POST`请求，请求体中可以携带参数，用来传递数据。

HTTP响应由以下几部分组成：

1.状态码：用来标识请求的处理结果，如200表示成功，404表示找不到请求的资源，500表示服务器内部错误。

2.响应头部：包括`Content-Type`、`Content-Length`等信息。

3.响应体：返回给客户端的内容，可以是HTML、图片、音频、视频等资源。

总之，HTTP协议是Web开发中必不可少的一部分，它负责处理客户端和服务器之间的通信，并且提供了请求和响应的各种标准格式。了解HTTP协议的原理和特性对于Web开发者来说是非常重要的。
:::

### BFC

::: details ChatGDP:

BFC（Block Formatting Context，块级格式化上下文）是Web页面中的一个CSS渲染规则，并且是一种独立的渲染区域，具有自己的渲染规则和特性。

BFC可以理解为一个封闭的盒子，它内部的元素按照一定的规则进行布局和渲染，而与外部的元素互不干扰。具体来说，以下几种情况可以触发BFC：

1.根元素或包含根元素的父元素

2.浮动元素（float不为none）

3.绝对定位元素（`position`为`absolute`或`fixed`）

4.display属性值为`inline-block`、`table-cell`、`table-caption`、`flex`、`inline-flex`

5.`overflow`不为`visible`的块级盒子

BFC具有以下特性：

1.BFC内部的所有元素会在垂直方向上一个接一个地放置，两个相邻块级盒子之间的距离由`margin`决定，两个相邻的行框之间也同样受到`margin`影响。

2.在BFC中，每个元素的左外边缘都紧贴着包含块的左边缘，即使存在浮动元素也是如此。

3.BFC内部的浮动元素不会超出其容器，而是在容器边缘处停留。

4.在BFC中，每个盒子的左边缘最多接触着包含块的左边缘或者其它BFC的右边缘，即在一个BFC中不会发生`margin`重叠的现象。

5.BFC具有隔离性，BFC内部的元素只能通过清除浮动、设置满足条件的display属性、使用绝对定位三种方法改变其自身布局表现，而不会影响到外部元素。

总之，BFC是一种CSS渲染规则，它可以用来解决一些常见的布局问题，并且具有一些特殊的属性和效果。了解BFC的特性对于Web页面的布局和渲染都是非常有帮助的.

:::


### `js` 内存泄漏

::: details ChatGDP:
内存泄漏是指在应用程序中，被分配的内存没有被合理地释放，导致内存空间不断累积，并最终导致程序崩溃或者系统出现异常的一种情况。在 JavaScript 中也存在内存泄漏问题，主要有以下几种情况：

1.全局变量未被释放：全局变量在页面的生命周期当中始终存在，如果定义了一个全局变量并且没有及时销毁，会导致该内存一直被占用，因此需要尽可能避免定义过多的全局变量。

2.闭包未被释放：闭包是指一个函数引用了外部的变量，在函数执行完成之后依然可以保持这些变量的状态。如果闭包中引用的变量占用了大量内存但是在执行完之后没有自动被回收，就会导致内存泄漏。

3.循环引用：循环引用指两个或多个对象之间相互引用，使得它们在内存中形成一个循环链表，导致垃圾回收器无法找到它们的引用计数为 0，因此这些对象将永远不会被回收，从而出现内存泄漏问题。

4.定时器和事件监听器未被清除：定时器和事件监听器在页面生命周期内可能会被多次调用，如果这些定时器和事件监听器在不再需要的时候没有被清除，将会一直占用内存，导致出现内存泄漏。

为避免 JavaScript 中的内存泄漏，在编写代码时需要注意不要定义过多的全局变量，尽可能使用 `let` 和 `const` 关键字定义变量的作用域；在使用闭包时需要注意及时清除无用的变量；在不需要使用定时器和事件监听器时，及时进行清除，避免对内存造成不必要的负担。
:::


### `new`运算符的实现机制

:::details ChatGDP:
在 JavaScript 中，`new` 是用来创建一个新对象并调用构造函数的运算符。它的实现机制如下：

首先，创建一个空对象 `obj`。

将这个空对象的原型指向构造函数的原型对象，即 `obj.__proto__ = Con.prototype`。

调用构造函数，并将构造函数内部的 this 指向这个空对象。这样，构造函数的内部逻辑就可以对这个空对象进行属性的赋值操作。

如果构造函数有返回值并且是一个对象，那么返回该对象；否则返回这个新创建的空对象。

下面是一个简单的 `new` 运算符的实现代码：

```js
function myNew(Con, ...args) {
  const obj = Object.create(Con.prototype); // 创建一个空对象并继承构造函数原型上的方法和属性

  const result = Con.apply(obj, args); // 调用构造函数，并将 this 指向空对象

  return typeof result === 'object' ? result : obj; // 如果构造函数返回了对象，则返回该对象；否则返回这个新创建的空对象
}
```
需要注意的是，在使用 `new` 运算符时，构造函数如果不加括号，则其等价于一个变量，而非一个可调用对象，因此需要注意区分。
:::


### 浏览器的缓存机制 强制缓存 && 协商缓存

::: details ChatGDP：
浏览器的缓存机制主要分为强制缓存和协商缓存。

强制缓存是指，浏览器在第一次请求资源时，将资源缓存在本地，并设置一个过期时间，当再次请求该资源时，如果该资源的缓存未过期，则直接从缓存中读取资源，而不会向服务器重新发起请求。这个过程中不会向服务端发送请求，也就是说没有与服务端进行交互。常见的设置方式有`Cache-Control`和`Expires`两种方式。[1](https://juejin.cn/post/6844903593275817998)[3](https://zhuanlan.zhihu.com/p/111190645)

协商缓存是指，当强制缓存失效时，浏览器会向服务器发起请求，询问服务器该资源是否更新，服务器根据请求头中的缓存标识来判断是否需要返回新的资源，若需要返回新的资源则返回资源内容和新的缓存标识，否则返回304状态码，告诉浏览器可以直接使用本地缓存。常见的设置方式有`Last-Modified`和`Etag`两种方式。[2](https://zhuanlan.zhihu.com/p/143064070)[3](https://zhuanlan.zhihu.com/p/111190645)
:::


### HTML5 语义化

<collapse title='ChatGDP'>

HTML5语义化是指通过HTML标签来表示页面内容的含义、结构和信息，让页面代码更具有可读性、可维护性和可访问性。在HTML5中，新增了很多语义化标签，如`<header>`、`<nav>`、`<footer>`、`<main>`、`<article>`、`<section>`、`<aside>`、等，可以用来表示页面中的头部、导航和底部等结构，而不仅是用`<div>`这样的通用容器标签进行布局。这样做有助于开发者更好地理解和维护自己的代码，同时也能提高网站的可访问性和SEO优化效果。

HTML5语义化的优点包括：

- 提高代码的可读性和可维护性：因为语义化标签可以直观地表示页面的结构和内容，开发者可以更轻松地阅读和修改代码。
- 改善网站的可访问性：语义化标签可以帮助屏幕阅读器更好地理解页面结构，使得视障人士也可以更便捷地获取信息。
- 提升SEO优化效果：搜索引擎可以更准确地理解页面内容，从而提高网页的排名和曝光度。
- 在没CSS样式的情况下，页面整体也会呈现很好的结构效果

[1](https://en.wikipedia.org/wiki/HTML5)[2](https://www.w3schools.com/html/html5_semantic_elements.asp)

</collapse>


### HTTP缓存机制

:::details ChatGDP:

HTTP缓存是为了提供更好的性能和用户体验而被引入到HTTP协议中的。浏览器缓存主要通过两个规则来确定何时可以从缓存中获取资源，这两个规则是：

缓存数据的有效期；
客户端与服务器之间的缓存验证机制。
根据这两个规则，浏览器会在缓存中寻找能够满足请求的内容，并做出相应的处理，从而避免了一些不必要的网络请求。

HTTP缓存有以下几种机制：

1.强制缓存：强制缓存通过设置Expires（过期时间）或Cache-Control（缓存控制）头信息来告诉浏览器，在缓存期内直接使用缓存结果，不需向服务器发起请求。
2.协商缓存：当强制缓存失效时，浏览器会携带Last-Modified（上次修改时间）或 ETag（实体标签）等信息向服务器发起请求，服务器根据这些信息决定返回资源或者返回304 Not Modified响应码，告诉浏览器继续使用缓存。
3.Service Worker 缓存：Service Worker 是一种可以让 Web 应用运行在离线状态的技术，它可以将资源缓存到本地，以供下一次访问时使用。
通过正确地配置缓存，可以在一定程度上减轻服务器的压力，降低网络带宽消耗，并提升网站的访问速度和用户体验。

:::


### JavaScript中的闭包

:::details ChatGDP:

JavaScript中，闭包（closure）指的是一个函数可以访问在其定义环境外部的变量。当一个函数能够访问非局部变量时，就形成了一个闭包。具体来说，当内部函数引用外部函数的变量时，就会形成闭包，因为被内部函数引用的外部变量将不会被垃圾回收器回收，而是一直保存在内存中。

闭包在JavaScript中有以下几个特点：

- 闭包可以访问它们词法作用域中定义的变量。
- 闭包可以存储状态信息，并且在之后的调用中保持这些状态。
- 闭包可以模拟私有变量和方法的效果。
- 闭包可以在函数作用域之外访问变量和方法。

使用闭包可以实现很多功能，比如封装私有变量和方法、实现柯里化（currying）、节流和防抖等操作。使用闭包要小心避免内存泄露问题，当不再需要使用闭包时，应该及时解除对闭包的引用，使其被垃圾回收器回收释放内存。

:::


### 前端MVC和MVVM设计模式的概念及其区别

:::details ChatGDP:

前端MVC和MVVM都是常用的前端设计模式，它们都有助于组织和管理前端代码。主要的区别在于：

MVC（Model-View-Controller）：将应用程序分为三个部分，Model表示应用程序的数据，View是应用程序的用户界面，Controller 实现View和Model之间的通讯和流程控制。

MVVM （Model-View-ViewModel）：也将应用程序分为三个部分，Model仍表示应用程序的数据，View也是用户界面，ViewModel 是 View 和 Model 之间的链接层，使用双向数据绑定技术实现视图层和数据层的自动同步更新。

相对于MVC，MVVM强调更加紧密的View和ViewModel的联系。在MVVM中，ViewModel不仅充当MVC中的Controller的角色，同时也负责与View进行交互，因此使得开发者能够更好地实现前端的业务逻辑，提供了更高层次的抽象和视图层的数据状态响应式变化。

:::

### 浏览器的渲染机制

:::details ChatGDP:

浏览器的渲染机制主要分为以下几个步骤：

1. 解析HTML和CSS文件，构建DOM树和CSS规则树。

2. 将DOM树和CSS规则树结合生成渲染树(Render Tree)。

3. 计算渲染树每个节点在屏幕上的大小、位置等属性，确定每个节点的布局(Layout)。

4. 根据渲染树和布局信息，将每个节点绘制(Draw)到屏幕上，呈现出最终的页面。

注意，在这个过程中还会有一些优化措施，比如样式的提前计算、异步加载资源等，可以加速页面渲染的速度。另外，当页面中的元素发生变化时，浏览器还会针对性地重新计算渲染树，只对需要更新的部分进行重绘，而不是整个页面重新渲染。

:::


### js中单引号和双引号的区别

省流:没有区别

由于以前开发过PHP所以记忆产生混乱一直觉得js中单引号和双引号存在性能差别，刻意的使用单引号。

由此以证道心

### php 单引号和双引号的区别

:::details ChatGDP:

在 PHP 中，单引号字符串和双引号字符串之间有以下几个区别：

- 解析变量和转义字符：双引号字符串可以解析变量，可直接输出变量的值，并且可以使用 转义字符（如 \n） 来插入特殊字符；而单引号字符串中不会解析变量，也不会对特殊字符进行转义处理。
- 性能：由于双引号字符串需要额外的步骤来解析变量和转义字符等操作，因此在性能上可能稍微逊色于单引号字符串。在一些需要输出较长字符串时尤为明显。
- 语义清晰：在某些情况下，使用单引号或双引号可以使代码更具有语义清晰性。当以单引号包括字符串时，就可以很容易地看出这是一个没有插入变量或特殊字符的“死”文本。
总的来说，单引号和双引号字符串在 PHP 中用法非常类似，开发人员可以根据具体的应用场景和个人习惯来选择使用。

:::


<style>
    ruby > span{
        margin: 0 3px;
        font-size: 18px;
    }
</style>