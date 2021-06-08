import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
    // this.incrementCounter = this.incrementCounter.bind(this);
    // this.decrementCounter = this.decrementCounter.bind(this);
  }

  // event Handlers

  incrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  decrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };

  render() {
    const { incrementCounter, decrementCounter } = this;
    const { counter } = this.state;
    return (
      <React.Fragment>
        <h2>Counter :</h2>
        <p>{counter}</p>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </React.Fragment>
    );
  }
}

export default App;
