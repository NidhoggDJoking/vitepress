## Dom Class

```js
export const hasClass = function(obj, cls) {
  // class 前后有空格
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};

export const addClass = function(obj, cls) {
  if (!hasClass(obj, cls)) obj.className += ' ' + cls;
};

export const removeClass = function(obj, cls) {
  if (hasClass(obj, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    obj.className = obj.className.replace(reg, ' ');
  }
};

export const toggleClass = function(obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls);
  } else {
    addClass(obj, cls);
  }
};
```



```js
// 使用方法 import resize from "@/mixins/resizePlus";

// 用法1：指定监听区域
// <div ref="e_name">
// mixins: [resize('e_name')],

// 用法2：监听根节点
// <div  ref="c_name">
// name: 'c_name',
// mixins: [resize],

export default function (ref) {
  return {
    data() {
      return {
        dialogHeight: 500,
      }
    },
    mounted() {
      const _ref = ref || this.$options.name
      console.log('resize==>',this.$refs[_ref]);
      if (!this.$refs[_ref]) return
      // 创建ResizeObserver实例，传入回调函数
      // ResizeObserver是一个浏览器API，用于监听DOM元素的大小变化
      const resizeObserver = new ResizeObserver((entries) => {
        // 当DOM元素的宽高发生变化时执行回调函数
        this.dialogHeight = entries[0].contentRect.height
      });
      resizeObserver.observe(this.$refs[_ref]);
      // 组件销毁时停止观察
      this.$once("hook:beforeDestroy", () => {
        resizeObserver.disconnect();
      });
    },
  }
}

```