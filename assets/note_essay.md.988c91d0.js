import{_ as e,o as a,c as s,a as n}from"./app.2645ed4f.js";const f=JSON.parse('{"title":"八股文","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":3,"title":"null 和 undefined","slug":"null-和-undefined","link":"#null-和-undefined","children":[]},{"level":3,"title":"Label标签的作用","slug":"label标签的作用","link":"#label标签的作用","children":[]},{"level":3,"title":"jwt","slug":"jwt","link":"#jwt","children":[]},{"level":3,"title":"diff算法","slug":"diff算法","link":"#diff算法","children":[]},{"level":3,"title":"Vue组件为什么只能有一个根元素？","slug":"vue组件为什么只能有一个根元素","link":"#vue组件为什么只能有一个根元素","children":[]},{"level":3,"title":"域名解析过程是怎样的","slug":"域名解析过程是怎样的","link":"#域名解析过程是怎样的","children":[]}],"relativePath":"note/essay.md","lastUpdated":1680765431000}'),l={name:"note/essay.md"},r=n(`<h1 id="八股文" tabindex="-1">八股文 <a class="header-anchor" href="#八股文" aria-hidden="true">#</a></h1><hr><details class="details custom-block"><summary>有空写点</summary><ruby><span>想</span><rp>(</rp><rt> jiu </rt><rp>)</rp></ruby><ruby><span>到</span><rp>(</rp><rt> shi </rt><rp>)</rp></ruby><ruby><span>啥</span><rp>(</rp><rt> bu </rt><rp>)</rp></ruby><ruby><span>写</span><rp>(</rp><rt> xiang </rt><rp>)</rp></ruby><ruby><span>啥</span><rp>(</rp><rt> xie </rt><rp>)</rp></ruby></details><h3 id="null-和-undefined" tabindex="-1"><code>null</code> 和 <code>undefined</code> <a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a></h3><p>首先 <code>null</code> 和 <code>undefined</code> 都表示空，但是存在差异</p><p><code>null</code>的含义是空对象，一般用于赋值给那些可能会返回对象的变量作为初始化。</p><p><code>undefined</code> 代表的含义是未定义，一般变量声明了，但是没有赋值的时候会返回<code>undefined</code>。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">undefined</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h3 id="label标签的作用" tabindex="-1"><code>Label</code>标签的作用 <a class="header-anchor" href="#label标签的作用" aria-hidden="true">#</a></h3><p><code>label</code> 标签是用来定义表单控件的关系，当用户选择<code>label</code>标签时，浏览器会自动将聚焦点转到和la标签相关的表单控件上，</p><p>关联方式：</p><ol><li>可以通过<code>label</code>标签的<code>for</code>属性来指定表单的控件<code>id</code></li><li>把表单控件作为<code>label</code>标签的子元素</li></ol><h3 id="jwt" tabindex="-1">jwt <a class="header-anchor" href="#jwt" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>ChatGDP：</summary><p>JSON Web Token (JWT) 是一种轻量级的、基于JSON的身份验证和授权机制，被广泛应用于Web应用程序和服务之间的安全传输。当用户成功登录并获得令牌后，令牌将被发送到应用程序，并包含有关用户身份的信息。在后续的请求中，该令牌将作为身份验证凭证，发送到应用程序，以确保用户已经被认证并且具有所需的访问权限。</p><p>JWT的一个重要特点是它是在本地生成的，而不需要发送到服务器进行验证。它由三个部分组成：头部、负载和签名。头部通常包含算法、类型等元信息；负载包含有关用户或其他实体的声明，例如用户名、角色等；签名则是对于头部和负载的加密结果，以确保数据的完整性和安全性。</p><p>JWT可以使用HMAC算法，或采用公钥/私钥对进行签名，以提供更高的安全性和可靠性。</p><p>另外，由于JWT使用JSON格式存储数据，因此可以进行轻松的解析和处理。与传统的Session相比，JWT具有更好的可伸缩性和跨域应用支持。它还可以用于单点登录（SSO），以及为移动应用程序和API提供安全身份验证和授权。</p><p>以上内容参考自<a href="https://jwt.io/" target="_blank" rel="noreferrer">1</a>和<a href="https://en.wikipedia.org/wiki/JSON_Web_Token" target="_blank" rel="noreferrer">2</a>。</p></details><h3 id="diff算法" tabindex="-1">diff算法 <a class="header-anchor" href="#diff算法" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>ChatGDP：</summary><p>Diff算法是一种用于计算两个文本之间差异的算法。在前端领域中，Diff算法被广泛应用于处理虚拟DOM的更新，以避免频繁操作真实DOM带来的性能问题。</p><p>Diff算法的本质是比较两个文本之间的差异，通俗来说，就是找出它们之间最小的编辑距离。它有三个基本操作：插入、删除和替换。通过比较源文本和目标文本之间的这三种基本操作，我们就可以确定它们之间的差异，并进行相应的处理。</p><p>在前端开发中，Diff算法常常被应用于处理虚拟DOM的更新。虚拟DOM通过JS对象模拟真实DOM的结构和属性，利用Diff算法计算出新旧虚拟DOM之间的差异，从而减少实际DOM的操作次数，提高页面性能。Diff算法主要包括两个过程：生成虚拟DOM树和比较虚拟DOM树。</p><p>在生成虚拟DOM树时，首先将HTML代码解析为DOM树，然后再将DOM树转换为JS对象表示的虚拟DOM树。在比较虚拟DOM树时，将新旧虚拟DOM树之间的差异计算出来，并进行相应的修改操作，最终将新的虚拟DOM树渲染到页面上。</p><p>总之，Diff算法是前端开发中一个非常重要的算法，它可以帮助我们优化应用的性能，提升用户体验。</p></details><h3 id="vue组件为什么只能有一个根元素" tabindex="-1">Vue组件为什么只能有一个根元素？ <a class="header-anchor" href="#vue组件为什么只能有一个根元素" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>ChatGDP：</summary><p>Vue组件为什么只能有一个根元素？</p><p>Vue组件只能有一个根元素是因为Vue在渲染组件时，会将组件模板转换为一个虚拟DOM树，而虚拟DOM树必须是唯一的，因此一个组件模板只能有一个根元素。</p><p>根据<a href="https://juejin.cn/post/7182825490279825467" target="_blank" rel="noreferrer">2</a>所述，“根元素”是Vue应用实例挂载的起点，也就是组件模板最外层的元素。Vue应用实例在挂载时只能有一个起点，所以组件模板只能有一个根元素。</p><p>举个例子，如果一个组件模板中同时有div和p两个根元素，那么在渲染这个组件时，Vue应该挂载哪个元素？这就会导致渲染错误或不符合预期的结果。因此，为了保证组件能够正常渲染，Vue要求组件只能有一个根元素。</p><p>参考来源： <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root" target="_blank" rel="noreferrer">1</a><a href="https://juejin.cn/post/7182825490279825467" target="_blank" rel="noreferrer">2</a></p></details><h3 id="域名解析过程是怎样的" tabindex="-1">域名解析过程是怎样的 <a class="header-anchor" href="#域名解析过程是怎样的" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>ChatGDP:</summary><p>域名解析是将域名转换为IP地址的过程，使人们更容易地访问使用域名的网站或服务。域名解析通常是由DNS（Domain Name System，域名系统）服务器完成的，其大致过程如下：</p><p>1.首先，在客户端发起访问请求时，会先在本地缓存中查找DNS记录，如果找到匹配的记录，则直接返回对应的IP地址。</p><p>2.如果在本地缓存中没有找到DNS记录，则向本地ISP（Internet Service Provider，互联网服务提供商）的DNS服务器发送请求，该DNS服务器通常由ISP提供，并保存着一些常用的DNS记录。此时，客户端向DNS服务器发送一个DNS查询请求，其中包括要访问的域名信息。</p><p>3.如果本地ISP的DNS服务器没有找到与该域名匹配的DNS记录，则会向根DNS服务器发送请求，请求获取该域名所对应的顶级域（<a href="http://xn--bvs393b.com" target="_blank" rel="noreferrer">比如.com</a>、.org等）的DNS服务器的IP地址。这个过程需要递归进行，从根DNS服务器开始，依次向下查找，直到找到对应的DNS服务器为止。</p><p>4.接下来，本地ISP的DNS服务器向对应的顶级域的DNS服务器发送请求，获取该域名所在的域的DNS服务器的IP地址。</p><p>5.之后，本地ISP的DNS服务器向该域的DNS服务器发送请求，获取该域名对应的IP地址。</p><p>6.最后，本地ISP的DNS服务器将获取到的IP地址返回给客户端，客户端通过该IP地址连接到相应的网站或服务。</p><p>需要注意的是，域名解析过程中，每一个DNS服务器都可能拥有一份缓存的DNS记录，如果在其中找到了匹配的记录，则会直接返回结果，而不需要向更高级别的DNS服务器发送请求。此外，由于DNS服务器的数量很多，所以DNS解析过程中需要经过多次网络交互，因此可以采用CDN（Content Delivery Network，内容分发网络）等技术来优化访问速度。</p></details>`,21),p=[r];function t(i,d,o,c,u,D){return a(),s("div",null,p)}const b=e(l,[["render",t]]);export{f as __pageData,b as default};
