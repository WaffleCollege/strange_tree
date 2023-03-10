import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tree from "./Tree.js";
import Button from "./Button.js";
import Sun from "./Sun.js";
import WeeklyCommit from "./WeeklyCommit.js";
import { useState } from "react";


const MyPage = ({ isAuth, token, repoNames, setRepoNames }) => {
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
      <Sun repoNames={repoNames}/>
      <Tree
        repoNames={repoNames}
        setRepoNames={setRepoNames}
        commits={commits}
        setCommits={setCommits}
        token={token}
      />
      <Button function={move} text="ステージ一覧" />
      <WeeklyCommit repoNames={repoNames} commits={commits} />

    </>
  );
};

export default MyPage;
