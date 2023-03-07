import React, { useEffect } from "react";
import { useState } from "react";

const WeeklyCommit = ({ repoNames, commits }) => {
  const [weeklyCommits, setWeeklyCommits] = useState(0);
  const [lastWeeklyCommits, setLastWeeklyCommits] = useState(0);

  const owner = localStorage.getItem("owner");



  /////先週のコミット数
 

  // useEffect(() => {
  //   for (const i of repoNames) {
  //     fetch(`https://api.github.com/repos/${owner}/${i}/stats/commit_activity`)
  //       .then((results) => {
  //         return results.json();
  //       })
  //       .then((datas) => {
  //         console.log(datas)
  //         console.log(datas[datas.length - 2]);
  //         return datas[datas.length - 2];
  //       })
  //       .then((lastWeeklydata) => {
  //         const lastWeekly = lastWeeklydata;
  //         console.log(lastWeekly.total);
  //         setLastWeeklyCommits(lastWeekly.total);
  //       });
  //   }
  // }, []);

  ////今週のコミット数
  

  useEffect(() => {
    for (const i of repoNames) {
      fetch(`https://api.github.com/repos/${owner}/${i}/stats/commit_activity`)
        .then((results) => {
          return results.json();
        })
        .then((datas) => {
          console.log(datas)
          console.log(datas[datas.length - 1]);
          return datas[datas.length - 1];
        })
        .then((weeklydata) => {
          const weekly = weeklydata;
          console.log(weekly.total);
          setWeeklyCommits(weekly.total);
        });
    }
  }, [commits]);


  return (
    <div>
      <p>今週のコミット数『{weeklyCommits}』</p>
      {/* <p>先週のコミット数『{lastWeeklyCommits}』</p> */}
    </div>
  );
};

export default WeeklyCommit;
