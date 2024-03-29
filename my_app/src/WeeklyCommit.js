import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthContext, useGitInfoContext } from "./context";
import "./WeeklyCommit.css"


const WeeklyCommit = () => {
  const { repoNames, commits } = useGitInfoContext();
  const { owner, token } = useAuthContext();
  const [weeklyCommits, setWeeklyCommits] = useState(0);
  // const [lastWeeklyCommits, setLastWeeklyCommits] = useState(0);

  /////先週のコミット数

  // useEffect(() => {

  //   async function getLastWeeklyCommits () {
  //     const commitsArray =  await Promise.all(
  //       repoNames.map(async (names) => {
  //         const datas = await fetch(
  //           `https://api.github.com/repos/${owner}/${names}/stats/commit_activity`
  //         )
  //           .then((results) => {
  //             return results.json();
  //           })
  //           .then((datas) => {
  //             console.log(datas[datas.length - 2]);
  //             return datas[datas.length - 2];
  //           }).then((datas)=>{
  //            console.log(datas["total"]);
  //           return datas["total"];
  //       });
  //       })
  //     );
  //       console.log(commitsArray);
  //       const lastWeekly = commitsArray.reduce((acc,cur)=> acc+cur,0);
  //       console.log(lastWeekly);
  //       setLastWeeklyCommits(lastWeekly);
  //   }
  //   getLastWeeklyCommits();
  // }, []);

  ////今週のコミット数

  useEffect(() => {
    async function getWeeklyCommits() {
      console.log(repoNames.length);
      const commitsNumsArray = await Promise.all(
        repoNames.map(async (name) => {
          const data = await fetch(
            `https://api.github.com/repos/${owner}/${name}/stats/commit_activity`,
            {
              headers: {
                Authorization: `token ${token}`,
                Accept: "application / vnd.github.v3 + json",
              },
            }
          )
            .then(async (results) => {
              return await results.json();
            })
            .then((data) => {
              return data[data.length - 1];
            });
          return data.total;
        })
      );
      const weekly = commitsNumsArray.reduce((acc, cur) => acc + cur, 0);
      setWeeklyCommits(weekly);
    }
    getWeeklyCommits();
  }, [commits, token, repoNames, owner]);

  return (
    <div className="weekly">
      <p className="commit">今週のコミット数『{weeklyCommits}』</p>
      {/* <p>先週のコミット数『{lastWeeklyCommits}』</p> */}
    </div>
  );
};

export default WeeklyCommit;
