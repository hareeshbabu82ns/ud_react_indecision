import React from "react";

import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={props.onRemoveAll}>
        Remove All
      </button>
    </div>
    <div>
      {props.options.length == 0 && (
        <p className="widget__message">Please add some Options!</p>
      )}
      {props.options.map(option => (
        <Option
          key={option}
          option={option}
          decision={props.decision}
          onRemoveOption={props.onRemoveOption}
        />
      ))}
    </div>
  </div>
);

export default Options;
