import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../Context/UserContext'

function Restaurant({_id ,image, rest, variety, contact}) {

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
    postInfo.favourites.restaurant.map(rest=>{
      if(rest._id === _id){
        setLikes(1)
      }
   })
  })
})
}

async function like(e){
  e.preventDefault()
   const resource = await fetch(`http://localhost:4000/${user.id}/rest/${_id}?q=0`,{
    method: 'POST'
   })
 }

  return (
    <div key={_id} className='rest_item'>
      <Link to={`/rest/${_id}`}>
        <img src={image.url} alt="" />
        </Link>
        <div className="rest_desc">
            <div className="rest_head">
            <Link to={`/rest/${_id}`}>
            <h1>{rest}</h1>
            </Link>
            <h2>{variety}</h2>
            </div>
            <div className="rest_desc_contact">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#1AC84B" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1AC84B" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>4.0
                </p>
                <p>Ph. {contact}</p>
            </div>
        </div>
        {data.favourites && <form onSubmit={e=>like(e)} method='post'>
        {likes && (
           <button className="heart-like-button-two" id="heart"></button>
        )}
        {!likes && (
          <button className="heart-like-button" id="heart"></button>
        )}
      </form>}
    </div>
  )
}

export default Restaurant
