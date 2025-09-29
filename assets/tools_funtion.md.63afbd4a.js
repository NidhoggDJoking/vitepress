import{_ as s,o as n,c as a,a as l}from"./app.803988e9.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"tools/funtion.md","lastUpdated":1727683190000}'),e={name:"tools/funtion.md"},p=l(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> const getLocationParams = (keyWords) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 提取路由值（字符串）</span></span>
<span class="line"><span style="color:#A6ACCD;">        let href = window.location.href;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 从占位符开始截取路由（不包括占位符）</span></span>
<span class="line"><span style="color:#A6ACCD;">        let query = href.substring(href.indexOf(&quot;?&quot;) + 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 根据 &amp; 切割字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">        let vars = query.split(&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; vars.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let pair = vars[i].split(&quot;=&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 根据指定的参数名去筛选参数值</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (pair[0] == keyWords) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return pair[1];</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &quot;没有该参数信息&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(window.location);</span></span>
<span class="line"><span style="color:#A6ACCD;">      let name = getLocationParams(&quot;name&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      let number = getLocationParams(&quot;number&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;从路由中提取到的name——&gt;&quot;, name);</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;从路由中提取到的password——&gt;&quot;, number);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,1),o=[p];function r(t,c,i,u,b,C){return n(),a("div",null,o)}const d=s(e,[["render",r]]);export{m as __pageData,d as default};
