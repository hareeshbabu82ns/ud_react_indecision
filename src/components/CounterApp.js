import React from "react";

export default class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.onDecCounter = this.onDecCounter.bind(this);
    this.onIncCounter = this.onIncCounter.bind(this);
    this.onResetCounter = this.onResetCounter.bind(this);
  }
  componentDidMount() {
    const counter = parseInt(localStorage.getItem("counter"));
    if (counter) this.setState(() => ({ counter }));
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("counter", this.state.counter);
  }
  onIncCounter() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }
  onDecCounter() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }
  onResetCounter() {
    this.setState(() => ({ counter: 0 }));
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.onIncCounter}>+1</button>
        <button onClick={this.onDecCounter}>-1</button>
        <button onClick={this.onResetCounter}>reset</button>
      </div>
    );
  }
}
