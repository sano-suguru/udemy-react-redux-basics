import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <>
//         <label htmlFor="bar">bar</label>
//         <input type="text"
//           onChange={() => console.log('changed!')}
//         ></input>
//       </>
//     );
//   }
// }

const App = () => (
  <>
    <Cat />
    <Cat />
    <Cat />
  </>
);

const Cat = () => (
  <div>Meow!</div>
);

export default App;
