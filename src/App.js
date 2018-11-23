import React from 'react';

const App = () => {
  const profiles = [
    { id: 1 ,name: 'Taro', age: 10},
    { id: 2, name: 'Hanako', age: 5 },
    { id: 3, age: 15}
  ]
  return (
    <>
      {
        profiles.map(p =>
          <User key={p.id} name={p.name} age={p.age} />
        )
      }
    </>
  );
}

const User = (props) => (
  <p>Hi!, I am {props.name}, and {props.age} years old!</p>
);

User.defaultProps = {
  name: 'unknown'
};

export default App;
