import React from 'react'

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from './CartItem/CartItem';

import "./Cart.scss";

const Cart = ({setShowCard}) => {
  return (
    <div className='cart-panel'>
      <div className='opac-layer' />
      <div className='cart-content'>
        <div className='cart-header'>
          <span className='heading'>Shoping Cart</span>
          <span className='close-btn' onClick={()=>setShowCard(false)}>
            <MdClose/>
            <span className='text'>Close</span>
          </span>
        </div>

        {/* <div className='empty-cart'>
          <BsCartX/>
          <span>No Products in the cart.</span>
          <button className="return-cta" onClick={() => {}}>Return to the Shop</button>
        </div> */}

        <>
          <CartItem/>
          <div className='cart-footer'>
            <div className='subtotal'>
              <span className="text">Subtotal</span>
              <span className="text total">500</span>
            </div>
            <div className="button">
              <button className='checkout-cta'>Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Cart
