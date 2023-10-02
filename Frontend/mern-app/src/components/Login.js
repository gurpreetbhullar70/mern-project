import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const auth = localStorage.getItem('user')

    useEffect(()=>{
        if(auth){
            navigate('/')
        }
    })

    const onSubmit = async()=>{
        console.log(email , password)
        let result = await fetch('http://localhost:8000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result= await result.json()
        if(result.userName){
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/')
        }else{
            console.log('not found')
        }
    }


  return (
    <div>
        <form action="/login">
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email'/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password'/>
        </form>
        <button onClick={onSubmit}>Login</button>
    </div>
  )
}
