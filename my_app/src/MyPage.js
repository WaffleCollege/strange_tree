import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Tree from "./Tree.js";
import CommitInformation from "./CommitInformation.js";
import Button from "./Button.js";
import Sun from "./Sun.js";

const MyPage = ({ isAuth, token }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return (
    <>
      <h1>MyPage</h1>

      <Sun />
      <Tree />
      <Button specifyUrl="/Stage" text="ステージ一覧" />
      <CommitInformation />
      
    </>
  );
};

export default MyPage;
