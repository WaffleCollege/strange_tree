import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tree from "./Tree.js";
import Button from "./Button.js";
import Sun from "./Sun.js";
import WeeklyCommit from "./WeeklyCommit.js";


const MyPage = ({ isAuth, token, repoNames,setRepoNames}) => {
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
      <Tree repoNames={repoNames} setRepoNames={setRepoNames} token={token}/>
      <Button function= {move}  text="ステージ一覧" />
      <WeeklyCommit  repoNames={repoNames} />
    </>
  );
};

export default MyPage;