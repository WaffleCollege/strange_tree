import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  const button = () => {
    navigate(props.specifyUrl);
  };
  
  return (
    <button  onClick={button}>
     {props.text}
    </button>
  );
};

export default Button;

