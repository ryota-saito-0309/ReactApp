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