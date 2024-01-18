import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Partials/Navbar'
import Footer from './Partials/Footer'


function Layout() {
  return (
    <div className='web'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
