import React from "react";
import "./CommitInformation.css";
function CommitInformation(props) {
  return (
    <>
      <p>
        期間：{props.period} コミット数：{props.commitNum}
        連続コミット日数：{props.consecutiveDays}日
        アイテムゲット数：{props.items}個；
      </p>
      <p>今週のコミット数『〇』(先週のコミット数『〇』)</p>
    </>
  );
}

export default CommitInformation;
