import React, { useEffect, useState } from 'react'

function Counter() {

let[sec,setSec]=useState(0)
let[min,setmin]=useState(0)

let time;

    useEffect(()=>{
        time= setInterval(()=>{
            setSec(sec+1);
            if(sec == 59)
            {
                setmin(min + 1)
                setSec(0)
            }
        },1000)

        return()=> clearInterval(time);
    })

  return (
    <div style={{width:"200px",backgroundColor:"black",padding:"5px",margin:"auto",border:"1px solid",borderRadius:"20px"}}>
        <h2 style={{color:"white",textAlign:"center",fontSize:"30px"}}>Timer</h2>
        <h1 style={{color:"white",textAlign:"center"}}>{min} : {sec}</h1>
    </div>
  )
  }

export default Counter