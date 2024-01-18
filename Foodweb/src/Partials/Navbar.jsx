import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../Context/LoginContext'
function Navbar() {
  const [search, setSearch] = useState('')
  const {login, setLogin} = useLoginContext()
    function searching(){
        
    }
  return (
    <div className='navbar'>
        <div className='logo'>
        <img src="./Subtract.png" alt="" />
        <Link to='/'>
        <h1 className='heading'>Bites</h1>
        </Link>
        </div>

        <div className='func'>
            <div className='search'>
                <input type="text" name='' placeholder='Enter item or restaurant you are looking for' 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
                <button onClick={searching}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
                </button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
        <Link to={`/${login}`}><button className='funcbtn'>{login}</button></Link>
        </div>
    </div>
  )
}
export default Navbar
