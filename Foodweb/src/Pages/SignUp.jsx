import React, { useEffect, useState } from 'react'
import { useLoginContext } from '../Context/LoginContext'

function SignUp() {
    const {login, setLogin} = useLoginContext()
    useEffect(()=>setLogin('SignIn'), [login])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <form action="" className='register' onSubmit={'/'}>
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
