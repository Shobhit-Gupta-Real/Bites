import React from 'react'
import { Link } from 'react-router-dom'

function Item({item, des ,img, price, time}) {
  return (
    <Link to='/done'><div className='item_container'>
      <img src={img} alt="" />
      <h1>{item}</h1>
      <h2>{des}</h2>
      <section className='item_price'>
        <div className="price">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FC8019" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
{price}
        </div>
        <div className="time_estimate">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FC8019" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>
{time}min
        </div>
</section>
    </div>
    </Link>
  )
}

export default Item
