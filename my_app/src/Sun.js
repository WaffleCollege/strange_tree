
import { useState } from "react";
import React, { useEffect } from "react";
import "./Sun.css";

const Sun = ({ repoNames }) => {
  const owner = localStorage.getItem("owner");
  const [sunNumber, setSunNumber] = useState();//昨日のコミット数
  const [dayOfWeek,setDayOfWeek] =useState(); //曜日
  
localStorage.setItem('commits', 0);
  
 useEffect(()=>{ 
  const day = new Date(); 
  const _dayOfWeek = day.getDay();
  console.log(_dayOfWeek);
  setDayOfWeek(_dayOfWeek);
},[]);

console.log(dayOfWeek);


  useEffect(() => {
        if(dayOfWeek === 0){
          console.log(repoNames);
          console.log(owner)
          console.log(dayOfWeek);
          console.log({dayOfWeek});
          async function getSundayCommits () {
            const commitsNumsArray =  await Promise.all(
              repoNames.map(async (names) => {
                const data = await fetch(`https://api.github.com/repos/${owner}/${names}/stats/commit_activity`)
                .then((results)=>{
                  return results.json();
               }).then((data)=>{
                const weekDatas = data[data.length - 2];
                console.log(weekDatas);
                const daysDatas = weekDatas.days;
                console.log(daysDatas[6]);
                return daysDatas[6];
               })
               console.log(data);
               return data;
              })
            )
            const number = commitsNumsArray.reduce((acc,cur)=> acc+cur,0);
            console.log(number);
            setSunNumber(number);
          };
          getSundayCommits();
          if(sunNumber !== 0){
            let commitsNum = localStorage.getItem('commits');
            let commitsNumber = parseInt(commitsNum);
            console.log(commitsNumber);
            localStorage.removeItem('commits');
            localStorage.setItem('commits',commitsNumber+1);
            console.log( localStorage.getItem("commits"));
        
          } else{
            
            localStorage.removeItem('commits');
            localStorage.setItem('commits', 0);  
          };



          
        }  else if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5 ||dayOfWeek === 6 ) {
      
          async function getCommits () {
            console.log(repoNames);
            console.log(owner)
            console.log({dayOfWeek});
            const commitsNumsArray1 =  await Promise.all(
              repoNames.map(async (names) => {
                const datas = await fetch(`https://api.github.com/repos/${owner}/${names}/stats/commit_activity`)
                .then((results)=>{
                  return results.json();
               }).then((data)=>{
                const weekDatas1 = data[data.length - 1];
                console.log(weekDatas1);
                const daysDatas1 = weekDatas1.days;
                console.log(dayOfWeek)
                return daysDatas1[dayOfWeek-1];
               })
               console.log(datas);
               return datas;
              })
            )

            const number1 = commitsNumsArray1.reduce((acc,cur)=> acc+cur,0);
            console.log(number1);
            setSunNumber(number1);
          };
          getCommits();

        };
  },[repoNames]);


  
// useEffect(()=>{
//   if(sunNumber !== 0){
//     let commitsNum = localStorage.getItem('commits');
//     let commitsNumber = parseInt(commitsNum);
//     console.log(commitsNumber);
//     localStorage.removeItem('commits');
//     localStorage.setItem('commits',commitsNumber);
//     console.log( localStorage.getItem("commits"));

//   } else{
    
//     localStorage.removeItem('commits');
//     localStorage.setItem('commits', 0);  
//   };
// },[sunNumber]);

let consecutiveDays = localStorage.getItem('commits');
console.log(consecutiveDays);

  return (
    <div className="sun">
      <p className="text">「{consecutiveDays}日間」 連続コミット！！</p>
    </div>
  );


};

export default Sun;
