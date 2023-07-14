

import React, { useContext } from "react";
// import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";

import './CartItem.scss'
import img from '../../../assets/3917c58eda4a3fc6e85eba3c1dd29d15.jpg'
const CartItem = () => {
  return (
    <div className='cart-products '>
      <div className="cart-product">
        <div className="image-container">
          <img src={img} alt="not" />
        </div>
        <div className="prod-details ">
          <span className="name">Product NAme</span>
          <MdClose className="close-btn"/>
          <div className='quantity-buttons'>
                <span>-</span>
                <span>3</span>
                <span>+</span>
          </div>
          <div className="text">
            <span>2</span>
            <span>x</span>
            <span className="highlight"> &#377;230</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
