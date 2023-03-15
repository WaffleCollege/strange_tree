
import { useState } from "react";
import React, { useEffect } from "react";
import "./Sun.css";
import { useAuthContext, useGitInfoContext } from "./context";


const Sun = () => {
  const owner = localStorage.getItem("owner");
  const [ consecutiveDays,setConsectiveDays ] =useState();
  const [dayOfWeek,setDayOfWeek] =useState(); 
  const [loginTimeStamp ,setTimeStamp] = useState();
  const { repoNames } = useGitInfoContext();
  
  useEffect(() => {
    const getTimestamp = async () => {
      const result = await fetch(`http://localhost:8080/users/${owner}`)
        .then((res) => res.json())
        .then((data) => data.created_at);
      setTimeStamp(result);
    };
    getTimestamp();

  }, [owner]);


 
   useEffect(()=>{ 
    const day = new Date(); 
    const _dayOfWeek = 6-day.getDay();
    console.log(_dayOfWeek);
    setDayOfWeek(_dayOfWeek);
  },[]);


useEffect( () => {
  

async function consecutiveDays () {
let loginTime = (timeStamp);
let time = loginTime.toString().substring(0, 10);
let newTime = time.replace(/-/g, "/");
let timeStamp = Date.now() - new Date(newTime).getTime();
const elapsedDays = Math.floor( timeStamp / 86400000 );


const consecutive =  await Promise.all(
  repoNames.map(async (names) => {
    const data = await fetch(`https://api.github.com/repos/${owner}/${names}/stats/commit_activity`)
      .then((results)=>{
        return results.json();
     }).then((data)=>{
      let commitsDatas=[];
      for(const i of data){
        let day = i.days ; 
        for(const a of day){
          commitsDatas.push(a);
        }
      }
      return commitsDatas;
     })
     return data;
    })
  );
  




let firstArray =consecutive[0];
let otherArray =consecutive;
otherArray.shift();
let total=firstArray;

for(const arr of otherArray){
for (const i = 0; i < arr.length; i++) {
  total[i] += arr[i];
}
}
let total1 = total;

total1.splice(0,total1.length-(elapsedDays+dayOfWeek));
total1.splice(total1.length-dayOfWeek,dayOfWeek);
let totalCommits = total1; 


let totalConsecutiveDays = 0;
for(let i = totalCommits.length - 1; i >= 0;i--){
if (totalCommits[i] !== 0){
  totalConsecutiveDays += 1;
}else if(totalCommits[i] === 0){
  break;
}}

setConsectiveDays(totalConsecutiveDays);
}

consecutiveDays();
}, [repoNames]); 



  return (
    <div className="sun">
      <p className="text">「{consecutiveDays}日間」 連続コミット！！</p>
    </div>
  );


};

export default Sun;

