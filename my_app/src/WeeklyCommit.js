import React, { useEffect } from "react";
import { useState } from "react";

const WeeklyCommit = ({ repoNames, commits }) => {
  const [weeklyCommits, setWeeklyCommits] = useState(0);
  const [lastWeeklyCommits, setLastWeeklyCommits] = useState(0);

  const owner = localStorage.getItem("owner");

  useEffect(() => {
    for (const i of repoNames) {
      fetch(`https://api.github.com/repos/${owner}/${i}/stats/participation`)
        .then((results) => {
          return results.json();
        })
        .then((datas) => {
          console.log(datas);
          return datas.all;
        })
        .then((allDatas) => {
          setWeeklyCommits(allDatas[allDatas.length - 1]);
          setLastWeeklyCommits(allDatas[allDatas.length - 2]);
        });
    }
  }, [commits]);
  console.log(weeklyCommits);

  return (
    <div>
      <p>今週のコミット数『{weeklyCommits}』</p>
      <p>先週のコミット数『{lastWeeklyCommits}』</p>
    </div>
  );
};

export default WeeklyCommit;
