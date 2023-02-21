import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Tree from "./Tree.js";
import Soucommit from "./Soucommit.js";
import Button from "./Button.js";
import Sun from "./Sun.js";

const MyPage = ({ isAuth, owner }) => {
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
      <Tree owner={owner} />
      <Button specifyUrl="/Stage" text="ステージ一覧" />
      <Soucommit />
    </>
  );
};

export default MyPage;
