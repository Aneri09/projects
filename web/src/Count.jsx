import React, { useEffect, useState } from 'react'

function Count() {

    let[time,setTime]=useState(0)
    let[startTimer,setStarTimer]=useState(false)
    let [timerId,setTimerId]=useState(0);

    useEffect(()=>{
        let nun = null;
        if(startTimer){
            nun = setInterval(()=>{
                setTime(prev => prev +=1);
            },1000);
            setTimerId(nun);
        }else{
            clearInterval(timerId)
        }
    },[startTimer])
    
    let clear=()=>{
        setTime(0)
    }
  return (
    <div style={{width:"300px",backgroundColor:"pink",border:"1px solid",borderRadius:"20px"}}>
           <div style={{textAlign:"center",fontSize:"50px",margin:"20px"}}>{time}</div>
      <button onClick={()=> setStarTimer(true)} >start</button>
      <button onClick={()=> setStarTimer(false)}>stop</button>
      <button onClick={()=> setStarTimer(true)} >Resume</button>
      <button onClick={clear} >Reset</button>
    </div>
  )
}

export default Count