import React from "react";

import "./Button.css";

const Button = (props) => {
  const disabled = props.onChange.trim().length === 0;
  return (
    <button
      type={props.type}
      style={{ background: disabled ? "rgb(248, 94, 94)" : "#8b005d" }}
      className="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
