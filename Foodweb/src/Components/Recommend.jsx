import React from 'react'
import Item from './Item'

function Recommend() {
  return (
    <div className='recommend_box'>
      <h1>Personalized recommendations</h1>
      <div className='recommendation_item'>
        <Item img="food (1).png" price={200} time={25} item="Aloo Paratha Curd Meal (2 pcs)" des="lunch box"/>
        <Item img="food (2).png" price={800} time={35} item="Paneer Tikka Rice Bowl" des="the good bowl"/>
        <Item img="food (3).png" price={200} time={15} item="Mixed Veg Fried Rice with dry fruits" des="kerala cafe"/>
        <Item img="food (4).png" price={150} time={25} item="Baked Pizza Wrap - Vegetarian" des="wraps and rolls"/>
      </div>
    </div>
  )
}

export default Recommend
