import React from 'react'

function Restaurant({_id ,image, rest, variety, contact}) {
  return (
    <div key={_id} className='rest_item'>
        <img src={image.url} alt="" />
        <div className="rest_desc">
            <div className="rest_head">
            <h1>{rest}</h1>
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
    </div>
  )
}

export default Restaurant
