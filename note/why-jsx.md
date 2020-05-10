# JSXとは

「JavaScript eXtension」の略で、JavaScriptの中にHTMLのようなコードを記載するための物です！

## なぜ、JSXを使うのか？

アプリケーションの中では、トランスファイルという処理が施されて、JavaScriptに変換して実行されています。
直感的にコードを作成する事ができる。

### JSXを用いた場合

```javascript
import React, { Component } from 'react';

 JSXを用いた場合
 class App extends Component {
   render() {
     return <div>Hello World!</div>;
   }
 }
export default App;
```

### JavaScriptを用いた場合

```javascript
class App extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello World!!"
    );
  }
}
export default App;
```

# Reactのインポート文について

JSXを利用する際は、最上部に記載されている
`import React from 'react';`
を記載しておかないとエラーが発生する。

なぜか？
→ 変換後に、React.createElementになるため！

# JSX内のclassについて
JavaScriptの`class`と被ってしまうので、JSX内のクラス指定については、`className`と指定する。

# JSXをReturnで返す際の制約

JSXをReturnで返す場合、タグは1つで無いといけません。
なので、多くの要素を排出したい場合は、`<div>`で囲うか次述の方法を利用する必要がある。

## divタグを利用しない方法

`<div>`の部分を`<React.Fragment>`に置き換える事で複数のタグを出力する事が可能である。
上記の方法を利用する事で、不要なタグを排出せずに、複数の要素を配置する事ができる。


