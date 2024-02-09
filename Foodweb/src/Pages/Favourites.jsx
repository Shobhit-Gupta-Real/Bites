import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Item from '../Components/Item'
import Restaurant from '../Components/Restaurant'

function Favourites() {
    const [fav, setFav] = useState()
    const [view, setView] = useState('food')
    const {id} = useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Delay the execution of fetch by 1 second
                await new Promise(resolve => setTimeout(resolve, 150));
    
                // Proceed with the fetch after the delay
                const response = await fetch(`http://localhost:4000/${id}`, {
                    credentials: 'include'
                });
     
                const postInfo = await response.json();
                setFav(postInfo);
            } catch (error) {
                console.error('Error in fetching data:', error);
            }
        };
    
        fetchData();
    }, [view]);
    
    const handleReload = () => {
        window.location.reload();
    };
  return (
    <div className='search_result'>
        <h1>Favourites</h1>
        <div className="search_control">
        <button className='focus:outline-none focus:bg-orange-500 focus:text-white bg-white border border-orange-500 rounded-full py-2 px-4 transition-colors duration-300 ease-in-out' autoFocus onClick={handleReload}>Food</button>
        <button className='focus:outline-none focus:bg-orange-500 focus:text-white bg-white border border-orange-500 rounded-full py-2 px-4 transition-colors duration-300 ease-in-out' onClick={e=>setView('rest')}>Restaurant</button>
        </div>
        <div className="search_content">
        {view === 'food' ? (
                    fav && fav.favourites.food.length > 0 ? (
                        fav.favourites.food.map(food => (
                            <Item key={food._id} {...food} />
                        ))
                    ) : (
                        <img className='notfound' src="../notfound.jpg" alt="" />
                    )
                ) : (
                    fav && fav.favourites.restaurant.length > 0 ? (
                        fav.favourites.restaurant.map(rest => (
                            <Link to={`/rest/${rest._id}`}><Restaurant key={rest._id} {...rest} /></Link>
                        ))
                    ) : (
                        <img className='notfound' src="../notfound.jpg" alt="" />
                    )
        )}
        </div>
    </div>
  )
}

export default Favourites
