import "./Gauge.css"
import { useAuthContext, useGitInfoContext } from "./context";
import React, { useEffect } from "react";




const Gauge = () => {
const { commits } = useGitInfoContext();


useEffect(()=>{
console.log(commits)

const lifeBar = document.getElementById('life-bar');
const lifeMark = document.getElementById('life-mark');
let life = 0;

  if (commits <= 20) {
  lifeBar.style.width =String((commits/20)*100)+"%";
  } else if (20 < commits && commits <= 45) {
    lifeBar.style.width =String(((commits-20)/25)*100)+"%";

  } else if (45 < commits && commits <= 80) {
    lifeBar.style.width =String(((commits-45)/35)*100)+"%";

  } else if (80 < commits && commits <= 115) {
    lifeBar.style.width =String(((commits-80)/35)*100)+"%";

  } else if (115 < commits && commits <= 140) {

    lifeBar.style.width =String(((commits-115)/25)*100)+"%";

  } else if (140 < commits && commits <= 170) {
    lifeBar.style.width =String(((commits-140)/30)*100)+"%";

  } else if (170 < commits && commits <= 210) {
    lifeBar.style.width =String(((commits-170)/40)*100)+"%";

  } else if (210 < commits && commits <= 250) {
    lifeBar.style.width =String(((commits-210)/40)*100)+"%";

  } else if (250 < commits && commits <= 300) {
    lifeBar.style.width =String(((commits-250)/50)*100)+"%";

  }

},[commits]);



 return(
<div id="life-frame">
    <p id="life-bar"></p>
    <p id="life-mark"></p>
</div>
 );
};

export default Gauge;


