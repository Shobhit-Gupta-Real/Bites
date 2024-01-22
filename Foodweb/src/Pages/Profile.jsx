import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/UserContext'
import { Navigate } from 'react-router-dom'

function Profile() {
    const {user, setUserInfo} = useUserContext()
    useEffect(()=>{
        fetch('http://localhost:4000/profile',{
          credentials: 'include',
        }).then(response=>{
          response.json().then(userInfo=>{
            setUserInfo(userInfo)
          })
        })
      }, [user, setUserInfo])
  if(!user){
    return <Navigate to={'/'}/>
  }    
  return (
    <div className='profile_page'>
        <h1>Account Settings</h1>
        <div className="profile_edit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
         </svg>
         <input type="text" value={user.username}/>
         <button className='funcbtn'>Update</button>
        </div>
    </div>
  )
}

export default Profile
