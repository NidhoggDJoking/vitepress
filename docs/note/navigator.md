# Navigator

## `navigator.getBattery()`

> `getBattery()` 方法提供了系统的电量信息，它返回一个 `battery` 的 `promise` 对象，兑现后得到 [BatteryManager](https://developer.mozilla.org/zh-CN/docs/Web/API/BatteryManager) 对象，它提供了一些新的事件和方法以方便你监控电池的状态。这个方法实现了[电源状态 API](https://developer.mozilla.org/zh-CN/docs/Web/API/Battery_Status_API)，参见那篇文档，以获得更多细节、使用方法和实例代码。

```js
navigator.getBattery().then(function (battery) {
  // 获取设备电量剩余百分比
  var level = battery.level //最大值为1,对应电量100%
  console.log('Level: ' + level * 100 + '%')

  // 获取设备充电状态
  var charging = battery.charging
  console.log('充电状态: ' + charging)

  // 获取设备完全充电需要的时间
  var chargingTime = battery.chargingTime
  console.log('完全充电需要的时间: ' + chargingTime)

  // 获取设备完全放电需要的时间
  var dischargingTime = battery.dischargingTime
  console.log('完全放电需要的时间: ' + dischargingTime)
})
```

::: danger 兼容问题
目前（2022）不兼容（Safari）!
:::



## `navigator.connection`

[`Navigator.connection`](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/connection) 只读属性返回一个包含有关系统网络连接信息的 `NetworkInformation` 对象



::: danger 兼容不行（Safari）
数据网络带宽无参考价值，暂无（2022年）实际用途
:::