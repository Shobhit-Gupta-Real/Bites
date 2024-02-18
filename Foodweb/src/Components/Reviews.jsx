import React, { useEffect, useState, useMemo } from 'react';
import { useUserContext } from '../Context/UserContext';
import OneReview from './OneReview';

function Reviews({ id, reviewList, action }) {
  const [star, setStar] = useState(0);
  const [text, setText] = useState('');
  const { user, setUserInfo } = useUserContext();

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then(response => response.json().then(
      data => setUserInfo(data)
    ));
  }, []);

  const starRating = useMemo(() => {
    return (
      <fieldset className="starability-basic">
        <input type="radio" id="no-rate" className="input-no-rate" name="review[rating]" onClick={() => setStar(0)} checked aria-label="No rating." />
        {[1, 2, 3, 4, 5].map((rating) => (
          <React.Fragment key={rating}>
            <input type="radio" id={`first-rate${rating}`} name="review[rating]" onClick={() => setStar(rating)} />
            <label htmlFor={`first-rate${rating}`} title={rating === 1 ? 'Terrible' : rating === 5 ? 'Amazing' : `${rating} stars`}>{rating} star{rating !== 1 ? 's' : ''}</label>
          </React.Fragment>
        ))}
      </fieldset>
    );
  }, [star]);

  async function send_review(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/rest/${id}/review/${user.id}`, {
      method: 'POST',
      body: JSON.stringify({ star, text }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });
    if (response.ok) {
      alert('Review Added');
      action();
      setStar(0);
      setText('');
    }
  }

  return (
    <div>
      {user.id && (
        <form onSubmit={send_review}>
          <h1>Leave a Review</h1>
          {starRating}
          <textarea id="body" cols="30" rows="3" className="review" value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Write a review'
            required></textarea>
          <button className="funcbtn dark:text-black dark:bg-slate-100">Submit</button>
        </form>
      )}
      {reviewList && (
        reviewList.map((data) => (<OneReview key={data._id} {...data} id={id} action={action} />))
      )}
    </div>
  );
}

export default Reviews;
