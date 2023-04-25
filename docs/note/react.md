---
outline: 'deep'
---
# React

### React Hooks

React Hooks 是React 16.8 版本中引入的新特性，它可以让你在 React 函数组件中使用状态(state) 和其他功能，使得代码更加简洁，可读性更好。以下是一些使用 React Hooks 的常见钩子 (Hooks)：

#### 1. `useState` ：用来在函数组件中添加 `state` 状态，类似于类组件中的 `this.state`。

::: details 
```js
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量，初始值为 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```
:::

#### 2. `useEffect`: 在函数组件中执行一些副作用操作，例如数据获取、DOM 操作等。

::: details 
useEffect是React Hook之一，用于在函数组件中执行副作用操作，例如请求数据、修改DOM元素等。它在每次渲染完成后自动执行，可以控制何时重新执行以及是否清除副作用。

useEffect的语法为：`useEffect(effect [, dependencies])`。其中，effect是执行的副作用函数，可以返回一个清理函数来清除副作用；`dependencies`是依赖项数组，包含副作用函数中的所有变量和`props`，只有当其中任意一个发生变化时，才会重新执行副作用函数。

`useEffect`的第二个参数可以省略，在这种情况下，useEffect会在每次更新后都执行副作用函数。

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    // 更新文档标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```
:::

#### 3. `useContext`：在函数组件中使用 `context`。

::: details 
```js
import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}

```
:::

#### 4. `useReducer`：让在函数组件中处理复杂 state 更加容易。

::: details 
`useReducer` 是 `React Hooks` 中的一个，用于在函数组件中处理复杂状态更加容易。它可以帮助我们将组件的状态和更新逻辑单独抽离出来，并且可以处理一些非常复杂的状态管理，比如异步操作。

使用 `useReducer` 需要传入两个参数，一个是 `reducer` 函数，另一个是初始状态值。`reducer` 函数接收当前状态和一个 `action` 对象作为参数，然后返回一个新的状态。我们可以在组件中调用 `dispatch` 函数来触发对应的操作，从而改变状态。

下面是一个简单的例子:

```js
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </>
  );
}

```

在上面的例子中，我们定义了一个计数器的 `reducer` 函数，用来处理 `increment` 和 `decrement` 操作。然后我们通过 `useReducer` 在组件中初始化一个状态，并获取到对应的状态和 `dispatch` 函数，以便触发状态的改变。

使用 `useReducer` 可以让我们更加清晰地管理状态和操作，优化组件结构，并且避免了一些常见的错误。
:::



### React Router DOM

React Router DOM（原名为React Router v6）是一个用于构建单页应用（SPA）的路由库。以下是React Router DOM的一些常见用法：

####  1. 导航到不同的页面：

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
  
function App() {  
  return (  
    <Router>  
      <Switch>  
        <Route path="/" exact component={Home} />  
        <Route path="/about" component={About} />  
        <Route path="/contact" component={Contact} />  
      </Switch>  
    </Router>  
  );  
}

```

####  2. 导航到特定页面，根据条件过滤：



```js

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
  
function App() {  
  return (  
    <Router>  
      <Switch>  
        <Route path="/page/:id" component={(props) => <Page id={props.id} />} />  
      </Switch>  
    </Router>  
  );  
}

```

#### 3. 嵌套导航：

```js

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
  
function App() {  
  return (  
    <Router>  
      <Switch>  
        <Route path="/" exact component={Home} />  
        <Route path="/about" component={About} />  
        <Route path="/contact" component={Contact} />  
        <Route path="/nested" component={Nested} />  
      </Switch>  
    </Router>  
  );  
}  
  
function Page({ id }) {  
  return <div>Page {id}</div>;  
}  
  
function Nested() {  
  return <div>  
    <Page id={1} />  
    <Page id={2} />  
  </div>;  
}

```

####  4. 动态导航：

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
  
function App() {  
  return (  
    <Router>  
      <Switch>  
        <Route path="/" exact component={Home} />  
        <Route path="/about" component={About} />  
        <Route path="/contact" component={Contact} />  
        <Route path="/nested" component={Nested} />  
        <Route path="/dynamic" component={Dynamic} />  
      </Switch>  
    </Router>  
  );  
}  
  
function Dynamic(props) {  
  const [visible] = React.useState(false);  
  
  const toggle = () => {  
    props.history.push({ name: 'Nested', path: '/nested' });  
    props.history.push({ name: 'Dynamic', path: '/dynamic' });  
    props.history.push({ name: 'Page', path: `${props.params.id}/page/${props.params.id}` });  
    visible(!visible);  
  };  
  
  return (  
    <div>  
      <button onClick={toggle}>Toggle Navigation</button>  
      {visible && <div>Navigation is visible!</div>}  
    </div>  
  );  
}
```

这些是React Router DOM的一些基本用法，可以帮助您快速构建单页应用。但是，React Router DOM还有许多其他功能和选项，可以根据您的需求进行自定义和扩展。