import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <div className='logo' style={{backgroundColor:"#FC8019"}}>
        <img src="footer logo.svg" alt="" />
        <h1 className='heading' style={{backgroundColor:"#FC8019", color:"white"}}>Bites</h1>
        </div>
        <div className='footer_navigate'>
            <section className='footer_links'>
              <a href="/">About us</a>
              <a href="/">Delivery</a>
              <a href="/">Help & Support</a>
              <a href="/">T&C</a>
            </section>
            <section className='social'>
                <img src="facebook icon.svg" alt="" />
                <img src="instagram.svg" alt="" />
                <img src="twitter.svg" alt="" />
            </section>
        </div>
        Contact: +91 1100110010
    </div>
  )
}

export default Footer
