import React from "react";

const Action = props => (
  <div>
    <button onClick={props.onMakeDecision} disabled={!props.hasOptions}>
      Make Decision
    </button>
  </div>
);
export default Action;
