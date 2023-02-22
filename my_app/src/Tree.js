import React from "react";
import { useState } from "react";
import "./Tree.css";

const Tree = ({ owner }) => {
  // いらすとやの木の写真
  const trees = [
    "https://i.ibb.co/0QZCRFG/tree-seichou01.png", //種
    "https://i.ibb.co/0JtXMgs/tree-seichou02.png", //双葉
    "https://i.ibb.co/JsDDgrS/tree-seichou03.png", //四つ葉
    "https://i.ibb.co/ZxJwqJW/tree-seichou04.png", //前木１
    "https://i.ibb.co/5WKtJdj/tree-seichou05.png", //前木２
    "https://i.ibb.co/rksbDMM/tree-seichou06.png", //木１
    "https://i.ibb.co/HgjkX7G/tree-seichou07.png", //木２
    "https://i.ibb.co/DfHB8Jz/tree-seichou08.png", //木３
    "https://i.ibb.co/mFWQNCg/tree-seichou09.png",
  ]; //リンゴ

  const [repoNames, setRepoNames] = useState([]); //()のなかはレポネームの初期値を設定
  const [commitsuu, setCommitsuu] = useState(0);
  const [treeimg, setTreeimg] = useState("");

  // console.log(owner);

  ///////////////////////////リポジトリ一覧取得　//////////////////////////////////////////////////////////
  //リポジトリ名の配列を取得(ownwr は取得済み)
  fetch(`https://api.github.com/users/${owner}/repos`)
    .then((results) => {
      return results.json();
    })
    .then((datas) => {
      // console.log(datas)//ok
      setRepoNames(datas.map((ele) => ele.name));
      console.log(repoNames);
    })
    ////////////////コッミト数を取得する////////////////////////////////////////////////////////////////////////////////////////
    // console.log(`https://api.github.com/repos/${owner}/${setRepoNames}/commits`); //ここの[owner]は、Mypage(子)、APP(親)の孫 で段々に引っ張ってきた。基は

    .then(() => {
      for (const i of repoNames) {
        //repoNameはリポジトリ名が入った配列
        fetch(`https://api.github.com/repos/${owner}/${i}/commits`)
          .then((results) => {
            return results.json();
          })
          .then((data) => {
            // console.log(data);
            setCommitsuu(data.length); 
            console.log(commitsuu)
            //配列をcommitについての情報だけにする
            // let commits = data.map((ele) => ele.commit);
            // console.log(commits);
            // return commits;
          // })
          // .then((commits) => {
          //   setCommitsuu((prev) => prev + commits.length); //配列の中身の数＝コッミト数　だから数を数える
          //   // console.log(commitsuu);
          });
      }
      return commitsuu;
    });

  //   ///////////////////////////////////表示する写真ゲットする////////////////////////////////////////
  // .then((allCommitNumber) => {
  //   if (allCommitNumber <= 5) {
  //      setTreeimg(trees[0]);
  //      return

  //   }
  //  else if (5 < allCommitNumber && allCommitNumber <= 10) {
  //   setTreeimg = trees[1];
  //   return setTreeimg;
  // } else if (10 < allCommitNumber && allCommitNumber <= 19) {
  //   setTreeimg = trees[2];
  //   return setTreeimg;
  // } else if (19 < allCommitNumber && allCommitNumber <= 25) {
  //   setTreeimg = trees[3];
  //   return setTreeimg;
  // } else if (25 < allCommitNumber && allCommitNumber <= 39) {
  //   setTreeimg = trees[4];
  //   return setTreeimg;
  // } else if (39 < allCommitNumber && allCommitNumber <= 50) {
  //   setTreeimg = trees[5];
  //   return setTreeimg;
  // } else if (50 < allCommitNumber && allCommitNumber <= 67) {
  //   setTreeimg = trees[6];
  //   return setTreeimg;
  // } else if (67 < allCommitNumber && allCommitNumber <= 88) {
  //   setTreeimg = trees[7];
  //   return setTreeimg;
  // } else if (88 < allCommitNumber && allCommitNumber <= 105) {
  //   setTreeimg = trees[8];
  //   return setTreeimg;
  // }
  // });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <img
        className="treeimg"
        src="https://i.ibb.co/rksbDMM/tree-seichou06.png"
      />
      <h1 className="monthtext">-{owner}の今月の木-</h1>
    </>
  );
};

export default Tree;
