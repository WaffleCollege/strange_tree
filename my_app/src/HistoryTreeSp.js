import React from "react";
import "./HistoryTreeSp.css";

function HistoryTreeSp() {
  return (
    <div className="spring">
      <h2>Spring</h2>
      <img className="img" src="https://i.ibb.co/mFWQNCg/tree-seichou09.png" />
      {/* 保存情報から写真の引っ張って来る */}
      <p className="infomation">
        期間：〇月〇日～〇月〇日 コミット数：〇〇 連続コミット日数：〇日
        アイテムゲット数：〇個；
      </p>
      {/* 情報の表示(期間中のコッミト数、連続コミット数) */}
    </div>
  );
}

export default HistoryTreeSp;
