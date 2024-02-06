import React, { useEffect, useState } from 'react'
import Restaurant from '../Components/Restaurant'
import { Link } from 'react-router-dom'


function Rest() {
    const [restaurant, setRestaurant] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:4000/rest`,{
      credentials: 'include'
    }).then(response => {
      response.json().then(postInfo =>{
        setRestaurant(postInfo)
      })
    })
    },[])

  return (
    <div className='recommend_box'>
        <h1>Restaurant</h1>
        <div className="recommendation_item">
        {restaurant.length > 0 && restaurant.map(rest =>(
             <Link to={`/doner/${rest._id}`}><Restaurant {...rest}/></Link>
         ))} 
        </div>
    </div>
  )
}

export default Rest
