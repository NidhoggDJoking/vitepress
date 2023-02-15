# [Notification](https://developer.mozilla.org/zh-CN/docs/Web/API/Notification)


## Notification.permission

`Notification` 的只读属性 `permission` 用来表明用户是否允许当前域显示 Web Notification。

:::tip
备注： 此特性在 [Web Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API) 中可用
:::

permission 的类型为`String` 属性的可能值为：

- `granted` : 用户已经明确的授予了显示通知的权限。.
- `denied` : 用户已经明确的拒绝了显示通知的权限。
- `default` : 用户还未被询问是否授权; 这种情况下权限将视为 `denied`.

## Examples

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

```

## 总结

目前 `Notification` 还有很多实验阶段的API且兼容性差，短时间内不要使用.


[好文推荐](https://www.zhangxinxu.com/wordpress/2016/07/know-html5-web-notification/)