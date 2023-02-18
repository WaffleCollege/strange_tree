import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const button = () => {
    navigate("/History");
  };

  return (
    <button className="TreesHistory" onClick={button}>
      ステージ一覧
    </button>
  );
};

export default Button;
