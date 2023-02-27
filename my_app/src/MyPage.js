import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tree from "./Tree.js";
import Button from "./Button.js";
import Sun from "./Sun.js";
import WeeklyCommit from "./WeeklyCommit.js";
import { useState } from "react";

const MyPage = ({ isAuth, repoNames, setRepoNames }) => {
  const [commits, setCommits] = useState(0);
  const navigate = useNavigate();
  const move = () => {
    navigate("/Stage");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <>
      <h1>MyPage</h1>
      <Sun />
      <Tree
        repoNames={repoNames}
        setRepoNames={setRepoNames}
        commits={commits}
        setCommits={setCommits}
      />
      <Button function={move} text="ステージ一覧" />
      <WeeklyCommit repoNames={repoNames} commits={commits} />
    </>
  );
};

export default MyPage;
