import React, { useEffect, useState } from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
import { useLoginContext } from '../Context/LoginContext'
import { useUserContext } from '../Context/UserContext'
import { isValidObjectId } from 'mongoose'
function Navbar() {
  const [search, setSearch] = useState('')
  const {login, setLogin} = useLoginContext()
  const [dp, setDp] = useState({})
  const {user, setUserInfo} = useUserContext()
  
    function searching(){
        
    }

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
        } catch (error) {
          console.log('Error fetching profile:', error);
        }
      };
    
      fetchData();
    }, []);

    if(user.id){
        fetch(`http://localhost:4000/${user.id}`,{
        credentials: 'include'
      }).then(response => {
        response.json().then(postInfo =>{
          setDp(postInfo)
        })
      })
    }
    async function logout(){
      const gone = await fetch('http://localhost:4000/logout',{
        credentials: 'include',
        method:'POST'
      })
      setUserInfo({}) 
    }
  return (
    <div className='navbar'>
        <div className='logo'>
        <img src="./Subtract.png" alt="" />
        <Link to='/'>
        <h1 className='heading'>Bites</h1>
        </Link>
        </div>

        <div className='func'>
            <div className='search'>
                <input type="text" name='' placeholder='Enter item or restaurant you are looking for' 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
                <button onClick={searching}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
                </button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
      {user.id && (
        <>
        <NavLink to="/profile"> 
        {!dp.cover && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
         </svg>)}
         {dp.cover && <img src={`http://localhost:4000/${dp.cover}`} id='dp' alt="" />}
         </NavLink>
        <Link onClick={logout}><button className='funcbtn'>Log Out</button></Link>
        </>
      )}
      {!user.id && (
        <Link to={`/${login}`}><button className='funcbtn'>{login}</button></Link>
      )}
        </div>
    </div>
  )
}
export default Navbar
