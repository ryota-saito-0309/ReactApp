# stateについて

Reactの内部で状態を保持するために利用する物です。

propsは外部から渡される物
stateはcomponentの内部のみで使用されます。

propsは変更不可能（イミュータブル）な値であった。
stateは変更可能（ミュータブル）な値である。

## stateを利用できるコンポーネント

stateはクラスコンポーネントでできます。

# 実際に利用してみる

下記のコードを利用して、コンソールに状態を出力した場合、`null`が表示される。
その結果、なにも指定しない場合、stateは`null`である事がわかる。

```javascript
import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  render() {
    console.log(this.state)
    return (<div>Counter</div>)
  }
}

export default App;
```

## stateの初期化を行ってみる

```javascript
import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(prpos) {
    super(prpos)
    console.log(this.state)
    this.state = {count: 0}
  }
  render() {
    console.log(this.state)
    return (<div>Count: {this.state.count}</div>)
  }
}

export default App;
```

`constructor`は初回に実行されるメソッドです。

## stateを変更する

stateを変更する際は、`this.setState`を利用して変更します。

```javascript
import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(prpos) {
    super(prpos)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    console.log(this.state)
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
```

## stateを利用する際の注意点

初期化処理以外でステートを設定する場合は、必ず`this.setState`を利用しなければならない。

`this.state = { count: 0 }`で変更しようとすると警告が発生する。
また、状態を直接いじった場合は値の表示が更新されないが、なぜかと言うと、Renderが再実行されていない事が原因である。

Reactにおいて、`setState`を実行した場合、`render`が再実行され、表示が更新されます。

# まとめ

状態を変更する際は必ずsetStateする。
setStateを使わなかった場合は表示の変更を行うためにDOMのデータを変更しなければ、再描画されない。
