import React from "react";

import Option from "./Option";

const Options = props => (
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

export default Options;
