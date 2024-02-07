import React from 'react'

function MenuList({name, image, description, price}) {
  return (
    <main>
    <div className="main_details">
            <h1>{name}</h1>
            <h2>₹{price}</h2>
            <p>{description}</p>
            </div>
            <div className="add_item">
             {image && (<img src={image.url} />)}
              <button>Add +</button>
    </div>
    </main>
  )
}

export default MenuList
