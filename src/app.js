import React from "react";
import ReactDOM from "react-dom";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Indecision",
      subTitle: "Put your life in the hands of a computer",
      options: ["Opt 1", "Opt 2"],
      decision: null
    };
    this.onMakeDecision = this.onMakeDecision.bind(this);
    this.onRemoveAll = this.onRemoveAll.bind(this);
    this.onAddOption = this.onAddOption.bind(this);
    this.onRemoveOption = this.onRemoveOption.bind(this);
  }
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) this.setState(() => ({ options }));
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }
  onMakeDecision() {
    this.setState(prevState => ({
      decision:
        prevState.options[Math.floor(Math.random() * prevState.options.length)]
    }));
  }
  onRemoveAll() {
    this.setState(() => ({ options: [] }));
  }
  onAddOption(optionText) {
    if (!optionText) {
      return "OptionText is empty";
    } else if (optionText.trim().length == 0) {
      return "OptionText is empty";
    }
    this.setState(prevState => ({
      options: prevState.options.concat(optionText)
    }));
  }
  onRemoveOption(optionText) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionText)
    }));
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          onMakeDecision={this.onMakeDecision}
        />
        <Options
          decision={this.state.decision}
          options={this.state.options}
          onRemoveAll={this.onRemoveAll}
          onRemoveOption={this.onRemoveOption}
        />
        <AddOption onAddOption={this.onAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
};

const Action = props => {
  return (
    <div>
      <button onClick={props.onMakeDecision} disabled={!props.hasOptions}>
        Make Decision
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.onRemoveAll}>Remove All</button>
      <ul>
        {props.options.length == 0 && <p>Please add some Options!</p>}
        {props.options.map(option => (
          <Option
            key={option}
            option={option}
            decision={props.decision}
            onRemoveOption={props.onRemoveOption}
          />
        ))}
      </ul>
    </div>
  );
};

// const Option = props => {
//   return <li className={this.getOptCls()}>{props.option}</li>;
// };
// Option.getOptCls = () => {
//   return this.props.decision === this.props.option ? "decision" : null;
// };
class Option extends React.Component {
  constructor(props) {
    super(props);
    this.getOptCls = this.getOptCls.bind(this);
  }
  getOptCls() {
    return this.props.decision === this.props.option ? "decision" : null;
  }
  render() {
    return (
      <li className={this.getOptCls()}>
        {this.props.option}
        <button
          onClick={e => {
            this.props.onRemoveOption(this.props.option);
          }}
        >
          Remove
        </button>
      </li>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onAddOption = this.onAddOption.bind(this);
    this.state = { error: null };
  }
  onAddOption(e) {
    e.preventDefault();
    const error = this.props.onAddOption(e.target.option.value);
    e.target.option.value = "";
    this.setState(() => ({ error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form onSubmit={this.onAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));

/**
 * Visibility Toggle App
 */
// class VisibilityToggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onToggle = this.onToggle.bind(this);
//     this.state = {
//       visible: false
//     };
//   }

//   onToggle() {
//     this.setState(prevState => {
//       return { visible: !prevState.visible };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>VisibilityToggle</h1>
//         <button onClick={this.onToggle}>
//           {this.state.visible ? "Hide" : "Show"}
//         </button>
//         {this.state.visible && <p>Text to Toggle</p>}
//       </div>
//     );
//   }
// }
// ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));

/**
 * Counter App
 */
class CounterApp extends React.Component {
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
// ReactDOM.render(<CounterApp />, document.getElementById("root"));
