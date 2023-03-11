
import { useState } from "react";
import React, { useEffect } from "react";
import "./Sun.css";

const Sun = ({ repoNames }) => {
  const owner = localStorage.getItem("owner");
  const [sunNumber, setSunNumber] = useState(0);//昨日のコミット数
  const [dayOfWeek,setDayOfWeek] =useState(0); //曜日
  
  
useEffect(()=>{
  const day = new Date();
  const _dayOfWeek = day.getDay();
  console.log(_dayOfWeek);
  setDayOfWeek(_dayOfWeek);

},[]);
console.log(dayOfWeek);////ここが沢山出てくる


  useEffect(() => {
        if({dayOfWeek} === 0){
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
                const daysDatas = weekDatas.days;
                return daysDatas[6];
               })
              })
            )
            const number = commitsNumsArray.reduce((acc,cur)=> acc+cur,0);
            setSunNumber(number);
          };
          getSundayCommits();
          
        } else {
          // console.log(22222222222222);
          async function getCommits () {
            console.log(22222222222222);//ok
            const commitsNumsArray1 =  await Promise.all(
              repoNames.map(async (names) => {
                const datas = await fetch(`https://api.github.com/repos/${owner}/${names}/stats/commit_activity`)
                .then((results)=>{
                  return results.json();
               }).then((data)=>{
                const weekDatas1 = data[data.length - 1];
                console.log(weekDatas1);
                const daysDatas1 = weekDatas1.days;
                console.log(daysDatas1)
                return daysDatas1[{dayOfWeek}-1];
               })
               return datas;
              })
            )

            const number1 = commitsNumsArray1.reduce((acc,cur)=> acc+cur,0);
            console.log(number1);
            setSunNumber(number1);
          };
          getCommits();
        }

        return (
              <div className="sun">
                <p className="text">「{sunNumber} 日間」 連続コミット！！</p>
              </div>
            );

  },[dayOfWeek]);

          
  // useEffect(()=>{


  // },[setSunNumber]);
  

}
//       async function getCommitsArray () {
//       const commitsNumsArray =  await Promise.all(
//         repoNames.map(async (names) => {
//           const data = await fetch(
//             `https://api.github.com/repos/${owner}/${names}/stats/commit_activity`
//           )
//             .then((results) => {
//               return results.json();
//             }).then((data)=>{






//               const commitsData =data[data.length - 2];//先週
              
//               commitsData.push(data[data.length - 1]);//今週
//               console.log(commitsData);
//             }).then((thisweek,lastweek)=>{
              
//             })
//               // console.log(data)
//             // if (dayOfWeek === 0) {  //日曜日
//             //     console.log(commitsdatas);
//             //     console.log(commitsdatas["days"]);
//             //     const CommitsNums = commitsdatas["days"];
//             //     console.log(CommitsNums);
//             //     console.log(CommitsNums[6])
//             //     return  CommitsNums[6];
//             //  }else if(dayOfWeek !== 0){  
//             //     console.log(commitsdatas1);
//             //     console.log(commitsdatas1["days"]);
//             //     const CommitsNums1 = commitsdatas1["days"];
//             //     return  CommitsNums1[dayOfWeek-1];
//             //  }

          
//             //  else if(dayOfWeek === 2) {
//             //   const commitsdatas2 = data[data.length - 1];
//             //   const CommitsNums2= commitsdatas2["days"];
//             //   return  CommitsNums2[1];
//             //  } else if(dayOfWeek ===3) {
//             //   const commitsdatas3 = data[data.length - 1];
//             //   const CommitsNums3 = commitsdatas3["days"];
//             //   return  CommitsNums3[2];
//             //  } else if(dayOfWeek ===4) {
//             //   console.log(1111)
//             //   const commitsdatas4= data[data.length - 1];
//             //   const CommitsNums4 = commitsdatas4["days"];
//             //   return  CommitsNums4[3];
//             //  } else if(dayOfWeek === 5) {
//             //   const commitsdatas5 = data[data.length - 1];
//             //   console.log(commitsdatas5);
//             //     console.log(commitsdatas5["days"]);
//             //   const CommitsNums5 = commitsdatas5["days"];
//             //   console.log(CommitsNums5[4]);
//             //   return  CommitsNums5[4];
//             //  } else if(dayOfWeek === 6) {
//             //   const commitsdatas6 = data[data.length - 1];
//             //   const CommitsNums6 = commitsdatas6["days"];
//             //   return  CommitsNums6[5];
//             //  } 
            
//           }));
          
//           // console.log(commitsNumsArray);
//           // const number = commitsNumsArray.reduce((acc,cur)=> acc+cur,0);
//           //   console.log(number);
//           //   setSunNumber(number);
//           // return
        
     
    
// // console.log(commitsNumsArray);            // .then((datas) => {
//             //     if (dayOfWeek === 0) {      //日曜 
//             //             const commitsdatas = datas[datas.length - 2];
//             //             console.log(commitsdatas);
//             //             console.log(commitsdatas["days"]);
//             //             const CommitsNums = commitsdatas["days"];
//             //             return  CommitsNums[6];
//             //       } else if (dayOfWeek === 1) {
//             //             const Mon_Commitsdatas = datas[datas.length - 1];
//             //             console.log( Mon_Commitsdatas);
//             //             const Mon_WeeklyCommits =  Mon_Commitsdatas["days"];
//             //             return  Mon_WeeklyCommits[0];
//             //       } else if (dayOfWeek === 2) {
//             //         const commitsdatas = datas[datas.length - 2];
//             //         console.log(commitsdatas);
//             //         console.log(commitsdatas["days"]);
//             //         const CommitsNums = commitsdatas["days"];
//             //         return  CommitsNums[6];
//             //       } else if (dayOfWeek === 3) {
//             //         const commitsdatas = datas[datas.length - 2];
//             //         console.log(commitsdatas);
//             //         console.log(commitsdatas["days"]);
//             //         const CommitsNums = commitsdatas["days"];
//             //         return  CommitsNums[6];
//             //       } else if (dayOfWeek === 4) {
//             //         const commitsdatas1 = datas[datas.length - 2];
//             //         console.log(commitsdatas1);
//             //         console.log(commitsdatas1["days"]);
//             //         const CommitsNums1 = commitsdatas1["days"];
//             //         console.log(CommitsNums1[6])
//             //         return  CommitsNums1[6];
//             //       } else if (dayOfWeek === 5) {
//             //         const commitsdatas = datas[datas.length - 2];
//             //         console.log(commitsdatas);
//             //         console.log(commitsdatas["days"]);
//             //         const CommitsNums = commitsdatas["days"];
//             //         return  CommitsNums[6];
//             //       } else if (dayOfWeek === 6) {
//             //         const commitsdatas = datas[datas.length - 2];
//             //             console.log(commitsdatas);
//             //             console.log(commitsdatas["days"]);
//             //             const CommitsNums = commitsdatas["days"];
//             //             return  CommitsNums[6];
                 
//             //     }
//             // });

//           // console.log(data["total"]);
          
//       //   })
//       // );

//         // console.log(commitsNumsArray);
//         // const number = commitsNumsArray.reduce((acc,cur)=> acc+cur,0);
//         // console.log(number);
//         // setSunNumber(number);
//     }
   
//     getCommitsArray();
//     }, []);



//     // ナンバーが0なら
      
//   //   // });  

//   //     //配列の中身足す

//   //     // ０か0いがいか判断
//   //     // if(0)

//   //     // else(1)
//   //   // });

//   // //   console.log(a);//undefined
//   // //   const weekly = a.reduce((acc,cur)=>acc+cur ,0);
//   // //   console.log(weekly);//Nan
//   // //   setWeeklyCommits(weekly);
//   // }, [date]);

//   
// };

export default Sun;
