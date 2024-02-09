import React, { useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import { Link } from 'react-router-dom'


function NearRest() {
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
        <h1>NearBy Restaurant</h1>
        <div className="recommendation_item">
        {restaurant.length > 0 && restaurant.map(rest =>(
            <Restaurant {...rest}/>
         ))} 
        </div>
    </div>
  )
}

export default NearRest
