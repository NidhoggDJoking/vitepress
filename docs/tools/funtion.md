```
 const getLocationParams = (keyWords) => {
        // 提取路由值（字符串）
        let href = window.location.href;
        // 从占位符开始截取路由（不包括占位符）
        let query = href.substring(href.indexOf("?") + 1);
        // 根据 & 切割字符串
        let vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
          let pair = vars[i].split("=");
          // 根据指定的参数名去筛选参数值
          if (pair[0] == keyWords) {
            return pair[1];
          }
        }
        return "没有该参数信息";
      };
      console.log(window.location);
      let name = getLocationParams("name");
      let number = getLocationParams("number");
      console.log("从路由中提取到的name——>", name);
      console.log("从路由中提取到的password——>", number);
```
