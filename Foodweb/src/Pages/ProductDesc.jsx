import React, { useEffect, useState } from 'react'
import Cart from '../Components/Cart'
import { useParams } from 'react-router-dom'
import MenuList from '../Components/MenuList'

function ProductDesc() {
  const [info, setInfo] = useState({})
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const {id} = useParams()
  useEffect(()=>{
   window.scrollTo(0, 0); //to bydefault open the top view of the page
   fetch(`http://localhost:4000/rest/${id}`,{
    credentials: 'include'
   })
    .then(response =>{
        response.json().then(postInfo =>{
            setInfo(postInfo)
            setList(postInfo.menu)
        })
    })
},[])
 
  
  function searching(){
    for(let i=0;i<list.length;i++){
      if(list[i].name === search){
        setList([list[i]])
        break
      }
    }
  }
  
  return (
    <div className='product_details'>
        <div className="banner">
        {info.image && (
          <img src={info.image.url} alt="" />
        )}
                <section className='details'>
                    <h1>{info.rest}</h1>
                    <h2>{info.variety}</h2>
                    <div className="ordering">
                        <section className='value'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#1AC84B" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1AC84B" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>4.0
                    <h4>100+ ratings</h4>
                        </section>
                        <img src="/line.svg" alt="" />
                        <section className='value'>
                            <h4>{info.address}</h4>
                        </section>
                        <img src='/line.svg' alt=''/>
                        <div className="value">
                        <h4>+91-{info.contact}</h4>
                        </div>

                    </div>
                </section>
            <div className="offers">
            <h1>Offers</h1>
            <div className="offer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FC8019" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
<h2>50% off up to ₹100 | Use code TRYNEW</h2>
</div>
<div className="offer">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FC8019" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
<h2>20% off | Use code PARTY</h2>
</div>
            </div>
        </div>
        <div className='search_banner'>
                <input type="text" name='' placeholder='Search for dish' 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
                <button onClick={searching}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
                </button>
            </div>
        <div className="product_content">
          <div className="product_recommend">
            <h1 style={{color:"#FC8019", fontSize:"1.5rem"}}>Recommended</h1>
            <ul>
              <li/> Breakfast Box
              <li> Lunch Box</li>
            </ul>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="500" viewBox="0 0 2 500" fill="none">
          <path d="M1 0V500" stroke="#202020"/>
          </svg> 
          <div className="foodlist">
          {list && (list.length > 0 && list.map(item=>(
            <MenuList {...item}/>
          )))}
          </div>
          <Cart/>       
    </div>
    </div>
  )
}

export default ProductDesc
