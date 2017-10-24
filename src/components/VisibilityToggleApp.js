import React from "react";

export default class VisibilityToggle extends React.Component {
  state = {
    visible: false
  };

  onToggle = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible };
    });
  };
  render() {
    return (
      <div>
        <h1>VisibilityToggle</h1>
        <button onClick={this.onToggle}>
          {this.state.visible ? "Hide" : "Show"}
        </button>
        {this.state.visible && <p>Text to Toggle</p>}
      </div>
    );
  }
}
