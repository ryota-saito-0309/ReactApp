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
