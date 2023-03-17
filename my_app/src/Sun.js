import { useState } from "react";
import React, { useEffect } from "react";
import "./Sun.css";
import { useAuthContext, useGitInfoContext } from "./context";

const Sun = () => {
  const [consecutiveDays, setConsectiveDays] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();
  const [loginTimeStamp, setTimeStamp] = useState();
  const { owner } = useAuthContext();
  const { repoNames } = useGitInfoContext();

  const getTimestamp = async () => {
    const result = await fetch(`http://localhost:8080/users/${owner}`)
      .then((res) => res.json())
      .then((data) => data.created_at);
    setTimeStamp(result);
  };

  useEffect(() => {
    getTimestamp();
  }, [owner]);

  useEffect(() => {
    const day = new Date();
    const _dayOfWeek = 6 - day.getDay();
    console.log(_dayOfWeek);
    setDayOfWeek(_dayOfWeek);
  }, []);

  useEffect(() => {
    async function consecutiveDays() {
      const loginTime = loginTimeStamp.toString().substring(0, 10).replace(/-/g, "/");
      const timeStamp = Date.now() - new Date(loginTime).getTime();
      const elapsedDays = Math.floor(timeStamp / 86400000);

      const consecutive = await Promise.all(
        repoNames.map(async (names) => {
          const data = await fetch(
            `https://api.github.com/repos/${owner}/${names}/stats/commit_activity`
          )
            .then((results) => {
              return results.json();
            })
            .then((data) => {
              let commitsDatas = [];
              for (const i of data) {
                let day = i.days;
                for (const a of day) {
                  commitsDatas.push(a);
                }
              }
              return commitsDatas;
            });
          return data;
        })
      );
      console.log(consecutive);

      const firstArray = consecutive[0];
      const otherArray = consecutive;
      otherArray.shift();
      let total = firstArray;

      for (const arr of otherArray) {
        for (let i = 0; i < arr.length; i++) {
          total[i] += arr[i];
        }
      }

      total.splice(0, total.length - (elapsedDays + dayOfWeek));
      total.splice(total.length - dayOfWeek, dayOfWeek);
      let totalCommits = total;

      let totalConsecutiveDays = 0;
      for (let i = totalCommits.length - 1; i >= 0; i--) {
        if (totalCommits[i] !== 0) {
          totalConsecutiveDays += 1;
        } else if (totalCommits[i] === 0) {
          break;
        }
      }

      setConsectiveDays(totalConsecutiveDays);
    }

    consecutiveDays();
  }, [repoNames, loginTimeStamp, owner]);

  return (
    <div className="sun">
      <p className="text strong">{consecutiveDays}日間 連続コミット！！</p>
    </div>
  );
};

export default Sun;
