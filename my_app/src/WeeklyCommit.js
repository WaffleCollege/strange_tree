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
          return datas.all;
        })
        .then((all) => {
          setLastWeeklyCommits((prev) => prev + all[all.length - 2]);
        });
    }
  }, []);

  useEffect(() => {
    setWeeklyCommits(commits);
    for (const i of repoNames) {
      fetch(`https://api.github.com/repos/${owner}/${i}/stats/participation`)
        .then((results) => {
          return results.json();
        })
        .then((datas) => {
          return datas.all;
        })
        .then((all) => {
          all.pop(); //今週以外の配列
          const beforeCommits = all.reduce((acc, cur) => acc + cur, 0);
          setWeeklyCommits((prev) => prev - beforeCommits);
        });
    }
  }, [commits]);

  return (
    <div>
      <p>今週のコミット数『{weeklyCommits}』</p>
      <p>先週のコミット数『{lastWeeklyCommits}』</p>
    </div>
  );
};

export default WeeklyCommit;
