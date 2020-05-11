# Reduxについて

フラッグスアーキテクチャの1つがReduxです。

コンポーネントの階層が大きくなったときに、容易に状態を共有する手段を構築する事ができる。

## コンベンション

Reduxのコーディングの習慣に沿ってコーディングしていく。

## Actionとは

アプリケーションの中で何が起きたかを記載する。
JavaScriptのオブジェクトの事です。
タイプとタイプに対応する値を持つのがアクションの特徴になる。

また、タイプはユニークな値でないといけない。

# Action Creater

Reduxではアクションを返す関数の事をActionCreaterと呼ぶ

後にインポートして利用できるように`export`しておく。

```javascript
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
```

ここのincrementと言うものはアクションクリエータの関数である。

# Reducerについて

AntionCreaterのタイプに応じて状態をどのように変化させるのかを定義する物です。

状態は、コードの中ではstateという値で扱っていきます。
アプリケーションの事実上の状態を記述するファイル（counter)を作成します。

## 複数の状態を管理したい場合は

```javascript
import { combineReducers } from 'redux'
import foo, zoo, gaz from './state'

export default combineReducers({foo, zoo, gaz})
```
上記のように、複数のReducerを引数に指定する事で複数管理ができる。


## 状態の定義について

状態の定義はオブジェクトに行います。

初期状態は`initialState`にします。

# store

storeがアプリの全てのコンポーネントで利用できるようにしていきます。

```javascript
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
Providerで包む事で、全てのコンポーネントで利用できるようになります。

# connectでstateとactionの関連付けを行う

Viweのイベントで状態を変更させて画面の描画を再描画する。

```javascript
import React, { Component } from 'react';
import { connect} from 'react-redux';

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>Count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value: state.count.value})
const mapDispatchToProps = dispatch =>({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
```
下記の部分で、stateから取得したい値と、動作させたい関数をマッピングして渡している。
connect(mapStateToProps, mapDispatchToProps)(App)

## mapDispatchToPropsの別案

下記のように記載する事も可能である。
`const mapDispatchToProps = dispatch =>({ increment, decrement })`