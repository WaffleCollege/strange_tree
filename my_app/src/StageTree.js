import React from "react";
import "./StageTree.css";
import CommitInformation from "./CommitInformation";

function StageTree() {
  return (
    <div className="spring">
      <h2>Spring</h2>
      <img className="img" src="https://i.ibb.co/mFWQNCg/tree-seichou09.png" />
      {/* 保存情報から写真の引っ張って来る */}

      <CommitInformation className="infomation" />
    </div>
  );
}

export default StageTree;
