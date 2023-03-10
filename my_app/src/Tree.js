import React, { useEffect } from "react";
import { useState } from "react";
import "./Tree.css";


const Tree = ({ repoNames, setRepoNames, commits, setCommits, token }) => {
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

  const [treeimg, setTreeimg] = useState("");


  const owner = localStorage.getItem("owner");
  // const timeStamp = localStorage.getItem("timeStamp");
  // ?since=${timeStamp}Z
  // 後ほど行う
  ////////reponameの取得
  useEffect(() => {
    fetch(`https://api.github.com/users/${owner}/repos`)
      .then((data) => {
        return data.json();
      })
      .then(async (data) => {
        const _repoNames = await data.map((ele) => ele.name);
        setRepoNames(_repoNames);
        // console.log(repoNames);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/tree")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  //   ///////////////////////////////////表示する写真ゲットする////////////////////////////////////////
  // .then((allCommitNumber) => {
  //   if (allCommitNumber <= 5) {
  //      setTreeimg(trees[0]);
  //      return


  useEffect(() => {
    const countCommits = async () => {
      const commitNums = await Promise.all(
        repoNames.map(async (repo) => {
          const data = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/commits?since=2023-01-26T09:00:45Z`
          ).then((data) => {
            return data.json();
          });
          return data.length;
        })
      );
      const allCommits = commitNums.reduce((acc, cur) => acc + cur, 0);
      setCommits(allCommits);
    };
    countCommits();
  }, [repoNames]);

  useEffect(() => {
    if (commits <= 20) {
      setTreeimg(trees[0]);
    } else if (20 < commits && commits <= 45) {
      setTreeimg(trees[1]);
    } else if (45 < commits && commits <= 80) {
      setTreeimg(trees[2]);
    } else if (80 < commits && commits <= 115) {
      setTreeimg(trees[3]);
    } else if (115 < commits && commits <= 140) {
      setTreeimg(trees[4]);
    } else if (140 < commits && commits <= 170) {
      setTreeimg(trees[5]);
    } else if (170 < commits && commits <= 210) {
      setTreeimg(trees[6]);
    } else if (210 < commits && commits <= 250) {
      setTreeimg(trees[7]);
    } else if (250 < commits && commits <= 300) {
      setTreeimg(trees[8]);
    }
  }, [commits]);
  return (
    <>
      <img className="treeimg" src={treeimg} alt="tree" />
      <h1 className="monthtext">-{owner}の木-</h1>
    </>
  );
};

export default Tree;
