import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/UserContext'

   
    
function Foodadd({id}) {
    const [food, setFood] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState()
    const [dp, setDp] = useState()
    const {user, setUserInfo} = useUserContext()

    async function addFooditem(e){
      e.preventDefault()
      const data = new FormData(); //is creating a new instance of the FormData object in JavaScript.
      data.set('image', dp[0]);
      data.set('food', food.toLowerCase());
      data.set('desc', desc);
      data.set('price', price);

      const response = await fetch(`http://localhost:4000/doner/${id}`,{
      method: 'POST',
      body: data,
      credentials: 'include'
    })
    if(response.status === 200){
        alert('Added Food Item!')
    }else{
        alert('Food Not Added!')
    }
    }
  return (
    <div>
      <form action="" className='register' onSubmit={addFooditem}>
        <h1 className='dark:text-slate-100' style={{alignSelf:'center', marginBottom:'15px'}}>Add Food Item</h1>
        <svg xmlns="http://www.w3.org/2000/svg" id='profile_image' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

         <label htmlFor="input_file">
         <svg xmlns="http://www.w3.org/2000/svg" id='edit_profile_image' style={{transform:"translateY(-6.8rem)", translate:"4.3rem"}} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg></label>

        <input type="file" id='input_file' onChange={(e)=>setDp(e.target.files)}/>
        <input type="text" placeholder='Food Name' value={food} 
        onChange={e => setFood(e.target.value)}/>
        <input type="text" placeholder='Description' value={desc}
        onChange={e=> setDesc(e.target.value)}/>
        <input type="text" placeholder='Price' value={price} 
        onChange={e => setPrice(e.target.value)}/>
        <button>Add Food</button>
      </form>
    </div>
  )
}

export default Foodadd

