import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tree from "./Tree.js";
import Button from "./Button.js";
import Sun from "./Sun.js";
import WeeklyCommit from "./WeeklyCommit.js";
import { useAuthContext } from "./context.js";
import Gauge from "./Gauge.js";

import "./MyPage.css";


const MyPage = () => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();


  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <div className="myPageContainer">
      <Sun />
      <div className="treeContents">
        <Tree />
        <WeeklyCommit />
      </div>
      <Gauge />
    </div>
  );
};

export default MyPage;
