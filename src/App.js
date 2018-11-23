import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <label htmlFor="bar">bar</label>
        <input type="text"
          onChange={() => console.log('changed!')}
        ></input>
      </>
    );
  }
}

export default App;
