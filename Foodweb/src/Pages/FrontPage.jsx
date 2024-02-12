import React, { useEffect } from 'react'
import Background from '../Components/Background'
import Recommend from '../Components/Recommend'
import { useLoginContext } from '../Context/LoginContext'
import NearRest from '../Components/NearRest'

function FrontPage() {
  const {login, setLogin} = useLoginContext()
  useEffect(()=>setLogin('SignIn'), [login])
  return (
    <>
    <div className='frontpage'>
        <div className='content'>
            <p className='dark:text-slate-300'>Premium <span>quality</span> Food for your <span>healthy & Daily Life</span> </p>
            <h2 className='dark:text-slate-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</h2>
            <div className='delivery'>
            <input type="text" placeholder='Enter your delivery location'/>
            <button className='funcbtn dark:text-black dark:bg-slate-100'>Get Started</button>
    </div>
    <h2 className='dark:text-slate-300'>Popular cities in India</h2>
    <p style={{fontSize:"1rem", color :"gray"}}>Hyderabad
     <span style={{fontSize:"1rem", margin:"0.75rem"}}>Chennai</span> Mumbai 
     <span style={{fontSize:"1rem", margin:"0.75rem"}}>Bangalore</span> Delhi 
     <span style={{fontSize:"1rem", margin:"0.75rem"}}>Kolkata</span></p>
    </div>
    <div className='slides'>
        <img src="./Rectangle 1.png" alt="" style={{width:"25rem", height:"30rem", margin:"auto"}} />
        <img src="./Rectangle 2.png" alt="" style={{width:"25rem", height:"20rem", margin:"auto"}}/>
    </div>
    </div>
    <Background/>
    <Recommend/>
    <NearRest/>
    </>
  )
}

export default FrontPage
