import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tree from "./Tree.js";
import Button from "./Button.js";
import Sun from "./Sun.js";
import WeeklyCommit from "./WeeklyCommit.js";


const MyPage = ({ isAuth, owner, repoNames,setRepoNames}) => {

  

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  const move = () => {
    navigate("/Stage");
    };


  // console.log("mypage");
  return (
    <>
      <h1>MyPage</h1>

      <Sun />
      <Tree owner={owner}  repoNames={repoNames} setRepoNames={setRepoNames}/>
      <Button function= {move}  text="ステージ一覧" />
      <WeeklyCommit  repoNames={repoNames} />
    </>
  );
};

export default MyPage;
