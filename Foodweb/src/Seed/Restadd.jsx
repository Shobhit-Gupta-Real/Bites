import React, { useEffect, useState } from 'react'
import { useLoginContext } from '../Context/LoginContext'
import { Navigate } from 'react-router-dom'
import { useUserContext } from '../Context/UserContext'

   
    
function Restadd() {
    const {login, setLogin} = useLoginContext()
    useEffect(()=>setLogin('SignIn'), [login])
    const [rest, setRest] = useState('')
    const [variety, setVariety] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState()
    const [dp, setDp] = useState()
    const [redirect, setRedirect] = useState(false)
    const {user, setUserInfo} = useUserContext()

    async function addRestaurant(e){
      e.preventDefault()
      const data = new FormData(); //is creating a new instance of the FormData object in JavaScript.
      data.set('image', dp[0]);
      data.set('rest', rest.toLowerCase());
      data.set('variety', variety);
      data.set('address', address);
      data.set('contact', contact);

      const response = await fetch('http://localhost:4000/addrestu',{
      method: 'POST',
      body: data,
      credentials: 'include'
    })
    if(response.status === 200){
        setRedirect(true)
        alert('Added Restaurant!')
    }else{
      console.log(response)
    }
    }
    if(redirect){
      return <Navigate to={'/'}/>
    }

  return (
    <div>
      <form action="" className='register' onSubmit={addRestaurant}>
        <h1 className='dark:text-slate-100' style={{alignSelf:'center', marginBottom:'15px'}}>Add Food Item</h1>
        <svg xmlns="http://www.w3.org/2000/svg" id='profile_image' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

         <label htmlFor="input_file">
         <svg xmlns="http://www.w3.org/2000/svg" id='edit_profile_image' style={{transform:"translateY(-6.75rem)", translate:"4.35rem"}} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg></label>

        <input type="file" id='input_file' onChange={(e)=>setDp(e.target.files)}/>
        <input type="text" placeholder='Restaurant Name' value={rest} 
        onChange={e => setRest(e.target.value)}/>
        <input type="text" placeholder='Variety' value={variety} 
        onChange={e => setVariety(e.target.value)}/>
        <input type="text" placeholder='Address' value={address}
        onChange={e=> setAddress(e.target.value)}/>
        <input type="text" placeholder='Contact' value={contact} 
        onChange={e => setContact(e.target.value)}/>
        <button>Add Restaurant</button>
      </form>
    </div>
  )
}

export default Restadd
