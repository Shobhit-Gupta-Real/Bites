import React, { useEffect, useState } from 'react'
import { useLoginContext } from '../Context/LoginContext'
import { useUserContext } from '../Context/UserContext'
import { Navigate } from 'react-router-dom'

function Login() {
  const {login, setLogin} = useLoginContext()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const {user, setUserInfo} = useUserContext();
  useEffect(()=>setLogin('SignUp'),[login])

  async function logging(e){
    e.preventDefault()
    const response = await fetch('http://localhost:4000/signin',{
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include'
      //this will include the cookie on our request and our cookie contains the jwt taken for authorization
    })
    if(response.ok){
      response.json().then(userInfo=>{
        setUserInfo(userInfo)
        setRedirect(true)
      })
    }else{
      alert('Wrong credentials')
    }
  }
  if(redirect){
    return <Navigate to={'/'}/>
  }
  return (
      <form action="" className='register' onSubmit={logging}>
        <h1 className='dark:text-slate-100' style={{alignSelf:'center', marginBottom:'15px'}}>Sign In</h1>
        <input type="text" placeholder='username' value={username} 
        onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} 
        onChange={e=> setPassword(e.target.value)}/>
        <button>Sign In</button>
      </form>
  )
}

export default Login
