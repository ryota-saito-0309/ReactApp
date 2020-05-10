# propsとは

コンポーネントの属性の事です。

props.name等のあるデータの属性に対して、参照できる物をpropsと呼びます。
基本的には`{}`で囲ってpropsを渡していきます。

```javascript
import React from 'react';

const App = () => {
  return (
    <div>
      <User name={"Taro"} age={"23"}/>
      <User name={"Hana"} age={"2"}/>
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!!</div>
}

export default App;
```

# mapについて

複数の情報を管理する際に、mapを利用して順番に処理を行う事ができる

下記のソースではwarningが発生します。

```javascript
import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro", age: 30},
    {name: "Hana", age: 10},
  ];
  return (
    <div>
      {
        profiles.map((profile) => {
          return <User name={profile.name} age={profile.age} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!!</div>
}

export default App;

```

## Warningの解消

ReactにはリアルタイムDOMがある。
その機構は、変更があった部分のみレンダリングする事で表示の速度をあげる物である。
そのため、上記のソースコードのままでは、どの部分が変更されたかを確認するための情報が無いため、Warningが発生します。
要素にkeyを与える事でWarningを解消する事が可能です。

今回は、map関数を利用しているので、map関数から取得できる`index`を利用するのが良い

```javascript
import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro", age: 30},
    {name: "Hana", age: 10},
  ];
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!!</div>
}

export default App;

```

# デフォルトpropsについて

propsを受け取るコンポーネントに`defaultprops`を設定してあげます。

```javascript
import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro", age: 30},
    {name: "Hana", age: 10},
    {name: "NonName"},
  ];
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!!</div>
}

User.defaultProps = {
  age: 0
}

export default App;
```