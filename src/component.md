# Componentについて

ReactのComponentは2種類有ります。

- 関数コンポーネント  
関数の定義によって作成される

- クラスコンポーネント  
クラスの定義によって作成される


## 関数コンポーネントの例

関数コンポーネントは、関数を定義して、ただ、jsxをリターンしているという物

```
const App = () =>{
  return <div>Hi!</div>
}
```

## クラスコンポーネントの例

クラスコンポーネントを利用する際は、`import { Component } from 'react';`が必要である。

```
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I'm clicked.")}} />
      </React.Fragment>
    )
  }
}
```

# 関数コンポーネントをjsx内で呼び出す

関数コンポーネントをjsx内で呼び出す事も可能です！

```
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Nya!</div>
}
```

