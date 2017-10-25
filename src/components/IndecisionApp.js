import React from "react";

import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    title: "Indecision",
    subTitle: "Put your life in the hands of a computer",
    options: ["Opt 1", "Opt 2"],
    decision: null
  };
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
  onMakeDecision = () => {
    this.setState(prevState => ({
      decision:
        prevState.options[Math.floor(Math.random() * prevState.options.length)]
    }));
  };
  onRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };
  onAddOption = optionText => {
    if (!optionText) {
      return "OptionText is empty";
    } else if (optionText.trim().length == 0) {
      return "OptionText is empty";
    }
    this.setState(prevState => ({
      options: prevState.options.concat(optionText)
    }));
  };
  onRemoveOption = optionText => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionText)
    }));
  };
  onOptionModalClose = () => {
    this.setState(() => ({
      decision: undefined
    }));
  };
  render() {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            onMakeDecision={this.onMakeDecision}
          />
          <div className="widget">
            <Options
              decision={this.state.decision}
              options={this.state.options}
              onRemoveAll={this.onRemoveAll}
              onRemoveOption={this.onRemoveOption}
            />
            <AddOption onAddOption={this.onAddOption} />
          </div>
        </div>
        <OptionModal
          decision={this.state.decision}
          onClose={this.onOptionModalClose}
        />
      </div>
    );
  }
}
