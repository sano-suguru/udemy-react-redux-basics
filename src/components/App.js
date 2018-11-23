import React, { Component } from 'react';

function App () {
  return (
    <>
      <Counter />
    </>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <p>
          count: { this.state.count }
        </p>
        <button onClick={this.handlePlusButton}>
          increment
        </button>
        <button onClick={this.handleMinusButton}>
          decrement
        </button>
      </>
    );
  }
}

export default App;
