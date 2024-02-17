import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/UserContext'
import OneReview from './OneReview'

function Reviews({id, reviewList, action}) {
    const [star, setStar] = useState(0)
    const [text, setText] = useState('')
    const {user, setUserInfo} = useUserContext()
    useEffect(()=>{
        fetch('http://localhost:4000/profile',{
            credentials: 'include'
        }).then(response=> response.json.then(
            data => setUserInfo(data)
        ))
    },[])
    const body = {
        star, text
    }
    async function send_review(e){
        e.preventDefault()
        const response = await fetch(`http://localhost:4000/rest/${id}/review/${user.id}`,{
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
        if(response.ok){
            alert('Review Added')
            action()
            setStar(0)
            setText('')
        }
    }
  return (
    <div>
    <form onSubmit={send_review}>
      <h1>Leave a Review</h1>
      <fieldset class="starability-basic">
        <input type="radio" id="no-rate" class="input-no-rate" name="review[rating]" onClick={()=>setStar(0)} checked aria-label="No rating." />
        <input type="radio" id="first-rate1" name="review[rating]" onClick={()=>setStar(1)} />
        <label for="first-rate1" title="Terrible">1 star</label>
        <input type="radio" id="first-rate2" name="review[rating]" onClick={()=>setStar(2)} />
        <label for="first-rate2" title="Not good">2 stars</label>
        <input type="radio" id="first-rate3" name="review[rating]" onClick={()=>setStar(3)} />
        <label for="first-rate3" title="Average">3 stars</label>
        <input type="radio" id="first-rate4" name="review[rating]" onClick={()=>setStar(4)} />
        <label for="first-rate4" title="Very good">4 stars</label>
        <input type="radio" id="first-rate5" name="review[rating]" onClick={()=>setStar(5)} />
        <label for="first-rate5" title="Amazing">5 stars</label>
     </fieldset>
     <textarea id="body" cols="30" rows="3" class="review" value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Write a review'
        required></textarea>
        <button class="funcbtn dark:text-black dark:bg-slate-100">Submit</button>
    </form>
    {reviewList && (
       reviewList.map((data)=>(<OneReview {...data}/>))
    )}
    </div>
  )
}

export default Reviews