import React, { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}

// JSX を使わないと直感的でない
// class App extends Component {
//   render() {
//     return React.createElement(
//       'h1',
//       null,
//       'Hello, world!'
//     )
//   }
// }

export default App;
