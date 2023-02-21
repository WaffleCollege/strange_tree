import React from "react";
import StageTree from "./StageTree";
import Button from "./Button";
function Stage() {
  return (
    <div>
      <h1>Stages</h1>
      <Button specifyUrl="/" text ="← MyPage"/>
      <StageTree />
    </div>
  );
}

export default Stage;
