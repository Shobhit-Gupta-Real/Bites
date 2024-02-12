import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../Context/UserContext'

function Item({_id ,image, name, description, price, restaurant}) {
  const {user, setUserInfo} = useUserContext()
  const [data, setData] = useState({})
  const [likes, setLikes] = useState(0)
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
  }, [likes]);

  if(user.id){
    fetch(`http://localhost:4000/${user.id}`,{
    credentials: 'include'
  }).then(response => {
    response.json().then(postInfo =>{
      setData(postInfo)
      postInfo.favourites.food.map(food=>{
        if(food._id === _id){
          setLikes(1)
        }
     })
    })
  })
}
 async function like(e){
  e.preventDefault()
   const resource = await fetch(`http://localhost:4000/${user.id}/food/${_id}?q=0`,{
    method: 'POST'
   })
 }
  return (
    <div className='item_container dark:bg-slate-100'>
      <div className="img_like">
      {image.url && (
        <img src={image.url} alt="" />
      )}
      {data.favourites && <form onSubmit={e=>like(e)} method='post'>
        {likes && (
           <button className="heart-like-button-two" style={{translate: "-3.5rem", transform: "translateY(1rem)"}} id="heart"></button>
        )}
        {!likes && (
          <button className="heart-like-button" style={{translate: "-3.5rem", transform: "translateY(1rem)"}} id="heart"></button>
        )}
      </form>}
      </div>
      <h1>{name}</h1>
      <h2><Link to={`/rest/${restaurant._id}`}>{restaurant.rest}</Link></h2>
      <section className='item_price'>
        <div className="price">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FC8019" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
{price}
        </div>
        <div className="time_estimate">
        <button className='bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md text-base' >ADD +</button>
        </div>
</section>
    </div>
  )
}

export default Item
