import React from "react";

export default class AddOption extends React.Component {
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
