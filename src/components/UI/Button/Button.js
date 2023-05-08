import React from "react";

import "./Button.css";

const Button = (props) => {
  const disabled = props.onChange.trim().length === 0;
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`button ${disabled ? 'invalid' : ''}`}
      
    >
      {props.children}
    </button>
  );
};

export default Button;
