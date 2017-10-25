import React from "react";

export default class AddOption extends React.Component {
  state = { error: null };
  onAddOption = e => {
    e.preventDefault();
    const error = this.props.onAddOption(e.target.option.value);
    e.target.option.value = "";
    this.setState(() => ({ error }));
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.onAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
