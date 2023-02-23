import React from "react";
import StageTree from "./StageTree";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Stage() {
  const navigate = useNavigate();
  const move = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Stages</h1>
      <Button function={move} text="← MyPage" />
      <StageTree />
    </div>
  );
}

export default Stage;
