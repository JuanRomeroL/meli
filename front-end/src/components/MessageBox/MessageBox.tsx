import React from "react";
import logo from "../../assets/logo.png";
import StylingProps from "../../types/StylingProps";

function MessageBox({ className, message }: StylingProps & any) {
  return (
    <div className={className}>
      <img src={logo} />
      <p>{message}</p>
    </div>
  );
}

export default MessageBox;
