import React from 'react'

function MenuList({name, image, description, price}) {
  return (
    <main>
    <div className="main_details">
            <h1 className='dark:text-white'>{name}</h1>
            <h2 className='dark:text-slate-100'>₹{price}</h2>
            <p className='dark:text-slate-300'>{description}</p>
            </div>
            <div className="add_item">
             {image && (<img src={image.url} />)}
              <button className='dark:text-black'>Add +</button>
    </div>
    </main>
  )
}

export default MenuList
