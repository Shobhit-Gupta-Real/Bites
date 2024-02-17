import React, { useCallback, useEffect, useState } from 'react'
import { useUserContext } from '../Context/UserContext'
import { Navigate, json } from 'react-router-dom'

function Profile() {
    const [dp, setDp] = useState({})
    const {user, setUserInfo} = useUserContext()
    const [dpimg, setDpimg] = useState(dp.cover)
    const [username, setUsername] = useState(user.username)
    const [redirect, setRedirect] = useState(false)

    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000/profile', {
            credentials: 'include'
          });
    
          if (!response.ok) {
            console.log('Network response was not ok');
          }
    
          const userInfo = await response.json();
          setUserInfo(userInfo);
          setUsername(userInfo.username)
          const data = await fetch(`http://localhost:4000/${userInfo.id}`)
          const finalval = await data.json()
          setDp(finalval)
        } catch (error) {
          console.log('Error fetching profile:', error);
        }
      };
    
      fetchData();
    }, []);

  async function update(ev) {
    ev.preventDefault();
    const data = {
      username: username,
    }

    const response = await fetch(`http://localhost:4000/update/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Correctly assign FormData directly to the 'body' property
      credentials:'include'
    });
  
    if (response.ok) {
      response.json().then(updatevalue => {
        setDp(updatevalue);
      });
  
      alert('Updated!');
    } else {
      alert('Update failed!');
    }
  }

  if(!user){
    return <Navigate to={'/'}/>
  }    
  return (
    <form className='profile_page' onSubmit={update}>
        <h1 className='dark:text-white'>Account Settings</h1>
        <div className="profile_edit">
        {!dp.cover && (
            <svg xmlns="http://www.w3.org/2000/svg" id='profile_image' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        )}
        {dp.cover && <img src={dp.cover.url} id='profile_dp' />}
         <label htmlFor="input_file">
         <svg xmlns="http://www.w3.org/2000/svg" id='edit_profile_image' style={{transform: "translateY(-50.5px)", translate: "-132px"}} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg></label>
        <input type="file" id='input_file' onChange={(e)=>setDpimg(e.target.files)}/>
         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
         <button className='funcbtn dark:bg-white dark:text-black'>Update</button>
        </div>
    </form>
  )
}

export default Profile
