import React from 'react'

function Cart() {
  return (
    <div className='cart'>
        <section>
            <h1>Cart</h1>
            <p>2 Items</p>
        </section>
        <p>from <span style={{color:"#FC8019", background:"none"}}>Lunck box</span></p>
        <button className='cart_btn'>Checkout</button>
    </div>
  )
}

export default Cart
