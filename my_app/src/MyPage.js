import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tree from "./Tree.js";
import Button from "./Button.js";
import Sun from "./Sun.js";
import WeeklyCommit from "./WeeklyCommit.js";
import { useAuthContext } from "./context.js";

const MyPage = () => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();
  const move = () => {
    navigate("/Stage");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <>
      <Sun />
      <Tree />
      <Button function={move} text="ステージ一覧" />
      <WeeklyCommit />
    </>
  );
};

export default MyPage;
