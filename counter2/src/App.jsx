import React from 'react'
import { useState } from 'react'

function App() {
    let[num,setNum]=useState(0)

    let add=()=>{
        setNum(num+1)
    }
    document.title=` count ${num}`
  return (
    <div style={{width:"200px",backgroundColor:"blue",margin:"auto",padding:"5px",borderRadius:"20px"}}>
        <h1 style={{color:"white",textAlign:"center"}}>Count : {num}</h1>
        <button onClick={add}  style={{backgroundColor:"white",color:"blue",width:"100px",padding:"10px",fontSize:"20px",marginLeft:"50px",border:"1px solid",borderRadius:"20px",marginBottom:"10px"}}>Add</button>
        </div>
  )
}

export default App