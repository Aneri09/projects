import React, { useState } from 'react'

function Form() {

    let[name,setName]=useState('')
    let[email,setEmail]=useState('')
    let[pass,setPass]=useState('')

    let handlesunmit = ()=>{
      alert(`name : ${name} email : ${email} password : ${pass}`)
    }

  return (
        <form onSubmit={handlesunmit} className='box'>
            <h1>Log in </h1>
            <input type="text" placeholder='name' onChange={(e)=> setName(e.target.value)} />
            <input type="email" placeholder='email' onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e)=> setPass(e.target.value)}/>
            <input type="submit" />
            </form>
  )
}

export default Form