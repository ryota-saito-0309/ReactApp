# prop-typsを用いた型確認

propsに対する型を定義するためのパッケージです。

```javascript
import React from 'react';
import PropTypes from 'prop-types';

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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default App;
```

下記のようにpropTypesを用いて型の定義を行います。

```javascript
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}
```

## 値が必ず存在しなければならない指定

下記のように設定すれば、値が存在しない場合は、Warningが発生する。

```javascript
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}
```

大規模になった場合、受け取るプロパティの値を管理するのが難しくなるので、初めから、どのような値が来るのかを定義しておく事が重要である。