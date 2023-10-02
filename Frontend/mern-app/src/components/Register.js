import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const[userName,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate()

  const auth = localStorage.getItem('user')

  useEffect(()=>{
    if(auth){
      navigate('/')
    }
  })

const onSubmit = async()=>{
  let result = await fetch('http://localhost:8000/register',{
    method:'post',
    body:JSON.stringify({userName,email,password}),
    headers:{
      'Content-Type':'application/json'},
    })
    result=await result.json()
    localStorage.setItem('user',JSON.stringify(result))
  if(result){
    navigate('/')
  }
}

  return (
    <div>
        <form action="register/">
            <input type="text" onChange={(e)=>setName(e.target.value)} value={userName} placeholder='Name'/>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email'/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password'/>
        </form>
        <button onClick={onSubmit}>register</button>
    </div>
  )
}
