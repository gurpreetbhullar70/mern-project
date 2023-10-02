import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Nav = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()

    const logOut = ()=>{
        localStorage.clear()
        navigate('/register')
    }
  return (
    <div>
    {auth ? 
    <>

    <Link to='/'>Products</Link>
    <Link to='/create'>Create</Link>
    <Link onClick={logOut} to='/register'>Logout</Link>
    </>
    :
    <>
    <Link to='/register'>Register</Link>
    <Link to='/login'>Login</Link>
    </>
    }
    
    </div>
  )
}
