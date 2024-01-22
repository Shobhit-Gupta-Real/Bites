import React, { useEffect, useState } from 'react'
import { useLoginContext } from '../Context/LoginContext'
import { Navigate } from 'react-router-dom'
import { useUserContext } from '../Context/UserContext'

function SignUp() {
    const {login, setLogin} = useLoginContext()
    useEffect(()=>setLogin('SignIn'), [login])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const {user, setUserInfo} = useUserContext()

    async function logging(e){
      e.preventDefault()
      const response = await fetch('http://localhost:4000/signup',{
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include'
    })
    if(response.status === 200){
        setRedirect(true)
        alert('Signed Up!')
    }else{
      alert('Registration failed!')
    }
    }
    if(redirect){
      return <Navigate to={'/SignIn'}/>
    }
    
  return (
    <form action="" className='register' onSubmit={logging}>
        <h1 className='dark:text-slate-100' style={{alignSelf:'center', marginBottom:'15px'}}>Sign Up</h1>
        <input type="text" placeholder='username' value={username} 
        onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} 
        onChange={e=> setPassword(e.target.value)}/>
        <button>Sign Up</button>
      </form>
  )
}

export default SignUp
