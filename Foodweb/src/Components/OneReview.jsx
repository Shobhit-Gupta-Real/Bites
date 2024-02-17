import React from 'react'

function OneReview({rating, review}) {
  return (
    <div>
      <h1>{rating}</h1>
      <p>{review}</p>
    </div>
  )
}

export default OneReview
