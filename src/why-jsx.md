# JSXとは

「JavaScript eXtension」の略で、JavaScriptの中にHTMLのようなコードを記載するための物です！

## なぜ、JSXを使うのか？

アプリケーションの中では、トランスファイルという処理が施されて、JavaScriptに変換して実行されています。
直感的にコードを作成する事ができる。

### JSXを用いた場合

```
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

```
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