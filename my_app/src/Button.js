import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  return <button onClick={props.function}>{props.text}</button>;
};

export default Button;
