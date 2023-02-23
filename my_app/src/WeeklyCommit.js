import React from "react";
import { useState } from "react";

const WeeklyCommit = ({ owner, repoNames }) => {
  const [weeklyCommits, setWeeklyCommits] = useState(0);
  const [lastWeeklyCommits, setLastWeeklyCommits] = useState(0);

//   for (const i of repoNames) {
    fetch(`https://api.github.com/repos/shiotsuki40/_githubTest/stats/participation
    `)
      .then((results) => {
        return results.json();
      })
      .then((datas) => {
        console.log(datas);
        return datas.all;
      })
      .then((datas) => {
        setWeeklyCommits(datas[datas.length-1]);
        console.log(weeklyCommits);
        setLastWeeklyCommits(datas[datas.length-2]);
        console.log(lastWeeklyCommits);
      });
//   }

  return (
    <div>
      <p>今週のコミット数『{weeklyCommits}』</p>
      <p>先週のコミット数『{lastWeeklyCommits}』</p>
    </div>
  );
};

export default WeeklyCommit;

// https://api.github.com/repos/${owner}/${i}/stats/participation