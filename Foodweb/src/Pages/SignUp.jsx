import React, { useEffect, useState } from 'react'
import { useLoginContext } from '../Context/LoginContext'
import { Navigate } from 'react-router-dom'
import { useUserContext } from '../Context/UserContext'

function SignUp() {
    const {login, setLogin} = useLoginContext()
    useEffect(()=>setLogin('SignIn'), [login])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [dp, setDp] = useState()
    const [redirect, setRedirect] = useState(false)
    const {user, setUserInfo} = useUserContext()

    async function logging(e){
      e.preventDefault()
      const data = new FormData(); //is creating a new instance of the FormData object in JavaScript.
      data.set('file', dp[0]);
      data.set('username', username);
      data.set('password', password)

      const response = await fetch('http://localhost:4000/signup',{
      method: 'POST',
      body: data,
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
        <svg xmlns="http://www.w3.org/2000/svg" id='profile_image' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
         </svg>
         <label htmlFor="input_file">
         <svg xmlns="http://www.w3.org/2000/svg" id='edit_profile_image' style={{transform:"translateY(-6.8rem)", translate:"4.3rem"}} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg></label>
        <input type="file" id='input_file' onChange={(e)=>setDp(e.target.files)}/>
        <input type="text" placeholder='username' value={username} 
        onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} 
        onChange={e=> setPassword(e.target.value)}/>
        <button>Sign Up</button>
      </form>
  )
}

export default SignUp
