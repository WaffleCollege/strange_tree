import { connectFirestoreEmulator } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Tree.css";

const Tree = () => {
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
  const [commits, setCommits] = useState(0);
  const [treeimg, setTreeimg] = useState("");

  // console.log(owner);

  ///////////////////////////リポジトリ一覧取得　//////////////////////////////////////////////////////////
  //リポジトリ名の配列を取得(ownwr は取得済み)
  const owner = localStorage.getItem("owner");

  useEffect(() => {
    fetch(`https://api.github.com/users/${owner}/repos`)
      .then((data) => {
        return data.json();
      })
      .then(async (data) => {
        const _repoNames = data.map((ele) => ele.name);
        if (!repoNames.length) {
          setRepoNames(_repoNames);
        } else {
          const commitNums = await Promise.all(
            repoNames.map(async (repo) => {
              const data = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits`
              ).then((data) => {
                return data.json();
              });
              return data.length;
            })
          );
          const allCommits = commitNums.reduce((acc, cur) => acc + cur, 0);
          setCommits(allCommits);
        }
      });
  }, [repoNames]);

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
        alt="tree"
      />
      <h1 className="monthtext">-{owner}の木-</h1>
    </>
  );
};

export default Tree;
