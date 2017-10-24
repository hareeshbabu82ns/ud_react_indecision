import React from "react";

// const Option = props => {
//   return <li className={this.getOptCls()}>{props.option}</li>;
// };
// Option.getOptCls = () => {
//   return this.props.decision === this.props.option ? "decision" : null;
// };

export default class Option extends React.Component {
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
