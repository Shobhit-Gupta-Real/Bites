import React, { useEffect, useState } from 'react'
import Item from './Item'

function Recommend() {
  const [food, setFood] = useState({})
  useEffect(()=>{
    fetch(`http://localhost:4000/food`)
    .then(response=>(
      response.json().then(data=>(
        setFood(data)
      ))
    ))
  }, [])

  return (
    <div className='recommend_box'>
      <h1 className='dark:text-slate-100'>Personalized recommendations</h1>
      <div className='recommendation_item'>
      {food.length > 0 && food.map(item=>(
            <Item {...item}/>
      ))}
      </div>
    </div>
  )
}

export default Recommend
