import React from "react";
import "./HistoryButton.css";
import { useNavigate } from "react-router-dom";

const HistoryButton = () => {
  const navigate = useNavigate();
  const button = () => {
    navigate("/");
  };

  return (
    <button className="button" onClick={button}>
      ← MyPage
    </button>
  );
};

export default HistoryButton;
